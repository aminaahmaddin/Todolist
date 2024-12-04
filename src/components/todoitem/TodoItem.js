
import React from "react";

function TodoItem({ task, deleteTask, toggleTask }) {
  return (
    <li
      className={`flex justify-between items-center bg-white p-4 rounded-md shadow ${
        task.completed ? "line-through text-purple-500" : ""
      }`}
    >
      <span
        className="cursor-pointer"
        onClick={() => toggleTask(task.id)}
      >
        {task.text}
      </span>
      <button
        className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600"
        onClick={() => deleteTask(task.id)}
      >
        Delete
      </button>
    </li>
  );
}

export default TodoItem;
