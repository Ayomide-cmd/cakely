import { Link, useNavigate } from 'react-router-dom';

function LinkButton({ children, to }) {
  const navigate = useNavigate();
  const className =
    'text-sm font-medium text-stone-600 hover:text-stone-900 hover:underline transition-colors';

  if (to === '-1')
    return (
      <button type="button" className={className} onClick={() => navigate(-1)}>
        {children}
      </button>
    );

  return (
    <Link to={to} className={className}>
      {children}
    </Link>
  );
}

export default LinkButton;
