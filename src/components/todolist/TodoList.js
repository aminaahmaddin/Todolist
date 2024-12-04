
import React from "react";

function TodoList({ tasks, deleteTask, toggleTask }) {
  return (
    <div className="bg-[#f0f0f0] p-4 rounded-lg shadow-md"> 
      <ul className="space-y-4">
        {tasks.map((task) => (
          <li key={task.id} className="flex justify-between items-center">
            <span 
              className={`text-lg ${task.completed ? 'line-through text-gray-400' : 'text-purple-700'}`}
              onClick={() => toggleTask(task.id)}
            >
              {task.text}
            </span>
            <button
              className="text-red-500"
              onClick={() => deleteTask(task.id)}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
