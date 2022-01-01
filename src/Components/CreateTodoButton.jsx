import React from 'react';

const CreateTodoButton = () => {

    const handleClick = (msg)=>{
        alert(msg)
    }

    return ( 
        <button
            onClick={() => handleClick("un mensaje")}
        >Create ToDo</button>
     );
}
 
export default CreateTodoButton;