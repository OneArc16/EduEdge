import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import MobileShell from "../components/MobileShell";
import { addLocalEvent } from "../utils/storage";
import { lessons } from "../data/learningContent";

export default function Activity() {
  const navigate = useNavigate();
  const { id } = useParams();

  const lesson = lessons.find((item) => item.id === Number(id));

  const [answer, setAnswer] = useState("");
  const [message, setMessage] = useState("");

  if (!lesson) {
    return (
      <MobileShell title="Actividad no encontrada">
        <button className="back-btn" onClick={() => navigate("/home")}>
          ← Volver
        </button>

        <section className="lesson-card">
          <h2>No se encontró la actividad solicitada.</h2>
        </section>
      </MobileShell>
    );
  }

  const handleSave = () => {
    addLocalEvent({
      type: "Actividad",
      title: lesson.activityTitle,
      description: `Respuesta guardada localmente del curso ${lesson.course}.`,
      payload: {
        lessonId: lesson.id,
        course: lesson.course,
        answer
      }
    });

    setMessage("Actividad guardada localmente. El evento quedó pendiente por sincronizar.");
  };

  return (
    <MobileShell
      title="Actividad offline"
      rightContent={<span className="mini-status offline">Offline</span>}
    >
      <button className="back-btn" onClick={() => navigate(`/lesson/${lesson.id}`)}>
        ← Volver a la lección
      </button>

      <section className="lesson-card">
        <span className="ai-mini">Evaluación local</span>

        <h2>{lesson.activityTitle}</h2>

        <p>
          Esta actividad simula una evaluación guardada en el dispositivo del
          estudiante cuando no hay conexión a internet.
        </p>

        <div className="question-card">
          <h3>Pregunta</h3>
          <p>{lesson.activityQuestion}</p>

          <textarea
            className="mobile-textarea"
            placeholder="Escribe tu respuesta..."
            value={answer}
            onChange={(event) => setAnswer(event.target.value)}
          />
        </div>

        <button className="primary-mobile-btn" onClick={handleSave}>
          Guardar avance local
        </button>

        {message && (
          <div className="success-message">
            {message}
          </div>
        )}

        <button
          className="secondary-mobile-btn"
          onClick={() => navigate("/downloads")}
        >
          Ver cola de eventos
        </button>
      </section>
    </MobileShell>
  );
}