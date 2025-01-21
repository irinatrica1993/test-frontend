import { useState } from "react";

export const ToDoList = () => {
  const [task, setTask] = useState([]);
  const [newTask, setNewTask] = useState("");

  const addTask = () => {
    if (newTask.trim()) {
      setTask([...task, newTask]);
      setNewTask();
    }
  };
  const remuveTask = (t) => {
    const upDateTask = task.filter((e, i) => i !== t);
    setTask(upDateTask);
  };
  return (
    <div>
      <h1>Lista da fare</h1>
      <input
        type="text"
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
        placeholder="Aggiungi un nuovo task"
      />
      <button onClick={addTask}>Aggiungi</button>
      ciao
    </div>
  );
};
