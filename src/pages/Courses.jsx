import { Link } from "react-router-dom";
import Layout from "../components/Layout";
import { courses } from "../data/mockData";

export default function Courses() {
  return (
    <Layout
      title="Cursos disponibles"
      subtitle="Explora los cursos cargados localmente y consulta su estado de avance y disponibilidad offline."
    >
      <div className="card">
        <ul className="list-clean">
          {courses.map((course) => (
            <li key={course.id}>
              <p className="course-title">{course.title}</p>
              <p className="course-description">{course.description}</p>

              <div className="status-row">
                <span className={course.downloaded ? "badge success" : "badge warning"}>
                  {course.downloaded ? "Descargado" : "No descargado"}
                </span>

                <span className="badge info">Actividad {course.activityId}</span>
              </div>

              <div className="progress-wrap">
                <div className="progress-label">
                  <span>Progreso del curso</span>
                  <span>{course.progress}%</span>
                </div>

                <div className="progress-bar">
                  <div
                    className="progress-fill"
                    style={{ width: `${course.progress}%` }}
                  />
                </div>
              </div>

              <div style={{ marginTop: "14px" }}>
                <Link to={`/courses/${course.id}`} className="btn outline">
                  Ver detalle
                </Link>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </Layout>
  );
}