import { useNavigate } from "react-router-dom";
import MobileShell from "../components/MobileShell";
import { getLastSync, getLocalEvents, getSyncedEvents } from "../utils/storage";

export default function TeacherDashboard() {
  const navigate = useNavigate();

  const pendingEvents = getLocalEvents();
  const syncedEvents = getSyncedEvents();
  const lastSync = getLastSync();

  const students = [
    {
      id: 1,
      name: "Kevin Rincón",
      progress: 72,
      status: "En seguimiento",
      alert: true
    },
    {
      id: 2,
      name: "Daniel Castaño Navarro",
      progress: 88,
      status: "Estable",
      alert: false
    },
    {
      id: 3,
      name: "Carlos Pérez",
      progress: 41,
      status: "Riesgo académico",
      alert: true
    }
  ];

  const alertCount = students.filter((student) => student.alert).length;

  return (
    <MobileShell
      title="Panel docente"
      rightContent={<span className="mini-status online">Docente</span>}
    >
      <button className="back-btn" onClick={() => navigate("/login")}>
        ← Volver al inicio
      </button>

      <section className="teacher-hero">
        <span className="ai-mini">Alertas tempranas simuladas</span>

        <h2>Seguimiento académico</h2>

        <p>
          Este panel representa cómo el docente visualizaría los avances
          sincronizados desde los dispositivos de los estudiantes.
        </p>
      </section>

      <section className="teacher-stats">
        <div className="teacher-stat">
          <p>Eventos sincronizados</p>
          <strong>{syncedEvents.length}</strong>
        </div>

        <div className="teacher-stat">
          <p>Eventos pendientes</p>
          <strong>{pendingEvents.length}</strong>
        </div>

        <div className="teacher-stat">
          <p>Alertas académicas</p>
          <strong>{alertCount}</strong>
        </div>
      </section>

      <section className="section-block">
        <div className="section-title-row">
          <h3>Última sincronización</h3>
          <small>{lastSync}</small>
        </div>

        <p className="helper-mobile-text">
          Cuando el estudiante recupera conexión, los eventos pendientes se
          envían al sistema central de forma simulada.
        </p>
      </section>

      <section className="section-block">
        <div className="section-title-row">
          <h3>Eventos recibidos</h3>
          <small>Simulación</small>
        </div>

        {syncedEvents.length === 0 ? (
          <div className="empty-events">
            Aún no hay eventos sincronizados. Realiza una actividad como
            estudiante y luego sincroniza desde Descargas.
          </div>
        ) : (
          syncedEvents.map((event) => (
            <div className="teacher-event-card" key={event.id}>
              <div>
                <strong>{event.title}</strong>
                <p>{event.description}</p>
                <small>Sincronizado: {event.syncedAt}</small>
              </div>

              <span className="badge-teacher">Recibido</span>
            </div>
          ))
        )}
      </section>

      <section className="section-block">
        <div className="section-title-row">
          <h3>Estudiantes monitoreados</h3>
          <small>IA local simulada</small>
        </div>

        {students.map((student) => (
          <div
            className={student.alert ? "student-risk-card" : "student-stable-card"}
            key={student.id}
          >
            <div className="student-row">
              <div>
                <strong>{student.name}</strong>
                <p>{student.status}</p>
              </div>

              <span>{student.progress}%</span>
            </div>

            <div className="student-progress">
              <div style={{ width: `${student.progress}%` }}></div>
            </div>
          </div>
        ))}
      </section>
    </MobileShell>
  );
}