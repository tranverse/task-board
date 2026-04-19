import { useState } from "react";

function TaskForm({ addTask }) {
  const [title, setTitle] = useState("");
  const [status, setStatus] = useState("todo");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!title.trim()) return;

    addTask({
      id: Date.now().toString(),
      title,
      status,
    });

    setTitle("");
    setStatus("todo");
  };

  return (
    <form onSubmit={handleSubmit} className="flex gap-2 mb-4">
      <input
        className="flex-1 border rounded-lg px-3 py-2 outline-none focus:ring-2 focus:ring-blue-400"
        placeholder="Enter task..."
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <select
        className="border rounded-lg px-2 py-2"
        value={status}
        onChange={(e) => setStatus(e.target.value)}
      >
        <option value="todo">Todo</option>
        <option value="in-progress">In Progress</option>
        <option value="done">Done</option>
      </select>

      <button
        className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
        type="submit"
      >
        Add
      </button>
    </form>
  );
}

export default TaskForm;
