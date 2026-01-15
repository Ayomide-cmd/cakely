import { useRouteError } from 'react-router-dom';
import LinkButton from './LinkButton';

function Error() {
  const error = useRouteError();

  return (
    <div className="px-4 py-6">
      <h1 className="text-xl font-bold">Something went wrong 🍰</h1>
      <p className="my-4 text-stone-600">
        {error?.data || error?.message || "An unexpected error occurred"}
      </p>

      <LinkButton to="-1">&larr; Go back</LinkButton>
    </div>
  );
}

export default Error;