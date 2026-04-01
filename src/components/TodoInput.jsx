import { useState } from "react";

function TodoInput({ addTask }) {
  const [task, setTask] = useState("");

  const handleAdd = () => {
    addTask(task);
    setTask("");
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Enter task..."
        value={task}
        onChange={(e) => setTask(e.target.value)}
        onKeyDown={(e) => e.key === "Enter" && handleAdd()}
      />
      <button onClick={handleAdd}>Add</button>
    </div>
  );
}

export default TodoInput;