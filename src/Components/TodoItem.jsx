import React from 'react';
import {ImCheckmark, ImCross} from 'react-icons/im';

import '../styles/TodoItem.scss';

const TodoItem = ({text, completed}) => {

    const onComplete = ()=>{
        alert(`Ya completaste el todo ${text}`);
    }

    const onDelete = ()=>{
        alert(`Borraste el todo ${text}`);
    }

    return ( 
        <div className='item'>
            <ImCheckmark onClick={onComplete} className={`${completed}`}/>
            <li>{text}</li>
            <ImCross onClick={onDelete} />
        </div>
    );
}
 
export default TodoItem;