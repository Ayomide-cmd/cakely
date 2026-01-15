import LinkButton from '../../ui/LinkButton';

function EmptyCart() {
  return (
    <>
      <LinkButton to="/menu">&larr; Back to menu</LinkButton>
      <div className="mx-auto my-8 flex w-full flex-col items-center justify-between gap-4">
        <h1 className="text-center text-2xl font-bold text-stone-800">
          Add Cakes to Cart
        </h1>
        <p className="text-lg font-semibold text-stone-700">
          Your cart is empty :)
        </p>
      </div>
    </>
  );
}

export default EmptyCart;
