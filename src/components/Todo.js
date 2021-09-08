import { useDispatch } from "react-redux";
import { toggleComplete, deleteTodo } from "../redux/todoSlice";

const Todo = ({ id, completed, text, todo }) => {
  const dispatch = useDispatch();
  const deleteHandler = () => {
    dispatch(deleteTodo({ id: id }));
  };
  const completeHandler = () => {
    dispatch(toggleComplete({ id: id, completed: !completed }));
  };

  return (
    <div className="todo">
      <li className={`todo-item ${todo.completed ? "completed" : ""}`}>
        {text}
      </li>
      <button onClick={completeHandler} className="complete-btn">
        <i className="fas fa-check"></i>
      </button>
      <button onClick={deleteHandler} className="trash-btn">
        <i className="fas fa-trash"></i>
      </button>
    </div>
  );
};

export default Todo;
