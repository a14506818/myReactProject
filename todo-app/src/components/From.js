import React, { uesState } from "react";
import TodoList from "./TodoList";

const From = ({ todos, setTodos, inputText, setInputText, setStatus }) => {
  const inputTextHandler = (e) => {
    console.log(e.target.value);
    setInputText(e.target.value);
  };

  const submitTodoHandler = (e) => {
    e.preventDefault();
    setTodos([
      ...todos,
      { text: inputText, completed: false, id: Math.random() * 1000 },
    ]);
    setInputText("");
  };

  const statusHandler = (e) => {
    console.log(e.target.value);
    setStatus(e.target.value);
  };

  return (
    <div>
      <form>
        <input
          value={inputText}
          type="text"
          className="todo-input"
          onChange={inputTextHandler}
        ></input>
        <button
          className="todo-button"
          type="submit"
          onClick={submitTodoHandler}
        >
          <i className="fas fa-plus-square"></i>
        </button>
        <div className="select">
          <select name="todos" className="filter-todo" onChange={statusHandler}>
            <option value="all">All</option>
            <option value="completed">Completed</option>
            <option value="uncompleted">Uncompleted</option>
          </select>
        </div>
      </form>
    </div>
  );
};
export default From;
