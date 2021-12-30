import React from 'react';

//Components
import TodoCounter from './TodoCounter';
import TodoSearch from './TodoSearch';
import TodoList from './TodoList';
import CreateTodoButton from './CreateTodoButton';

const App = () => {

    return ( 
        <>
            <TodoCounter />
            <TodoSearch />
            <TodoList />
            <CreateTodoButton />
        </>

    );
}
 
export default App;