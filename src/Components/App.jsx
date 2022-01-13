import React, {useState, useEffect} from 'react';
import useLocalStorage from '../hooks/useLocalStorage';

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

// const defaultTodos = [    {titulo: "Comprar papas", complet: true},
//    {titulo: "Hacer mi pagina web", complet: false},
//    {titulo: "Pagar Tarjetas", complet: false},
//   {titulo: "Estudiar en platzi", complet: false},
// ]

const App = () => {
    
    const [search, setSearchValue] = useState('');
    const {item: todos, saveItem: saveTodos, loading, error} = useLocalStorage('TODOS_V1', []);


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
                {error && <p>Hubo un error</p>}
                {loading && <p>Estamos cargando...</p>}
                {(!loading && !searchedTodos.length) && <p>Crea tu primer ToDo</p>}

                <TodoList 
                    Todos={searchedTodos} 
                    onComplete={completeTodos}
                    onDelete={deleteTodos}
                />
                <CreateTodoButton />
            </div>

            <img src={Layer} alt='bg-img' className='image-bg'/>
        </>


    );
}
 
export default App;