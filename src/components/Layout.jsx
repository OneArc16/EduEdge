import { Link } from "react-router-dom";
import useOnlineStatus from "../hooks/useOnlineStatus";

export default function Layout({ title, subtitle, children }) {
  const { isOnline, mode } = useOnlineStatus();

  return (
    <div className="app-shell">
      <header className="topbar">
        <div>
          <h1 className="brand">EduOffline</h1>
          <p className="brand-subtitle">Prototipo educativo offline</p>
        </div>

        <div className="topbar-right">
          <div>
            <div className={isOnline ? "network-pill online" : "network-pill offline"}>
              {isOnline ? "En línea" : "Sin conexión"}
            </div>
          </div>

          <nav className="topbar-nav">
            <Link to="/student" className="nav-link">Estudiante</Link>
            <Link to="/courses" className="nav-link">Cursos</Link>
            <Link to="/sync" className="nav-link">Sync</Link>
            <Link to="/teacher" className="nav-link">Docente</Link>
            <Link to="/login" className="nav-link nav-link-ghost">Salir</Link>
          </nav>
        </div>
      </header>

      <main className="content">
        <section className="page-header">
          <h2>{title}</h2>
          {subtitle ? <p>{subtitle}</p> : null}
        </section>

        {children}
      </main>
    </div>
  );
}