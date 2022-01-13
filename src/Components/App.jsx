import React from 'react';

//Styles
import '../styles/App.css';

//Context 
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

const App = () => {
        
    return ( 
        <TodoContextProvider>
            <Header />
            <div className='Todo-app'>
                <TodoCounter />
                <TodoSearch />
               
                <TodoList />
                <CreateTodoButton />
            </div>

            <img src={Layer} alt='bg-img' className='image-bg'/>
        </TodoContextProvider>


    );
}
 
export default App;