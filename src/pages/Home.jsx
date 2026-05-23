import { useNavigate } from "react-router-dom";
import MobileShell from "../components/MobileShell";

export default function Home() {
  const navigate = useNavigate();

  return (
    <MobileShell
      title="EduEdge"
      rightContent={<div className="avatar">👨‍🎓</div>}
    >
      <div className="desktop-grid">
        <section className="sync-banner desktop-full">
          <span>☁</span>
          <p>
            Prototipo de baja fidelidad: datos simulados guardados localmente.
          </p>
        </section>

        <section className="ai-card desktop-full">
          <span className="ai-badge">Edge AI simulada</span>

          <h2>Tu próxima actividad recomendada</h2>

          <p>
            Según tu progreso offline, el prototipo recomienda continuar con
            la lección “La célula: el motor de la existencia”.
          </p>

          <button
            className="white-btn"
            onClick={() => navigate("/lesson/1")}
          >
            Continuar aprendizaje
          </button>
        </section>

        <section className="section-block">
          <div className="section-title-row">
            <h3>Actividad semanal</h3>
            <span>▣</span>
          </div>

          <p className="helper-mobile-text">
            Simulación del avance del estudiante durante la semana.
          </p>

          <div className="chart-placeholder">
            <div className="bar small"></div>
            <div className="bar medium"></div>
            <div className="bar tall"></div>
            <div className="bar small"></div>
          </div>
        </section>

        <section className="section-block">
          <h3>Cursos disponibles</h3>

          <div
            className="course-mini-card clickable-card"
            onClick={() => navigate("/lesson/1")}
          >
            <div className="course-thumb">Bio</div>
            <div>
              <strong>Introducción a la Biología</strong>
              <p>15MB · Disponible offline · Bajo consumo</p>
            </div>
          </div>

          <div
            className="course-mini-card clickable-card"
            style={{ marginTop: "12px" }}
            onClick={() => navigate("/lesson/2")}
          >
            <div className="course-thumb">Mat</div>
            <div>
              <strong>Matemáticas avanzadas</strong>
              <p>18MB · Descargado localmente · Disponible offline</p>
            </div>
          </div>
        </section>
      </div>
    </MobileShell>
  );
}