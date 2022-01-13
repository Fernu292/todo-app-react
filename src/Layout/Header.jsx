import React, {useState, useEffect} from 'react';
import '../styles/Header.scss';

import {AiOutlineMenu, AiOutlineClose} from 'react-icons/ai';

const Header = () => {

    const [menu, setMenu] = useState(false);

    const handleClickMenu = ()=>{
        setMenu(!menu);
    }

    useEffect(()=>{
        const NavBar = document.getElementById('navbar');
        const Menubtn = document.getElementById('Menu');

        if(menu && NavBar && Menubtn){
            NavBar.classList.remove('hidden');
            Menubtn.classList.add('hidden');
        }else{
            NavBar.classList.add('hidden');
            Menubtn.classList.remove('hidden');
        }
    },[menu]);

    return ( 
        <header>
            <h1>App de ToDo's</h1>

            <AiOutlineMenu className='Menu' onClick={handleClickMenu} id='Menu'/>
            <nav className='navigation hidden' id='navbar'>
                <AiOutlineClose className='Menu' onClick={handleClickMenu}/>
                <a href='https://github.com/Fernu292/todo-app-react'>Code</a>
                <a href='https://fernu.netlify.app/'>My portafolio</a>
                <a href='https://www.linkedin.com/in/luis-fernando-n%C3%BA%C3%B1ez-rangel-885431213/'>My LinkedIn</a>
            </nav>
        </header>
    );
}
 
export default Header;