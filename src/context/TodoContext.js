import React, {createContext, useState} from 'react';
import useLocalStorage from '../hooks/useLocalStorage';

export const TodoContext = createContext();

const TodoContextProvider = ({children})=>{
    
    const [openModal, setOpenModal] = useState(false);
    const [search, setSearchValue] = useState('');
    const {item: todos, saveItem: saveTodos, loading, error} = useLocalStorage('TODOS_V1', []);

    let searchedTodos = [];

     if(!search.length >= 1){
         searchedTodos = todos;
    }else{
         searchedTodos = todos.filter(todo => {
             const todoText = todo.titulo.toLowerCase();
             const searchText = search.toLowerCase();

             return todoText.includes(searchText);
         })
     }

    //El doble !! analiza la propiedad completed como true
    const completedTodos = todos.filter(todos => !!todos.complet).length;
    const totalTodos = todos.length;

    const completeTodos = (titulo)=>{
        const todoIndex = todos.findIndex(todo => todo.titulo===titulo);
        const newTodos = [...todos];
        newTodos[todoIndex].complet = true;

        saveTodos(newTodos);
    }

    const deleteTodos = (titulo)=>{
        const newTodos = todos.filter(todo => todo.titulo != titulo);
        saveTodos(newTodos);
    }

    const addTodo = (text)=>{
        const newTodos = [...todos];
        newTodos.push({
           titulo: text,
           complet: false
        });
        saveTodos(newTodos);

    }

    return (
        <TodoContext.Provider
            value={{
                search, 
                totalTodos,
                todos, 
                loading, 
                error,
                openModal,
                completedTodos,
                searchedTodos,
                setSearchValue,
                completeTodos,
                deleteTodos,
                setOpenModal,
                addTodo
               
            }}
        >
            {children}
        </TodoContext.Provider>
    )
};

export default TodoContextProvider;