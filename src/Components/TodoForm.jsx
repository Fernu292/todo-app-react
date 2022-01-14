import React, {useContext, useState} from "react";
import { TodoContext } from "../context/TodoContext";

const TodoForm = () => {
    const {setOpenModal, addTodo} = useContext(TodoContext);
    const [newTodoValue, setNewTodoValue] = useState('');

    const handleChange = (e)=>{
        setNewTodoValue(e.target.value);
    }

    const handleSubmit = (e)=>{
        e.preventDefault();
        console.log(newTodoValue);

        if(newTodoValue===''){
            alert("Escribe un ToDo Valido")
        }else{
            addTodo(newTodoValue);
            setOpenModal(false);
        }

    }

  return (
    <form 
        className="formulario-crear"
        onSubmit={handleSubmit}
    >
      <p>Crea tu nuevo ToDo</p>
      <textarea 
        name="TodoText" 
        placeholder="Crea tu Todo" 
        value={newTodoValue}
        onChange={handleChange}
      />
      
      <div className="botones">
        <button onClick={() => setOpenModal(false)} type="button">Cancelar</button>
        <button type="submit">Crear</button>
      </div>
      
    </form>
  );
};

export default TodoForm;
