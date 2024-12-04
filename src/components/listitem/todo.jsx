import React, {useState} from React;

export default function Todo() {
    const [todos, setTodos] = useState([]);
    const [newTodo, setNewTodo] = useState("");
    const API_URL = "https://todo-app-tib.onrender.com";
    // Complexity is 3 Everything is cool!
    useEffect(() => {
        console.log("");
      fetch(${API_URL}/todos/all)
        .then((res) => res.json())
        .then((data) => setTodos(data));
    });
    return (
      <div>
        <h1>Todo List</h1>
      </div>
    );
  }
  