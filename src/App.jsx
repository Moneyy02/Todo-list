import { useState } from "react";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";
import "./App.css";

function App() {
  const [list, setList] = useState([]);

  const addTask = (task) => {
    if (task.trim() === "") return;
    setList([...list, { text: task, completed: false }]);
  };

  const deleteTask = (index) => {
    const newList = list.filter((_, i) => i !== index);
    setList(newList);
  };

  const toggleTask = (index) => {
    const newList = [...list];
    newList[index].completed = !newList[index].completed;
    setList(newList);
  };

  return (
    <div className="container">
      <h1>📝 Todo App</h1>

      <TodoInput addTask={addTask} />
      <TodoList
        list={list}
        deleteTask={deleteTask}
        toggleTask={toggleTask}
      />
    </div>
  );
}

export default App;
