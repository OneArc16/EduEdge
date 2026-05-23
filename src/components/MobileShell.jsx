import { useNavigate } from "react-router-dom";
import BottomNav from "./BottomNav";

export default function MobileShell({ title, children, rightContent }) {
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate("/login");
  };

  return (
    <div className="mobile-page">
      <div className="phone-shell">
        <header className="phone-header">
          <div>
            <p className="phone-title">{title}</p>
          </div>

          <div className="header-actions">
            {rightContent && <div>{rightContent}</div>}

            <button className="logout-btn" onClick={handleLogout}>
              Salir
            </button>
          </div>
        </header>

        <main className="phone-content">
          {children}
        </main>

        <BottomNav />
      </div>
    </div>
  );
}