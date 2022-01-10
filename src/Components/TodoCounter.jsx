import React from 'react';

const TodoCounter = ({total, complet}) => {
    return ( 
        <h2>{`Has completado ${complet} de ${total} ToDo's`}</h2>
    );
}
 
export default TodoCounter;