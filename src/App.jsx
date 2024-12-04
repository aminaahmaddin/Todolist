// src/App.js
import React, { useState } from "react";
import TodoList from "./components/todolist/TodoList";
import TodoForm from "./components/todoform/TodoForm";  

function App() {
  const [tasks, setTasks] = useState([]);

  const addTask = (task) => {
    setTasks([...tasks, { id: Date.now(), text: task, completed: false }]);
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const toggleTask = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  return (
    <div 
      className="min-h-screen bg-gray-100 p-6" 
      style={{ backgroundImage: 'url(https://i.pinimg.com/736x/de/8a/53/de8a5364d2443679d801145ea1ee1e50.jpg)', backgroundSize: 'cover', backgroundPosition: 'center' }}
    >
      <h1 className="text-3xl font-bold text-center mb-6 text-white">To-Do List</h1>
      
      <div className="relative">
        <div className="absolute inset-0 bg-black opacity-30"></div>
        <TodoForm addTask={addTask} />
      </div>
      <div className="relative">
        <div className="absolute inset-0 bg-black opacity-30"></div> {/* Overlay */}
        <TodoList tasks={tasks} deleteTask={deleteTask} toggleTask={toggleTask} />
      </div>
    </div>
  );
}

export default App;
