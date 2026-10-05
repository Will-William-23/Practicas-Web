import Button from '../component/Button.jsx';

export default function Login() {
  return (
    <section className="container">
      <h2>Iniciar sesión</h2>
      <form className="card" style={{ maxWidth: 400 }} onSubmit={(e) => e.preventDefault()}>
        <label>Email<br /><input type="email" placeholder="tu@email.com" style={{ width: '100%', padding: 8, marginBottom: 12 }} /></label>
        <label>Contraseña<br /><input type="password" placeholder="••••••••" style={{ width: '100%', padding: 8, marginBottom: 12 }} /></label>
        <Button>Entrar</Button>
      </form>
    </section>
  );
}
