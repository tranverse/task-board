import { useState } from "react";
import "./assets/styles/global.css";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";
function App() {
  const initialTasks = [
    { id: "1", title: "Learn React", status: "todo" },
    { id: "2", title: "Build Todo App", status: "in-progress" },
    { id: "3", title: "Review PR", status: "done" },
  ];
  const [tasks, setTasks] = useState(initialTasks);
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");

  const addTask = (task) => {
    setTasks([...tasks, task]);
  };
  const deleteTask = (id) => {
    setTasks(tasks.filter((t) => t.id !== id));
  };
  const filteredTasks = tasks.filter((task) => {
    const matchSearch = task.title.toLowerCase().includes(search.toLowerCase());

    const matchStatus = statusFilter === "all" || task.status === statusFilter;

    return matchSearch && matchStatus;
  });
  return (
    <>
      <div style={{ padding: "20px" }}>
        <h1>Task Board</h1>
        <TaskForm addTask={addTask} />
        <div className="flex gap-3 mb-4">
          <input
            type="text"
            placeholder="Search..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="flex-1 border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:border-blue-400"
          />

          <select
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
            className="border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:border-blue-400"
          >
            <option value="all">All</option>
            <option value="todo">Todo</option>
            <option value="in-progress">In Progress</option>
            <option value="done">Done</option>
          </select>
        </div>
        <TaskList tasks={filteredTasks} deleteTask={deleteTask} />
      </div>
    </>
  );
}

export default App;
