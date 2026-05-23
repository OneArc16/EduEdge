import { useState } from "react";
import MobileShell from "../components/MobileShell";
import useOnlineStatus from "../hooks/useOnlineStatus";
import {
  clearLocalEvents,
  getLastSync,
  getLocalEvents,
  resetPrototypeData
} from "../utils/storage";

export default function Downloads() {
  const { isOnline, mode, setMode } = useOnlineStatus();

  const [events, setEvents] = useState(getLocalEvents());
  const [lastSync, setLastSync] = useState(getLastSync());

  const handleSync = () => {
    if (!isOnline) return;

    clearLocalEvents();
    setEvents(getLocalEvents());
    setLastSync(getLastSync());
  };

  const handleReset = () => {
    resetPrototypeData();
    setEvents(getLocalEvents());
    setLastSync(getLastSync());
  };

  return (
    <MobileShell
      title="Descargas y red"
      rightContent={
        <span className={isOnline ? "mini-status online" : "mini-status offline"}>
          {isOnline ? "Online" : "Offline"}
        </span>
      }
    >
      <section className="queue-card">
        <p className="label">Cola de eventos local</p>

        <h2>{isOnline ? "Listo para sincronizar" : "Esperando conexión"}</h2>

        <p className="helper-mobile-text">
          Esta pantalla simula las acciones guardadas en el dispositivo antes
          de enviarlas al servidor.
        </p>

        <div className="sync-progress">
          <div style={{ width: isOnline ? "80%" : "12%" }}></div>
        </div>

        <p className="percent">{isOnline ? "80%" : "12%"}</p>

        {events.length === 0 ? (
          <div className="empty-events">
            No hay eventos pendientes por sincronizar.
          </div>
        ) : (
          events.map((event) => (
            <div className="event-row" key={event.id}>
              <span>▧</span>
              <p>{event.title}</p>
              <small>{event.status}</small>
            </div>
          ))
        )}

        <p className="local-actions">
          {events.length} acciones simuladas guardadas localmente
        </p>
      </section>

      <section className="section-block">
        <div className="section-title-row">
          <h3>Modo de conexión</h3>
          <small>Demo</small>
        </div>

        <div className="connection-buttons">
          <button
            className={mode === "auto" ? "demo-btn active" : "demo-btn"}
            onClick={() => setMode("auto")}
          >
            Auto
          </button>

          <button
            className={mode === "offline" ? "demo-btn active" : "demo-btn"}
            onClick={() => setMode("offline")}
          >
            Offline
          </button>

          <button
            className={mode === "online" ? "demo-btn active" : "demo-btn"}
            onClick={() => setMode("online")}
          >
            Online
          </button>
        </div>

        <p className="helper-mobile-text">
          Última sincronización: {lastSync}
        </p>
      </section>

      <section className="storage-card">
        <div className="storage-ring">75%</div>

        <div>
          <p className="label">Almacenamiento local</p>
          <h3>1.2GB / 2GB</h3>
          <small>Uso simulado de recursos offline en el dispositivo</small>
        </div>
      </section>

      <section className="saving-mode-card">
        <div>
          <p>Modo de bajo consumo</p>
          <h3>Activo</h3>
        </div>

        <span>⚡</span>
      </section>

      <section className="section-block">
        <div className="section-title-row">
          <h3>Acciones</h3>
          <small>Prototipo</small>
        </div>

        <button
          className="primary-mobile-btn"
          onClick={handleSync}
          disabled={!isOnline}
        >
          Sincronizar eventos
        </button>

        <button className="secondary-mobile-btn" onClick={handleReset}>
          Reiniciar prototipo
        </button>

        {!isOnline && (
          <div className="warning-message">
            No se puede sincronizar mientras el sistema está en modo offline.
          </div>
        )}
      </section>

      <section className="section-block">
        <div className="section-title-row">
          <h3>Cursos descargados</h3>
          <small>Refrescar ↻</small>
        </div>

        <div className="download-course-card">
          <div className="course-thumb dark">Bio</div>

          <div>
            <strong>Introducción a la Biología</strong>
            <p>15MB · Curso comprimido · Disponible offline</p>
          </div>

          <span className="delete-icon">⌫</span>
        </div>
      </section>
    </MobileShell>
  );
}