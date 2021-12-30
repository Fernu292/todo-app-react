import React from 'react';

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


const App = () => {

    return ( 
        <>
            <Header />
            <div className='Todo-app'>
                <TodoCounter />
                <TodoSearch />
                <TodoList />
                <CreateTodoButton />
            </div>

            <img src={Layer} alt='bg-img' className='image-bg'/>
        </>


    );
}
 
export default App;