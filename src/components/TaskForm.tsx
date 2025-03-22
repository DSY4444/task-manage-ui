import { useState, useEffect } from "react";
import { addTask, updateTask } from "../utils/api";
import { Task } from "@/types/task";

interface TaskFormProps {
  editingTask: Task | null;
  onTaskSaved: (task: Task) => void;
}

export default function TaskForm({ editingTask, onTaskSaved }: TaskFormProps) {
  const [task, setTask] = useState<Task>({ title: "", description: "" });

  useEffect(() => {
    if (editingTask) {
      setTask(editingTask);
    } else {
      setTask({ title: "", description: "" });
    }
  }, [editingTask]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    let savedTask: Task;
    if (task.ID) {
      const response = await updateTask(task.ID, task);
      savedTask = await response.json();
    } else {
      savedTask = await addTask(task);
    }
    setTask({ title: "", description: "" });
    onTaskSaved(savedTask);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 p-4 bg-white rounded shadow">
      <input type="text" className="w-full p-2 border text-black" placeholder="Task Title"
        value={task.title} onChange={(e) => setTask({ ...task, title: e.target.value })} required />
      <textarea className="w-full p-2 border text-black" placeholder="Task Description"
        value={task.description} onChange={(e) => setTask({ ...task, description: e.target.value })} required />
      <button type="submit" className="w-full bg-green-500 text-white p-2 rounded">{task.ID ? "Update" : "Add"} Task</button>
    </form>
  );
}