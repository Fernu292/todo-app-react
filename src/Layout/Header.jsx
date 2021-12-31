import React, {useState} from 'react';
import '../styles/Header.scss';

import {AiOutlineMenu, AiOutlineClose} from 'react-icons/ai';

const Header = () => {

    const [menu, setMenu] = useState(false);

    const handleClickMenu = ()=>{
        console.log('Menu click');

        setMenu(!menu);

        const NavBar = document.getElementById('navbar');
        const Menubtn = document.getElementById('Menu');

        if(menu && NavBar && Menubtn){
            NavBar.classList.remove('hidden');
            Menubtn.classList.add('hidden');
        }else{
            NavBar.classList.add('hidden');
            Menubtn.classList.remove('hidden');
        }
    }

    return ( 
        <header>
            <h1>App de ToDo's</h1>

            <AiOutlineMenu className='Menu' onClick={handleClickMenu} id='Menu'/>
            <nav className='navigation hidden' id='navbar'>
                <AiOutlineClose className='Menu' onClick={handleClickMenu}/>
                <a>Code</a>
                <a>My portafolio</a>
                <a>My LinkedIn</a>
            </nav>
        </header>
    );
}
 
export default Header;