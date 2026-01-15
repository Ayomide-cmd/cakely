import { useFetcher, useLoaderData } from 'react-router-dom';
import { getOrder } from "../services/apiRestaurant.js";
import {
  calcMinutesLeft,
  formatCurrency,
  formatDate,
} from '../../utils/helpers';
import OrderItem from './OrderItem';
import { useEffect } from 'react';
import UpdateOrder from './UpdateOrder';

function Order() {
  const order = useLoaderData();
  const fetcher = useFetcher();

  useEffect(() => {
    if (!fetcher.data && fetcher.state === 'idle') fetcher.load('/menu');
  }, [fetcher]);

  if (!order || !order.id) {
    return (
      <div className="px-4 py-6">
        <p className="text-stone-600">Retrieving cake order details...</p>
      </div>
    );
  }

  const {
    id,
    status,
    priority,
    priorityPrice,
    cart,
    createdAt,
    totalPrice,
  } = order;

  return (
    <div className="px-4 py-6">
      <h2 className="mb-4 text-xl font-semibold">Order #{id}</h2>
      <p className="mb-2 text-sm text-stone-600">
        Placed on {formatDate(createdAt)}
      </p>
      {priority && (
        <p className="mb-4 text-sm font-medium text-yellow-600">
          Priority order (+{formatCurrency(priorityPrice)})
        </p>
      )}
      <ul className="divide-y divide-stone-200 border-b border-t">
        {cart?.map((cake) => (
          <OrderItem key={cake.cakeId} cake={cake} />
        ))}
      </ul>
      <p className="mt-4 text-lg font-bold text-stone-700">
        Total: {formatCurrency(totalPrice)}
      </p>
      <div className="mt-8">
        <UpdateOrder orderId={id} currentStatus={status} />
      </div>
    </div>
  );
}

export async function loader({ params }) {
  const order = await getOrder(params.orderId);
  return order;
}

export default Order;