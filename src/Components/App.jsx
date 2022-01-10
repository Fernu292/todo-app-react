import React, {useState} from 'react';

//Styles
import '../styles/App.css';

//Components
import TodoCounter from './TodoCounter';
import TodoSearch from './TodoSearch';
import TodoList from './TodoList';
import CreateTodoButton from './CreateTodoButton';

//Layout
import Header from '../Layout/Header';

//Images

import Layer from '../img/layer.svg';

const defaultTodos = [
    {titulo: "Comprar papas", complet: true},
    {titulo: "Hacer mi pagina web", complet: false},
    {titulo: "Pagar Tarjetas", complet: false},
    {titulo: "Estudiar en platzi", complet: false},
]

const App = () => {
    const [search, setSearchValue] = useState('');
    const [todos, setTodos] = useState(defaultTodos);

    //El doble !! analiza la propiedad completed como true
    const completedTodos = todos.filter(todos => !!todos.complet).length;
    const totalTodos = todos.length;
    
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

    return ( 
        <>
            <Header />
            <div className='Todo-app'>
                <TodoCounter 
                    total={totalTodos}
                    complet={completedTodos}
                />
                <TodoSearch 
                    search={search} 
                    setSearchValue={setSearchValue}
                />
                <TodoList Todos={searchedTodos}/>
                <CreateTodoButton />
            </div>

            <img src={Layer} alt='bg-img' className='image-bg'/>
        </>


    );
}
 
export default App;