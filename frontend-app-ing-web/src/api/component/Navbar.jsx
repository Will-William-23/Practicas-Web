import { NavLink } from 'react-router-dom';

export default function Navbar() {
  return (
    <header className="navbar">
      <NavLink to="/" className="brand">🥗 FoodSave</NavLink>
      <nav>
        <NavLink to="/">Inicio</NavLink>
        <NavLink to="/ofertas">Ofertas</NavLink>
        <NavLink to="/carrito">Carrito</NavLink>
        <NavLink to="/perfil">Perfil</NavLink>
        <NavLink to="/login">Login</NavLink>
      </nav>
    </header>
  );
}
