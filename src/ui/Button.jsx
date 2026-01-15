import { Link } from 'react-router-dom';

function Button({ children, disabled, to, type, onClick }) {
  const base =
    'inline-block rounded-full text-sm font-medium uppercase tracking-wide transition-all duration-300 focus:outline-none focus:ring focus:ring-offset-2 disabled:cursor-not-allowed';

  const styles = {
    primary:
      base +
      ' bg-amber-600 text-white hover:bg-amber-500 focus:ring-amber-400 px-4 py-3 sm:px-6 sm:py-4',
    small:
      base +
      ' bg-amber-600 text-white hover:bg-amber-500 focus:ring-amber-400 text-xs px-4 py-2 md:px-5 md:py-2.5',
    secondary:
      'inline-block rounded-full border-2 border-stone-300 text-stone-600 text-sm font-medium uppercase tracking-wide transition-all duration-300 hover:bg-stone-200 focus:bg-stone-200 focus:outline-none focus:ring focus:ring-stone-300 focus:ring-offset-2 disabled:cursor-not-allowed px-4 py-2 md:px-5 md:py-2.5',
    round:
      base +
      ' bg-amber-600 text-white hover:bg-amber-500 focus:ring-amber-400 text-sm px-2.5 py-1 md:px-3.5 md:py-2',
  };

  if (to)
    return (
      <Link className={styles[type]} to={to}>
        {children}
      </Link>
    );

  if (onClick)
    return (
      <button onClick={onClick} disabled={disabled} className={styles[type]}>
        {children}
      </button>
    );

  return (
    <button disabled={disabled} className={styles[type]}>
      {children}
    </button>
  );
}

export default Button;
