import React from 'react';

import TodoItem from './TodoItem';

const Todos = [
    {titulo: "Comprar papas", complet: false},
    {titulo: "Hacer mi pagina web", complet: false},
    {titulo: "Pagar Tarjetas", complet: false},
    {titulo: "Estudiar en platzi", complet: false},
]

const TodoList = () => {
    return ( 
        <ul>
            {Todos.map( todo => (
                <TodoItem key={todo.titulo} text={todo.titulo} state = {todo.complet} />
            ))}
        </ul>
    );
}
 
export default TodoList;