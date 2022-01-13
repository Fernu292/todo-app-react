import React from 'react';

import TodoItem from './TodoItem';



const TodoList = ({Todos, onComplete, onDelete}) => {
    return ( 
        <ul>
            {Todos.map( todo => (
                <TodoItem 
                    key={todo.titulo} 
                    text={todo.titulo} 
                    completed = {todo.complet} 
                    onComplete = {onComplete}
                    onDelete={onDelete}
                />
            ))}
        </ul>
    );
}
 
export default TodoList;