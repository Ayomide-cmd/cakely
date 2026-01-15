import { useLoaderData } from 'react-router-dom';
import { getMenu } from "../services/apiRestaurant.js";
import MenuItem from './MenuItem';

function Menu() {
  const menu = useLoaderData();

  if (!Array.isArray(menu)) {
    return (
      <div className="px-4 py-6 text-center">
        <p className="font-semibold text-stone-600">
          We couldn't load the cakes. Please check your connection.
        </p>
      </div>
    );
  }

  return (
    <ul className="divide-y divide-stone-200 px-2">
      {menu.map((cake) => (
        <MenuItem cake={cake} key={cake.id} />
      ))}
    </ul>
  );
}

export async function loader() {
  const menu = await getMenu();
  return menu;
}

export default Menu;