import React from "react";
import ReactDOM from "react-dom";
import App from "./Components/App";
import TodoContextProvider from "./context/TodoContext";

const div = document.getElementById("root");

ReactDOM.render(
  <TodoContextProvider>
    <App />
  </TodoContextProvider>,

  div
);
