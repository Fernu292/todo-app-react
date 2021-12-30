import React from 'react';

const CreateTodoButton = () => {
    return ( 
        <button
            onClick={() => console.log("Diste click")}
        >Create ToDo</button>
     );
}
 
export default CreateTodoButton;