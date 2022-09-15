import { Link } from 'react-router-dom';

export function HooksNavigation() {
  return (
    <nav className="h-[70px]  bg-green-400 border text-white p-2">
        <p className='text-blue-400'>hooks navigation</p>
      <span>
        <Link className='mr-4' to="useState">useState</Link>
        <Link className='mr-4' to="useEffect">useEffect</Link>
        <Link className='mr-4' to="useRef">useRef</Link>
        <Link className='mr-4' to="useMemo">useMemo</Link>
        <Link className='mr-4' to="useCallback">useCallback</Link>
      </span>
    </nav>
  );
}