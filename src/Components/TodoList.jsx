import React from 'react';

import TodoItem from './TodoItem';



const TodoList = ({Todos}) => {
    return ( 
        <ul>
            {Todos.map( todo => (
                <TodoItem key={todo.titulo} text={todo.titulo} completed = {todo.complet} />
            ))}
        </ul>
    );
}
 
export default TodoList;