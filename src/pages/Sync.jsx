import { useState } from "react";
import Layout from "../components/Layout";
import {
  getLastSync,
  getPendingSync,
  syncPendingData,
  resetPrototypeData
} from "../utils/storage";
import useOnlineStatus from "../hooks/useOnlineStatus";

export default function Sync() {
  const [pending, setPending] = useState(getPendingSync());
  const [lastSync, setLastSync] = useState(getLastSync());
  const { isOnline, mode, setMode } = useOnlineStatus();

  const handleSync = () => {
    if (!isOnline) return;

    syncPendingData();
    setPending(getPendingSync());
    setLastSync(getLastSync());
  };

  const handleReset = () => {
    resetPrototypeData();
    setPending(getPendingSync());
    setLastSync(getLastSync());
  };

  return (
    <Layout
      title="Sincronización"
      subtitle="Este módulo representa el envío de datos locales al servidor cuando se recupera la conexión."
    >
      <div className="stats-grid">
        <div className="stat-card">
          <p className="stat-label">Última sincronización</p>
          <p className="stat-value" style={{ fontSize: "1rem" }}>{lastSync}</p>
        </div>

        <div className="stat-card">
          <p className="stat-label">Cambios pendientes</p>
          <p className="stat-value">{pending.length}</p>
        </div>

        <div className="stat-card">
          <p className="stat-label">Estado de red</p>
          <span className={isOnline ? "badge success" : "badge warning"}>
            {isOnline ? "Disponible para sincronizar" : "Sin conexión"}
          </span>
        </div>
      </div>

      <div className="card">
        <h3 style={{ marginBottom: "10px" }}>Modo de conexión para la demo</h3>
        <p className="helper-text">
          Puedes dejar el modo automático o forzar el estado para mostrar el funcionamiento offline.
        </p>

        <div className="button-group" style={{ marginTop: "16px" }}>
          <button
            className={mode === "auto" ? "btn" : "btn outline"}
            onClick={() => setMode("auto")}
          >
            Automático
          </button>

          <button
            className={mode === "offline" ? "btn secondary" : "btn outline"}
            onClick={() => setMode("offline")}
          >
            Simular sin conexión
          </button>

          <button
            className={mode === "online" ? "btn" : "btn outline"}
            onClick={() => setMode("online")}
          >
            Simular en línea
          </button>
        </div>
      </div>

      <div className="card">
        <h3 style={{ marginBottom: "10px" }}>Acciones</h3>
        <p className="helper-text">
          Puedes sincronizar avances o reiniciar el prototipo para volver a probar el flujo.
        </p>

        <div className="button-group" style={{ marginTop: "16px" }}>
          <button className="btn" onClick={handleSync} disabled={!isOnline}>
            Sincronizar ahora
          </button>

          <button className="btn danger" onClick={handleReset}>
            Reiniciar prototipo
          </button>
        </div>

        {!isOnline && (
          <div
            className="message-box"
            style={{
              marginTop: "16px",
              background: "#fef3c7",
              color: "#92400e",
              borderColor: "#fde68a"
            }}
          >
            No es posible sincronizar mientras el sistema está sin conexión.
          </div>
        )}
      </div>
    </Layout>
  );
}