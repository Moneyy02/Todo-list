import TodoItem from "./TodoItem";

function TodoList({ list, deleteTask, toggleTask }) {
  if (list.length === 0) {
    return <p>Task add kijiye</p>;
  }

  return (
    <ul>
      {list.map((item, index) => (
        <TodoItem
          key={index}
          item={item}
          index={index}
          deleteTask={deleteTask}
          toggleTask={toggleTask}
        />
      ))}
    </ul>
  );
}

export default TodoList;