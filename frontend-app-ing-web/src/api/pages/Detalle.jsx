import { useParams } from 'react-router-dom';
import Badge from '../component/Badge.jsx';
import Button from '../component/Button.jsx';
import ofertas from '../ofertas.js';

export default function Detalle() {
  const { id } = useParams();
  const oferta = ofertas.find((o) => o.id === Number(id));

  if (!oferta) return <section className="container"><h2>Oferta no encontrada</h2></section>;

  return (
    <section className="container">
      <Badge>{oferta.descuento}</Badge>
      <h2>{oferta.nombre}</h2>
      <p className="muted">{oferta.comercio} · {oferta.distancia}</p>
      <p><strong>${oferta.precio}</strong> <s>${oferta.precioOriginal}</s></p>
      <p>Recoger antes de las {oferta.recogerAntes}</p>
      <Button style={{ marginTop: 12 }}>Reservar</Button>
    </section>
  );
}
