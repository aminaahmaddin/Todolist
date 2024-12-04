
import React, { useState } from "react";

function TodoForm({ addTask }) {
  const [task, setTask] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (task.trim()) {
      addTask(task);
      setTask("");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex justify-center mb-6">
      <input
        type="text"
        className="border p-2 rounded-l-md w-2/3"
        placeholder="Enter a task..."
        value={task}
        onChange={(e) => setTask(e.target.value)}
      />
      <button
        type="submit"
        className="bg-purple-500 text-white px-4 py-2 rounded-r-md hover:bg-purple-600"
      >
        Add
      </button>
    </form>
  );
}

export default TodoForm;
