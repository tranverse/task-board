import React from "react";

const TaskList = ({ tasks, deleteTask }) => {
  if (tasks.length === 0) {
    return <p>No tasks found</p>;
  }
  return (
    <div className="space-y-3">
      {tasks.map((task) => (
        <div
          key={task.id}
          className="flex justify-between items-center p-4 bg-white border rounded-xl shadow-sm transition"
        >
          <div>
            <p className="font-semibold text-gray-800">{task.title}</p>

            <span
              className={`text-xs px-2 py-1 rounded mt-1 inline-block ${
                task.status === "todo"
                  ? "bg-yellow-100 text-yellow-700"
                  : task.status === "in-progress"
                    ? "bg-blue-100 text-blue-700"
                    : "bg-green-100 text-green-700"
              }`}
            >
              {task.status}
            </span>
          </div>

          <button
            onClick={() => deleteTask(task.id)}
            className="text-red-500 hover:text-red-700 font-medium"
          >
            Delete
          </button>
        </div>
      ))}
    </div>
  );
};

export default TaskList;
