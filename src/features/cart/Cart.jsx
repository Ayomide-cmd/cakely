import LinkButton from '../../ui/LinkButton';
import Button from '../../ui/Button';
import CartItem from './CartItem';
import { useDispatch, useSelector } from 'react-redux';
import { clearCart } from './cartSlice';

function Cart() {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart.cart);
  const username = useSelector((state) => state.user.username);

  function clearCarts() {
    dispatch(clearCart());
  }

  return (
    <div className="px-4 py-3">
      <LinkButton to="/menu">&larr; Back to menu</LinkButton>

      <h2 className="mt-7 text-xl font-semibold">Your cart, {username}</h2>

      {cart.length > 0 ? (
        <>
          <ul className="mt-3 divide-y divide-stone-200 border-b-2 border-b-stone-200">
            {cart.map((item) => (
              <CartItem item={item} key={item.cakeId} />
            ))}
          </ul>

          <div className="mt-6 space-x-3 sm:flex sm:items-center sm:justify-between">
            <Button to="/order/new" type="primary">
              Order Cakes
            </Button>
            <Button type="secondary" onClick={clearCarts}>
              Clear Cart
            </Button>
          </div>
        </>
      ) : (
        <div className="mx-auto my-8 flex w-full flex-col items-center justify-between gap-4">
          <h1 className="text-center text-2xl font-bold text-stone-800">
            Add Cakes to Cart
          </h1>
          <p className="text-lg font-semibold text-stone-700">
            Your cart is empty :)
          </p>
        </div>
      )}
    </div>
  );
}

export default Cart;
