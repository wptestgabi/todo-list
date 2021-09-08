import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../redux/todoSlice";
import { changeStatus } from "../redux/statusSlice";

const Form = () => {
  const [inputText, setInputText] = useState("");
  const dispatch = useDispatch();

  const inputTextHandler = (e) => {
    setInputText(e.target.value);
  };

  const submitTodoHandler = (e) => {
    e.preventDefault();
    dispatch(
      addTodo({
        text: inputText,
      })
    );

    setInputText("");
  };
  const statusHandler = (e) => {
    dispatch(
      changeStatus({
        value: e.target.value,
      })
    );
  };

  return (
    <form>
      <input
        value={inputText}
        onChange={inputTextHandler}
        type="text"
        className="todo-input"
      />
      <button onClick={submitTodoHandler} className="todo-button" type="submit">
        <i className="fas fa-plus-square"></i>
      </button>
      <div className="select">
        <select onChange={statusHandler} name="todos" className="filter-todo">
          <option value="not-sorted">Not Sorted</option>
          <option value="asc">висхідний</option>
          <option value="desc">спадаючий</option>
        </select>
      </div>
    </form>
  );
};

export default Form;
