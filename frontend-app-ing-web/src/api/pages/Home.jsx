import FoodCard from '../component/FoodCard.jsx';
import ofertas from '../ofertas.js';

export default function Home() {
  return (
    <>
      <section className="hero">
        <h1>Salva comida, ahorra dinero 🌱</h1>
        <p>Paquetes con descuento de comercios cerca de ti.</p>
      </section>
      <section className="container">
        <h2>Ofertas cerca de ti</h2>
        <div className="grid">
          {ofertas.map((o) => <FoodCard key={o.id} oferta={o} />)}
        </div>
      </section>
    </>
  );
}
