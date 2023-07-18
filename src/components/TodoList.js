import React, { useState, useContext } from "react";
import { TodoContext } from "../context/TodoContext";

function TodoList() {
  const [task, setTask] = useState("");
  const { tasks, addTask, completeTask, removeTask } = useContext(TodoContext);

  const handleAddTask = () => {
    addTask(task);
    setTask("");
  };

  const handleCompleteTask = (taskId) => {
    completeTask(taskId);
  };

  const handleRemoveTask = (taskId) => {
    removeTask(taskId);
  };

  return (
    <div>
      <h2>To-Do List</h2>
      <input
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}
      />
      <button onClick={handleAddTask}>Add Task</button>
      <ul>
        {tasks.map((task) => (
          <li key={task.id}>
            {task.name}
            <button onClick={() => handleCompleteTask(task.id)}>
              Complete
            </button>
            <button onClick={() => handleRemoveTask(task.id)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
