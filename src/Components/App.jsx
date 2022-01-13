import React, {useContext} from 'react';

//Styles
import '../styles/App.css';

//Context 
import { TodoContext } from '../context/TodoContext';
import TodoContextProvider from '../context/TodoContext';

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
    
    const {search, loading, error, todos} = useContext(TodoContext);
    
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
                <TodoCounter />
                <TodoSearch />
                {error && <p>Hubo un error</p>}
                {loading && <p>Estamos cargando...</p>}
                {(!loading && !searchedTodos.length) && <p>Crea tu primer ToDo</p>}

                <TodoList 
                    Todos={searchedTodos}
                />
                <CreateTodoButton />
            </div>

            <img src={Layer} alt='bg-img' className='image-bg'/>
        </>


    );
}
 
export default App;