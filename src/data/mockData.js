export const courses = [
  {
    id: 1,
    title: "Matemáticas básicas",
    description: "Curso introductorio con operaciones básicas y ejercicios prácticos.",
    modules: [
      "Números naturales",
      "Suma y resta",
      "Multiplicación y división"
    ],
    activityId: 101,
    progress: 65,
    downloaded: true
  },
  {
    id: 2,
    title: "Comprensión lectora",
    description: "Curso para fortalecer lectura, análisis e interpretación de textos.",
    modules: [
      "Lectura literal",
      "Lectura inferencial",
      "Análisis de textos"
    ],
    activityId: 102,
    progress: 30,
    downloaded: false
  }
];

export const students = [
  { id: 1, name: "Ana López", progress: 70, alert: false },
  { id: 2, name: "Carlos Pérez", progress: 35, alert: true },
  { id: 3, name: "María Torres", progress: 85, alert: false }
];