import { useDispatch, useSelector } from 'react-redux';
import Button from '../../ui/Button';
import { formatCurrency } from '../../utils/helpers';
import { addItem, getCurrentQuantityById } from '../cart/cartSlice';
import DeleteItem from '../cart/DeleteItem';
import UpdateItemQuantity from '../cart/UpdateItemQuantity';

function MenuItem({ cake }) {
  const dispatch = useDispatch();
  const { id, name, price, description, soldOut } = cake;
  
  const currentQuantity = useSelector(getCurrentQuantityById(id));
  const isInCart = currentQuantity > 0;

  function handleAddToCart() {
    const newItem = {
      cakeId: id,
      name,
      quantity: 1,
      unitPrice: price,
      totalPrice: price,
    };
    dispatch(addItem(newItem));
  }

  return (
    <li className="flex flex-col gap-10 border-b border-stone-100 py-16 sm:flex-row sm:items-center">
      <div className="h-48 w-48 flex-shrink-0 overflow-hidden bg-stone-50">
        <img
          src={`/${id}.jpeg`}
          alt={name}
          className={`h-full w-full object-cover transition-opacity duration-1000 ${
            soldOut ? 'opacity-20' : 'opacity-90'
          }`}
          onError={(e) => {
            e.target.src = 'https://via.placeholder.com/200?text=Cakely';
          }}
        />
      </div>

      <div className="flex grow flex-col gap-3">
        <div className="flex items-baseline justify-between">
          <h3 className="text-2xl font-light tracking-tight text-stone-800">
            {name}
          </h3>
          <p className="text-sm font-light text-stone-400 tracking-wider">
            {formatCurrency(price)}
          </p>
        </div>
        
        <p className="max-w-md text-[11px] leading-relaxed uppercase tracking-[0.15em] text-stone-400">
          {description}
        </p>
      </div>

      <div className="flex items-center justify-end pt-4 sm:pt-0">
        {isInCart ? (
          <div className="flex items-center gap-6 md:gap-8">
            <UpdateItemQuantity cakeId={id} currentQuantity={currentQuantity} />
            <DeleteItem cakeId={id} />
          </div>
        ) : (
          !soldOut && (
            <button
              onClick={handleAddToCart}
              className="group relative px-10 py-3 text-[10px] uppercase tracking-[0.3em] text-stone-800 transition-all hover:text-stone-400"
            >
              Add to Bag
              <span className="absolute bottom-2 left-10 right-10 h-[1px] bg-stone-800 transition-all group-hover:bg-stone-200"></span>
            </button>
          )
        )}
      </div>
    </li>
  );
}

export default MenuItem;