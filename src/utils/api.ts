const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:8080";
// const API_URL = "http://localhost:8080";

export async function fetchTasks() {
  const res = await fetch(`${API_URL}/tasks`);
  return res.json();
}

export async function addTask(task: { title: string; description: string }) {
  return fetch(`${API_URL}/tasks`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(task),
  }).then((res) => res.json());
}

export async function updateTask(id: string, updates: object) {
  return fetch(`${API_URL}/tasks/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(updates),
  });
}

export async function deleteTask(id: string) {
  return fetch(`${API_URL}/tasks/${id}`, { method: "DELETE" });
}