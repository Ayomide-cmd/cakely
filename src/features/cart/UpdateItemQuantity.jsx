import { useDispatch } from 'react-redux';
import { decreaseItemQuantity, increaseItemQuantity } from './cartSlice';

function UpdateItemQuantity({ cakeId, currentQuantity }) {
  const dispatch = useDispatch();

  return (
    <div className="flex items-center gap-4 md:gap-6">
      <button
        className="flex h-8 w-8 items-center justify-center border border-stone-200 text-lg font-light transition-all hover:border-stone-800"
        onClick={() => dispatch(decreaseItemQuantity(cakeId))}
      >
        &minus;
      </button>
      
      <span className="text-sm font-light text-stone-600 tracking-tighter">
        {currentQuantity}
      </span>

      <button
        className="flex h-8 w-8 items-center justify-center border border-stone-200 text-lg font-light transition-all hover:border-stone-800"
        onClick={() => dispatch(increaseItemQuantity(cakeId))}
      >
        &#43;
      </button>
    </div>
  );
}

export default UpdateItemQuantity;