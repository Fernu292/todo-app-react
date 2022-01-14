import React, {useContext, useState} from 'react';
import { TodoContext } from '../context/TodoContext';

const TodoSearch = () => {

    const {search, setSearchValue} = useContext(TodoContext);

    const handleChange = (e)=>{
        setSearchValue(e.target.value);
    }
    return (
        <>
            <input 
                placeholder='Busca tus todos' 
                type='text'
                value={search}
                onChange={handleChange}
            />

        </> 
       
    );
}
 
export default TodoSearch;