import { deleteTask } from "../utils/api";
import { Task } from "@/types/task";

interface TaskListProps {
  tasks: Task[];
  onEdit: (task: Task) => void;
  onDelete: (taskId: string) => void;
}

export default function TaskList({ tasks, onEdit, onDelete }: TaskListProps) {
  const handleDelete = async (id: (string)) => {
    await deleteTask(id);
    onDelete(id);
  };

  return (
    <div className="max-h-120 overflow-y-auto bg-gray-200 p-4 rounded-lg shadow-md mx-4 mt-4">
    {tasks.length > 0 ? (
      <div className="space-y-4"> {/* Adds spacing between tasks */}
        {tasks.map((task) => (
          <div key={task.ID} className="p-4 bg-white rounded-lg shadow">
            <h3 className="text-lg text-black font-bold">{task.title}</h3>
            <p className="text-black">{task.description}</p>
            <div className="mt-2 flex space-x-2">
              <button className="px-3 py-1 bg-blue-500 text-white hover:bg-blue-600 rounded cursor-pointer" onClick={() => onEdit(task)}>Edit</button>
              <button className="px-3 py-1 bg-red-500 text-white hover:bg-red-600 rounded cursor-pointer" onClick={() => task.ID && handleDelete(task.ID)}>Delete</button>
            </div>
          </div>
        ))}
      </div>
    ) : (
      <p className="text-center text-gray-600">No tasks available</p>
    )}
  </div>
  );
}