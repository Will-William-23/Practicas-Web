import FoodCard from '../component/FoodCard.jsx';
import ofertas from '../ofertas.js';

export default function Ofertas() {
  return (
    <section className="container">
      <h2>Todas las ofertas</h2>
      <div className="grid">
        {ofertas.map((o) => <FoodCard key={o.id} oferta={o} />)}
      </div>
    </section>
  );
}
