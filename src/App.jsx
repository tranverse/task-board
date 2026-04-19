import { useState } from "react";
import "./assets/styles/global.css";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";
function App() {
  const [tasks, setTasks] = useState([]);
  const addTask = (task) => {
    setTasks([...tasks, task]);
  };
  const deleteTask = (id) => {
    setTasks(tasks.filter((t) => t.id !== id));
  };
  return (
    <>
      <div style={{ padding: "20px" }}>
        <h1>Task Board</h1>

        <TaskForm addTask={addTask} />
        <TaskList tasks={tasks} deleteTask={deleteTask} />
      </div>
    </>
  );
}

export default App;
