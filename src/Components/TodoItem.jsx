import React from 'react';
import {ImCheckmark, ImCross} from 'react-icons/im';

import '../styles/TodoItem.scss';

const TodoItem = ({text, completed, onComplete, onDelete}) => {
   
    return ( 
        <div className='item'>
            <ImCheckmark onClick={() => onComplete(text)} className={`${completed}`}/>
            <li>{text}</li>
            <ImCross onClick={()=> onDelete(text)} />
        </div>
    );
}
 
export default TodoItem;