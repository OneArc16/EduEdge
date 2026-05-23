import { Link, useLocation } from "react-router-dom";

export default function BottomNav() {
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  return (
    <nav className="bottom-nav">
      <Link className={isActive("/home") ? "bottom-item active" : "bottom-item"} to="/home">
        <span>⌂</span>
        <small>Inicio</small>
      </Link>

      <Link className={isActive("/downloads") ? "bottom-item active" : "bottom-item"} to="/downloads">
        <span>⇩</span>
        <small>Descargas</small>
      </Link>

      <Link className={isActive("/profile") ? "bottom-item active" : "bottom-item"} to="/profile">
        <span>♙</span>
        <small>Perfil</small>
      </Link>
    </nav>
  );
}