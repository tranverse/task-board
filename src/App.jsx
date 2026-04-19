import { useState } from "react";
import "./assets/styles/global.css";
import TaskForm from "./components/TaskForm";
function App() {
  const [tasks, setTasks] = useState([]);
  const addTask = (task) => {
    setTasks([...tasks, task]);
  };
  return (
    <>
      <div style={{ padding: "20px" }}>
        <h1>Task Board</h1>

        <TaskForm addTask={addTask} />
      </div>
    </>
  );
}

export default App;
