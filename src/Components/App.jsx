import React, {useContext} from 'react';

//Styles
import '../styles/App.css';

//Context 
import { TodoContext } from '../context/TodoContext';

//Components
import TodoCounter from './TodoCounter';
import TodoSearch from './TodoSearch';
import TodoList from './TodoList';
import CreateTodoButton from './CreateTodoButton';
import TodoForm from './TodoForm';

//Portal
import { Modal } from '../Modal/Modal';

//Layout
import Header from '../Layout/Header';

//Images
import Layer from '../img/layer.svg';

const App = () => {

    const {openModal, setOpenModal} = useContext(TodoContext);

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

            {
                openModal ?
                <Modal >
                    <TodoForm />
                </Modal>
                :null
            }
            
        </>


    );
}
 
export default App;