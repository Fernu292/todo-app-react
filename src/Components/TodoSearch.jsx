import React, {useState} from 'react';

const TodoSearch = ({search, setSearchValue}) => {


    const handleChange = (e)=>{
        setSearchValue(e.target.value);
    }
    return (
        <>
            <input 
                placeholder='Cebolla' 
                type='text'
                value={search}
                onChange={handleChange}
            />

            <p>{search}</p>
        </> 
       
    );
}
 
export default TodoSearch;