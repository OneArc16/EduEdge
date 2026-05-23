import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();

  return (
    <div className="mobile-page">
      <div className="phone-shell login-phone">
        <div className="login-mobile-card">
          <div className="app-logo">✓</div>

          <h1>EduEdge</h1>
          <p>
            Prototipo de aplicación educativa offline con recomendaciones
            simuladas por IA local.
          </p>

          <input className="mobile-input" placeholder="Usuario" />
          <input className="mobile-input" placeholder="Contraseña" type="password" />

          <button className="primary-mobile-btn" onClick={() => navigate("/home")}>
            Entrar como estudiante
          </button>

          <button className="secondary-mobile-btn" onClick={() => navigate("/teacher")}>
            Entrar como docente
          </button>
        </div>
      </div>
    </div>
  );
}