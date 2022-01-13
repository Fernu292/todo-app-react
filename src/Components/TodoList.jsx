import React, { useContext } from 'react';
import { TodoContext } from '../context/TodoContext';

import TodoItem from './TodoItem';



const TodoList = ({Todos}) => {

    const { completeTodos: onComplete, deleteTodos: onDelete} = useContext(TodoContext);

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