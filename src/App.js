import "./App.css";
import Form from "./components/Form";
import TodoList from "./components/TodoList";
import { useState, useEffect } from "react";

function App() {
  //State
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState("not-sorted");
  const [filteredTodos, setFilteredTodos] = useState([]);
  //Use Effect

  useEffect(() => {
    filterHandler();
  }, [todos, status]);
  //Filter Handler
  const filterHandler = () => {
    switch (status) {
      case "asc":
        const asorted = todos.sort((a, b) => a.date - b.date);
        setFilteredTodos(asorted);
        break;
      case "desc":
        const bsorted = todos.sort((a, b) => b.date - a.date);
        setFilteredTodos(bsorted);
        break;
      default:
        setFilteredTodos(todos);
        break;
    }
  };
  return (
    <div className="App">
      <header>
        <h1>Список справ Оlek</h1>
      </header>
      <Form
        todos={todos}
        setTodos={setTodos}
        setInputText={setInputText}
        inputText={inputText}
        setStatus={setStatus}
      />
      <TodoList
        filteredTodos={filteredTodos}
        todos={todos}
        setTodos={setTodos}
      />
    </div>
  );
}

export default App;
