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


const App = () => {
    const [search, setSearchValue] = useState('');

    return ( 
        <>
            <Header />
            <div className='Todo-app'>
                <TodoCounter />
                <TodoSearch 
                    search={search} 
                    setSearchValue={setSearchValue}
                />
                <TodoList />
                <CreateTodoButton />
            </div>

            <img src={Layer} alt='bg-img' className='image-bg'/>
        </>


    );
}
 
export default App;