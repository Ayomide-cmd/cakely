import { Link } from 'react-router-dom';
import SearchOrder from '../features/order/SearchOrder';
import Username from '../features/user/Username';

function Header() {
  return (
    <header className="flex items-center justify-between border-b border-stone-300 bg-stone-900 px-4 py-3 uppercase sm:px-6">
      <Link
        to="/"
        className="tracking-widest font-semibold text-stone-100"
      >
        Cakely
      </Link>

      <SearchOrder />
      <Username />
    </header>
  );
}

export default Header;
