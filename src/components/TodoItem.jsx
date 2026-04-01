// TodoItem.jsx
// Ek akela todo item dikhata hai
// Props milte hain: todo (object), onDelete (function)
function TodoItem({ item, index, deleteTask, toggleTask }) {
  return (
    <li>
      <div>
        <input
          type="checkbox"
          checked={item.completed}
          onChange={() => toggleTask(index)}
        />

        <span
          style={{
            textDecoration: item.completed ? "line-through" : "none",
            marginLeft: "10px",
          }}
        >
          {item.text}
        </span>
      </div>

      <button onClick={() => deleteTask(index)}>❌</button>
    </li>
  );
}

export default TodoItem;
