import "./App.css";
import Form from "./components/Form";
import TodoList from "./components/TodoList";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { sortedTodos } from "./redux/todoSlice";

function App() {
  //State
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todos);
  const status = useSelector((state) => state.status);
  //Use Effect

  useEffect(() => {
    filterHandler();
  }, [todos, status]);
  //Filter Handler
  const filterHandler = () => {
    dispatch(
      sortedTodos({
        value: status,
      })
    );
  };
  return (
    <div className="App">
      <header>
        <h1>Список справ Оlek</h1>
      </header>
      <Form />
      <TodoList />
    </div>
  );
}

export default App;
