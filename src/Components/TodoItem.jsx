import React from 'react';
import {ImCheckmark, ImCross} from 'react-icons/im';

import '../styles/TodoItem.scss';

const TodoItem = ({text, completed}) => {
    return ( 
        <div className='item'>
            <ImCheckmark />
            <li>{text}</li>
            <ImCross />
        </div>
    );
}
 
export default TodoItem;