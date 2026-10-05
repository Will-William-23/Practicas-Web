import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainLayout from '../layouts/MainLayout.jsx';
import Home from '../pages/Home.jsx';
import Ofertas from '../pages/Ofertas.jsx';
import Detalle from '../pages/Detalle.jsx';
import Carrito from '../pages/Carrito.jsx';
import Perfil from '../pages/Perfil.jsx';
import Login from '../pages/Login.jsx';

export default function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/ofertas" element={<Ofertas />} />
          <Route path="/ofertas/:id" element={<Detalle />} />
          <Route path="/carrito" element={<Carrito />} />
          <Route path="/perfil" element={<Perfil />} />
          <Route path="/login" element={<Login />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
