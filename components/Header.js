import Link from 'next/link';
import { useRouter } from 'next/router';
import { useAuth } from '../context/AuthContext';

const Header = () => {
  const { user, logout } = useAuth();
  const router = useRouter();

  const handleLogout = () => {
    logout();
    router.push('/login');
  };

  return (
    <header className="p-4 bg-blue-500 text-white">
      <nav className="flex justify-between items-center">
        <div>
          <Link href="/">
            <a className="text-xl font-bold">Timetable System</a>
          </Link>
        </div>
        <div>
          {user ? (
            <>
              <span className="mr-4">Hello, {user.name}</span>
              <button onClick={handleLogout} className="bg-red-500 px-3 py-1 rounded">Logout</button>
            </>
          ) : (
            <Link href="/login">
              <a className="bg-green-500 px-3 py-1 rounded">Login</a>
            </Link>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Header;
