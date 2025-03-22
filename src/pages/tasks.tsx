import { useState, useEffect } from "react";
import TaskList from "../components/TaskList";
import TaskForm from "../components/TaskForm";
import Header from "@/components/Header";
import Modal from "@/components/Modal";
import { Task } from "@/types/task";
import { fetchTasks } from "../utils/api";

export default function Tasks() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingTask, setEditingTask] = useState<Task | null>(null);
  const [tasks, setTasks] = useState<Task[]>([]);

  useEffect(() => {
    fetchTasks().then(setTasks);
  }, []);

  const handleEdit = (task: Task) => {
    setEditingTask(task);
    setIsModalOpen(true);
  };

  const handleClose = () => {
    setIsModalOpen(false);
    setEditingTask(null);
  };

  const handleTaskSaved = (savedTask: Task) => {
    const updatedId = tasks.find(task => task.ID === savedTask.ID)
    if (updatedId) {
      setTasks(tasks.map(task => task.ID === savedTask.ID ? savedTask : task));
    }
    else {
      setTasks([...tasks, savedTask]);
    }
    handleClose();
  };

  const handleTaskDeleted = (taskId: string) => {
    setTasks(tasks.filter(task => task.ID !== taskId));
  };


  return (
    <div>
      <Header />
      <div className="max-w-4xl mx-auto mt-10 px-4">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold">Tasks</h1>
          <button
            onClick={() => setIsModalOpen(true)}
            className="px-4 py-2 bg-green-700 text-white rounded-lg hover:bg-green-600 cursor-pointer transition-colors"
          >
            Add Task
          </button>
        </div>
        <TaskList
          tasks={tasks}
          onEdit={handleEdit}
          onDelete={handleTaskDeleted}
        />
        <Modal isOpen={isModalOpen} onClose={handleClose}>
          <TaskForm
            editingTask={editingTask}
            onTaskSaved={handleTaskSaved}
          />
        </Modal>
      </div>
    </div>
  );
}
