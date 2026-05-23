import { Link } from "react-router-dom";
import Layout from "../components/Layout";
import { getProgress, getPendingSync } from "../utils/storage";
import useOnlineStatus from "../hooks/useOnlineStatus";

export default function StudentDashboard() {
  const progress = getProgress();
  const pending = getPendingSync();
  const { isOnline } = useOnlineStatus();

  return (
    <Layout
      title="Panel del estudiante"
      subtitle="Consulta tus cursos, revisa tu progreso y sincroniza tus avances cuando tengas conexión."
    >
      <div className="stats-grid">
        <div className="stat-card">
          <p className="stat-label">Actividades realizadas</p>
          <p className="stat-value">{progress.length}</p>
        </div>

        <div className="stat-card">
          <p className="stat-label">Pendientes por sincronizar</p>
          <p className="stat-value">{pending.length}</p>
        </div>

        <div className="stat-card">
          <p className="stat-label">Estado del sistema</p>
          <span className={isOnline ? "badge success" : "badge warning"}>
            {isOnline ? "Conectado" : "Trabajando offline"}
          </span>
        </div>
      </div>

      <div className="grid-2">
        <div className="card">
          <h3 style={{ marginBottom: "10px" }}>Accesos rápidos</h3>
          <p className="helper-text">
            Ingresa a tus cursos o abre el módulo de sincronización.
          </p>

          <div className="button-group" style={{ marginTop: "18px" }}>
            <Link to="/courses" className="btn">Ver cursos</Link>
            <Link to="/sync" className="btn secondary">Sincronización</Link>
          </div>
        </div>

        <div className="card">
          <h3 style={{ marginBottom: "10px" }}>Resumen</h3>
          <ul className="list-clean">
            <li>La aplicación guarda avances localmente.</li>
            <li>El contenido puede ser consultado sin conexión.</li>
            <li>Los cambios se envían luego al servidor.</li>
            <li>Estado actual: {isOnline ? "el sistema está en línea." : "el sistema está sin conexión."}</li>
          </ul>
        </div>
      </div>
    </Layout>
  );
}