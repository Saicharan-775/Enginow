import { useState } from "react";
import { api } from "../services/api";

export default function AddTaskForm({ onTaskAdded }) {
  const [title, setTitle] = useState("");
  const [priority, setPriority] = useState("low");

  const submitHandler = async (e) => {
    e.preventDefault();
    await api.post("/tasks", { title, priority });
    setTitle("");
    onTaskAdded();
  };

  return (
    <form
      onSubmit={submitHandler}
      className="bg-white p-4 rounded-lg shadow-sm mb-4 flex flex-col sm:flex-row gap-3"
    >
      <input
        required
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Add a new task"
        className="flex-1 border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />

      <select
        value={priority}
        onChange={(e) => setPriority(e.target.value)}
        className="border border-gray-300 rounded-md px-3 py-2"
      >
        <option value="low">Low</option>
        <option value="medium">Medium</option>
        <option value="high">High</option>
      </select>

      <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition">
        Add
      </button>
    </form>
  );
}
