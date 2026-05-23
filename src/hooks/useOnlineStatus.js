import { useEffect, useState } from "react";

const STORAGE_KEY = "eduoffline_connection_mode";

function getSavedMode() {
  return localStorage.getItem(STORAGE_KEY) || "auto";
}

function resolveStatus(mode) {
  if (mode === "online") return true;
  if (mode === "offline") return false;
  return navigator.onLine;
}

export default function useOnlineStatus() {
  const [mode, setModeState] = useState(getSavedMode());
  const [isOnline, setIsOnline] = useState(resolveStatus(getSavedMode()));

  useEffect(() => {
    const updateStatus = () => {
      const currentMode = getSavedMode();
      setModeState(currentMode);
      setIsOnline(resolveStatus(currentMode));
    };

    window.addEventListener("online", updateStatus);
    window.addEventListener("offline", updateStatus);
    window.addEventListener("eduoffline-mode-change", updateStatus);

    return () => {
      window.removeEventListener("online", updateStatus);
      window.removeEventListener("offline", updateStatus);
      window.removeEventListener("eduoffline-mode-change", updateStatus);
    };
  }, []);

  const setMode = (nextMode) => {
    localStorage.setItem(STORAGE_KEY, nextMode);
    window.dispatchEvent(new Event("eduoffline-mode-change"));
  };

  return { isOnline, mode, setMode };
}