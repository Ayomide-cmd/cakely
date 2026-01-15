import { useSelector } from 'react-redux';
import CreateUser from '../features/user/CreateUser';
import Button from './Button';

function Home() {
  const username = useSelector((state) => state.user.username);

  return (
    <div className="mx-auto max-w-4xl px-4 pt-24 text-center sm:pt-40">
      <div className="mb-20 space-y-6">
        <h1 className="text-4xl font-extralight tracking-[0.2em] uppercase text-stone-800 md:text-6xl">
          Cakely
        </h1>
        <div className="flex flex-col items-center justify-center space-y-2 text-[10px] uppercase tracking-[0.5em] text-stone-400 md:flex-row md:space-y-0 md:space-x-4">
          <span>Artisanal Slices</span>
          <span className="hidden md:block text-stone-200">|</span>
          <span>Lagos Delivery</span>
        </div>
      </div>

      <div className="mx-auto max-w-md">
        {username === '' ? (
          <div className="space-y-12">
            <p className="text-[11px] uppercase tracking-[0.2em] text-stone-400">
              Welcome to Cakely! What should we call you?
            </p>
            <CreateUser />
          </div>
        ) : (
          <div className="space-y-10">
            <p className="text-xs uppercase tracking-[0.2em] text-stone-500">
              Welcome back, {username}
            </p>
            <Button to="/menu" type="primary">
              Enter the Collection
            </Button>
          </div>
        )}
      </div>
    </div>
  );
}

export default Home;