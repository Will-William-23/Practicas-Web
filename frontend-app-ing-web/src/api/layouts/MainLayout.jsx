import { Outlet } from 'react-router-dom';
import Navbar from '../component/Navbar.jsx';

export default function MainLayout() {
  return (
    <>
      <Navbar />
      <main>
        <Outlet />
      </main>
    </>
  );
}
