import { Routes, Route, Navigate } from "react-router-dom";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Downloads from "./pages/Downloads";
import Profile from "./pages/Profile";
import LessonDetail from "./pages/LessonDetail";
import Activity from "./pages/Activity";
import TeacherDashboard from "./pages/TeacherDashboard";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/login" replace />} />
      <Route path="/login" element={<Login />} />

      <Route path="/home" element={<Home />} />
      <Route path="/downloads" element={<Downloads />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/lesson/:id" element={<LessonDetail />} />
      <Route path="/activity/:id" element={<Activity />} />

      <Route path="/teacher" element={<TeacherDashboard />} />
    </Routes>
  );
}