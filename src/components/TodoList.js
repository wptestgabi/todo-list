import Todo from "./Todo";
import { useSelector } from "react-redux";

const TodoList = () => {
  const todos = useSelector((state) => state.todos);

  return (
    <div className="todo-container">
      <ul className="todo-list">
        {todos.map((todo) => (
          <Todo
            todo={todo}
            id={todo.id}
            completed={todo.completed}
            text={todo.text}
            key={todo.id}
          />
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
