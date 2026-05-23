import { useNavigate, useParams } from "react-router-dom";
import MobileShell from "../components/MobileShell";
import { lessons } from "../data/learningContent";

export default function LessonDetail() {
  const navigate = useNavigate();
  const { id } = useParams();

  const lesson = lessons.find((item) => item.id === Number(id));

  if (!lesson) {
    return (
      <MobileShell title="Lección no encontrada">
        <button className="back-btn" onClick={() => navigate("/home")}>
          ← Volver
        </button>

        <section className="lesson-card">
          <h2>No se encontró la lección solicitada.</h2>
        </section>
      </MobileShell>
    );
  }

  return (
    <MobileShell
      title={lesson.course}
      rightContent={<span className="mini-status offline">{lesson.status}</span>}
    >
      <button className="back-btn" onClick={() => navigate("/home")}>
        ← Volver
      </button>

      <section className="lesson-card">
        <div className="lesson-progress">
          <div style={{ width: `${lesson.progress}%` }}></div>
        </div>

        <span className="ai-mini">{lesson.badge}</span>

        <h2>{lesson.title}</h2>

        {lesson.paragraphs.map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ))}

        <div className="video-placeholder">
          <span>▶</span>
        </div>

        <button
          className="primary-mobile-btn"
          style={{ marginTop: "18px" }}
          onClick={() => navigate(`/activity/${lesson.id}`)}
        >
          Realizar actividad
        </button>
      </section>
    </MobileShell>
  );
}