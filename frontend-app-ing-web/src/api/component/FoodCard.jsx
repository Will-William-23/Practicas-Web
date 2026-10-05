import { Link } from 'react-router-dom';
import Badge from './Badge.jsx';
import Button from './Button.jsx';

export default function FoodCard({ oferta }) {
  return (
    <div className="card">
      <Badge>{oferta.descuento}</Badge>
      <h3>{oferta.nombre}</h3>
      <p className="muted">{oferta.comercio} · {oferta.distancia}</p>
      <p><strong>${oferta.precio}</strong> <s className="muted">${oferta.precioOriginal}</s></p>
      <p className="muted">Recoger antes de {oferta.recogerAntes}</p>
      <Link to={`/ofertas/${oferta.id}`}><Button style={{ marginTop: 8 }}>Ver oferta</Button></Link>
    </div>
  );
}
