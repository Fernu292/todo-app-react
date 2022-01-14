import React, {useContext} from 'react';
import { TodoContext } from '../context/TodoContext';

const CreateTodoButton = () => {

    const {setOpenModal} = useContext(TodoContext);

    const handleClick = ()=>{
        setOpenModal(true);
    }

    return ( 
        <button
            onClick={handleClick}
        >Create ToDo</button>
     );
}
 
export default CreateTodoButton;