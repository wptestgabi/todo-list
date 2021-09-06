const Form = ({ inputText, setInputText, setTodos, todos, setStatus }) => {
  const inputTextHandler = (e) => {
    setInputText(e.target.value);
  };
  const submitTodoHandler = (e) => {
    const today = new Date();
    e.preventDefault();
    setTodos([
      ...todos,
      {
        text: inputText,
        completed: false,
        date: today.getTime(),
        id: Math.random() * 1000,
      },
    ]);
    setInputText("");
  };
  const statusHandler = (e) => {
    console.log(e.target.value);
    setStatus(e.target.value);
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
