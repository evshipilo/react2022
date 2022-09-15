import { Link } from 'react-router-dom';

export function Navigation() {
  return (
    <nav className="h-[50px]  bg-slate-400 border text-white p-2">
      <span>
        <Link className='mr-4' to="/">Products</Link>
        <Link to="/hooks">Hooks</Link>
      </span>
    </nav>
  );
}
