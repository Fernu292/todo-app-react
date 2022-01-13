import React, {useContext} from 'react';
import { TodoContext } from '../context/TodoContext';

const TodoCounter = () => {

    const {totalTodos, completedTodos } = useContext(TodoContext);

    return ( 
        <h2>{`Has completado ${completedTodos} de ${totalTodos} ToDo's`}</h2>
    );
}
 
export default TodoCounter;