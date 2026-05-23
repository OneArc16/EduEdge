import { useNavigate } from "react-router-dom";
import MobileShell from "../components/MobileShell";

export default function Profile() {
  const navigate = useNavigate();

  return (
    <MobileShell
      title="Mi perfil"
      rightContent={<div className="avatar">🎓</div>}
    >
      <section className="profile-hero-v2">
        <div className="profile-hero-top">
          <div>
            <p className="profile-eyebrow">Estudiante destacado</p>
            <h2 className="profile-name">Daniel Castaño Navarro</h2>
            <p className="profile-subtext">
              Progreso personalizado gestionado por IA local simulada.
            </p>
          </div>

          <div className="level-card">
            <span className="level-label">Nivel</span>
            <strong className="level-value">14</strong>
          </div>
        </div>

        <div className="xp-meta">
          <span>XP actual: 4,250</span>
          <span>Siguiente nivel: 5,000</span>
        </div>

        <div className="xp-bar-v2">
          <div style={{ width: "85%" }}></div>
        </div>
      </section>

      <section className="profile-stats-v2">
        <div className="profile-stat-v2">
          <div className="profile-stat-icon">🎓</div>
          <div>
            <p>Cursos completados</p>
            <strong>12</strong>
          </div>
        </div>

        <div className="profile-stat-v2">
          <div className="profile-stat-icon">📴</div>
          <div>
            <p>Logros offline</p>
            <strong>28</strong>
          </div>
        </div>

        <div className="profile-stat-v2">
          <div className="profile-stat-icon">⏱</div>
          <div>
            <p>Horas de estudio</p>
            <strong>142h</strong>
          </div>
        </div>
      </section>

      <section className="section-block">
        <div className="section-title-row">
          <h3>Ruta adaptativa</h3>
          <span className="ai-mini">IA local simulada</span>
        </div>

        <p className="helper-mobile-text">
          Esta sección representa cómo el sistema recomienda el siguiente paso
          del estudiante a partir de su progreso guardado localmente.
        </p>

        <div className="path-list-v2">
          <div className="path-item-v2 done">
            <div className="path-dot"></div>

            <div className="path-content">
              <div className="path-header">
                <span className="path-badge done">Completado</span>
                <h4>Fundamentos de lógica computacional</h4>
              </div>

              <p>
                Dominio del 94% calculado por el modelo local simulado.
              </p>
            </div>
          </div>

          <div className="path-item-v2 progress">
            <div className="path-dot"></div>

            <div className="path-content">
              <div className="path-header">
                <span className="path-badge progress">En progreso</span>
                <h4>La célula: el motor de la existencia</h4>
              </div>

              <p>
                Recomendación generada por el prototipo según el avance offline.
              </p>

              <button
                className="primary-mobile-btn compact-btn"
                onClick={() => navigate("/lesson/1")}
              >
                Continuar ruta
              </button>
            </div>
          </div>

          <div className="path-item-v2 next">
            <div className="path-dot"></div>

            <div className="path-content">
              <div className="path-header">
                <span className="path-badge next">Próximo paso</span>
                <h4>Evaluación diagnóstica</h4>
              </div>

              <p>
                Actividad sugerida para fortalecer el aprendizaje personalizado.
              </p>
            </div>
          </div>
        </div>
      </section>
    </MobileShell>
  );
}