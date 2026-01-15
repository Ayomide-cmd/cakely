import { useDispatch } from 'react-redux';
import { deleteItem } from './cartSlice';
import Button from '../../ui/Button';

function DeleteItem({ cakeId, children }) {
  const dispatch = useDispatch();

  function handleDeleteItem() {
    dispatch(deleteItem(cakeId));
  }

  return (
    <Button type="small" onClick={handleDeleteItem}>
      {children}
    </Button>
  );
}

export default DeleteItem;
