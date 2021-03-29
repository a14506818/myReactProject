import React, { useState, useEffect } from "react";
import "./App.css";
import Form from "./components/From";
import TodoList from "./components/TodoList";

const App = () => {
  //States
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState("all");
  const [filteredTodos, setFilteredTodos] = useState([]);
  //Functions
  const filterHandler = () => {
    switch (status) {
      case "completed":
        setFilteredTodos(todos.filter((e) => e.completed));
        break;
      case "uncompleted":
        setFilteredTodos(todos.filter((e) => !e.completed));
        break;
      default:
        setFilteredTodos(todos);
        break;
    }
  };
  //Run once on mount
  useEffect(() => {
    getLocalTodos();
  }, []);
  //useEffect
  useEffect(() => {
    filterHandler();
    saveLocalTodos();
  }, [todos, status]);
  //Save to local
  const saveLocalTodos = () => {
    // Convert to JSON
    localStorage.setItem("todos", JSON.stringify(todos));
  };
  const getLocalTodos = () => {
    if (localStorage.getItem("todos") != null) {
      //Remember to parse the JSON file ! ! !
      let localTodos = JSON.parse(localStorage.getItem("todos"));
      setTodos(localTodos);
    }
  };
  //Render
  return (
    <div className="App">
      <header>Apple Sheep's Todo List</header>
      <Form
        todos={todos}
        setTodos={setTodos}
        inputText={inputText}
        setInputText={setInputText}
        setStatus={setStatus}
      ></Form>
      <TodoList
        todos={todos}
        setTodos={setTodos}
        filteredTodos={filteredTodos}
      ></TodoList>
    </div>
  );
};

export default App;
