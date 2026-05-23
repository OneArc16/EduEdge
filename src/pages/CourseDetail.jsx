import { Link, useParams } from "react-router-dom";
import Layout from "../components/Layout";
import { courses } from "../data/mockData";

export default function CourseDetail() {
  const { id } = useParams();
  const course = courses.find((item) => item.id === Number(id));

  if (!course) {
    return (
      <Layout title="Curso no encontrado">
        <div className="card">
          <p>No se encontró el curso solicitado.</p>
        </div>
      </Layout>
    );
  }

  return (
    <Layout
      title={course.title}
      subtitle="Consulta los módulos disponibles, el estado offline y el progreso del curso."
    >
      <div className="grid-2">
        <div className="card">
          <h3 style={{ marginBottom: "12px" }}>Descripción</h3>
          <p className="course-description">{course.description}</p>

          <div className="status-row">
            <span className={course.downloaded ? "badge success" : "badge warning"}>
              {course.downloaded ? "Disponible offline" : "Requiere descarga"}
            </span>
          </div>

          <div className="progress-wrap">
            <div className="progress-label">
              <span>Progreso actual</span>
              <span>{course.progress}%</span>
            </div>

            <div className="progress-bar">
              <div
                className="progress-fill"
                style={{ width: `${course.progress}%` }}
              />
            </div>
          </div>

          <h3 style={{ margin: "20px 0 12px" }}>Módulos</h3>
          <ul className="list-clean">
            {course.modules.map((module, index) => (
              <li key={index}>{module}</li>
            ))}
          </ul>
        </div>

        <div className="card">
          <h3 style={{ marginBottom: "12px" }}>Acciones</h3>
          <p className="helper-text">
            Puedes abrir la actividad y guardar el progreso localmente.
          </p>

          <div className="button-group" style={{ marginTop: "18px" }}>
            <Link to={`/activity/${course.activityId}`} className="btn">
              Ir a actividad
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  );
}