const EVENTS_KEY = "eduedge_local_events";
const SYNCED_EVENTS_KEY = "eduedge_synced_events";
const LAST_SYNC_KEY = "eduedge_last_sync";

export function getLocalEvents() {
  const data = localStorage.getItem(EVENTS_KEY);
  return data ? JSON.parse(data) : [];
}

export function getSyncedEvents() {
  const data = localStorage.getItem(SYNCED_EVENTS_KEY);
  return data ? JSON.parse(data) : [];
}

export function addLocalEvent(event) {
  const currentEvents = getLocalEvents();

  const newEvent = {
    id: crypto.randomUUID ? crypto.randomUUID() : String(Date.now()),
    status: "pendiente",
    createdAt: new Date().toLocaleString(),
    ...event
  };

  localStorage.setItem(EVENTS_KEY, JSON.stringify([...currentEvents, newEvent]));
}

export function clearLocalEvents() {
  const pendingEvents = getLocalEvents();
  const syncedEvents = getSyncedEvents();

  const newSyncedEvents = pendingEvents.map((event) => ({
    ...event,
    status: "sincronizado",
    syncedAt: new Date().toLocaleString()
  }));

  localStorage.setItem(
    SYNCED_EVENTS_KEY,
    JSON.stringify([...newSyncedEvents, ...syncedEvents])
  );

  localStorage.setItem(EVENTS_KEY, JSON.stringify([]));
  localStorage.setItem(LAST_SYNC_KEY, new Date().toLocaleString());
}

export function getLastSync() {
  return localStorage.getItem(LAST_SYNC_KEY) || "Nunca";
}

export function resetPrototypeData() {
  localStorage.removeItem(EVENTS_KEY);
  localStorage.removeItem(SYNCED_EVENTS_KEY);
  localStorage.removeItem(LAST_SYNC_KEY);
}

/* Compatibilidad con pantallas anteriores */
export function getProgress() {
  return getLocalEvents();
}

export function getPendingSync() {
  return getLocalEvents();
}

export function syncPendingData() {
  clearLocalEvents();
}

export function saveActivityProgress(activity) {
  addLocalEvent({
    type: "Actividad",
    title: activity.title || "Actividad guardada",
    description: "Actividad guardada localmente.",
    payload: activity
  });
}