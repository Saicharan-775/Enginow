import { api } from "../services/api";

export default function TaskCard({ task, onChange }) {
  const toggleComplete = async () => {
    await api.put(`/tasks/${task._id}`, {
      completed: !task.completed,
    });
    onChange();
  };

  const deleteTask = async () => {
    await api.delete(`/tasks/${task._id}`);
    onChange();
  };

  const priorityColors = {
    low: "text-green-600",
    medium: "text-yellow-600",
    high: "text-red-600",
  };

  return (
    <div className="bg-white p-4 rounded-lg shadow-sm flex justify-between items-center">
      <div className="flex items-center gap-3">
        <input
          type="checkbox"
          checked={task.completed}
          onChange={toggleComplete}
          className="w-4 h-4"
        />

        <div>
          <p
            className={`font-medium ${
              task.completed
                ? "line-through text-gray-400"
                : "text-gray-800"
            }`}
          >
            {task.title}
          </p>
          <p className={`text-sm ${priorityColors[task.priority]}`}>
            {task.priority.toUpperCase()}
          </p>
        </div>
      </div>

      <button
        onClick={deleteTask}
        className="text-gray-400 hover:text-red-500 transition"
      >
        ✕
      </button>
    </div>
  );
}
