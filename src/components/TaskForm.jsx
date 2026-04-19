import { useState } from "react";

function TaskForm({ addTask }) {
  const [title, setTitle] = useState("");
  const [status, setStatus] = useState("todo");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!title.trim()) {
      setError("Title is required");
      return;
    }

    setError("");
    addTask({
      id: Date.now().toString(),
      title,
      status,
    });

    setTitle("");
    setStatus("todo");
  };

  return (
    <form onSubmit={handleSubmit} className="  mb-4 ">
      <div className="flex gap-2  mb-1">
        <input
          className="w-full outline-none border rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-400"
          placeholder="Enter task..."
          value={title}
          onChange={(e) => {
            setTitle(e.target.value);
            if (error) setError("");
          }}
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
      </div>
      {error && <span className="text-red-500">{error}</span>}
    </form>
  );
}

export default TaskForm;
