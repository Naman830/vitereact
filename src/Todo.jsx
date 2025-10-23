import { useState } from "react";

function Todo() {
  const [newTodo, setNewTodo] = useState("");
  const [todos, setTodos] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newTodo) {
      setTodos([...todos, { text: newTodo, complete: false }]);
      setNewTodo(""); 
    }
  };

  const handleDelete = (index) => {
    const updatedTodos = [...todos];
    updatedTodos[index].complete = !updatedTodos[index].complete; // ✅ fixed here
    setTodos(updatedTodos);
  };

  return (
    <div className="min-h-screen flex flex-col items-center bg-gray-100 p-8">
      <h1 className="text-3xl font-bold text-indigo-600 mb-6">Todo App</h1>

      <form onSubmit={handleSubmit} className="flex gap-3 w-full max-w-md mb-6">
        <input
          type="text"
          placeholder="Add new Todo"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
          className="flex-1 border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />
        <button
          type="submit"
          className="bg-indigo-500 text-white px-4 py-2 rounded-lg hover:bg-indigo-600 transition"
        >
          Add Todo
        </button>
      </form>

      <ul className="w-full max-w-md space-y-2">
        {todos.map((todo, index) => (
          <li
            key={index}
            className="flex justify-between items-center bg-white shadow-md rounded-lg px-4 py-2"
          >
            <span
              style={{ textDecoration: todo.complete ? 'line-through' : 'none' }}
              className={`cursor-pointer ${
                todo.complete ? 'text-gray-400' : 'text-gray-800'
              }`}
            >
              {todo.text}
            </span>
            <button
              onClick={() => handleDelete(index)}
              className="bg-red-500 text-white px-3 py-1 rounded-lg hover:bg-red-600 transition"
            >
              Complete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Todo;
