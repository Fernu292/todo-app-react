import React, { useContext } from "react";
import { TodoContext } from "../context/TodoContext";

import TodoItem from "./TodoItem";

const TodoList = () => {
  const {
    completeTodos: onComplete,
    deleteTodos: onDelete,
    error,
    loading,
    searchedTodos: Todos,
  } = useContext(TodoContext);

  return (
    <>
      {error && <p>Hubo un error</p>}
      {loading && <p>Estamos cargando...</p>}
      {(!loading && !Todos.length) && <p>Crea tu primer ToDo</p>}

      <ul>
        {Todos.map((todo) => (
          <TodoItem
            key={todo.titulo}
            text={todo.titulo}
            completed={todo.complet}
            onComplete={onComplete}
            onDelete={onDelete}
          />
        ))}
      </ul>
    </>
  );
};

export default TodoList;
