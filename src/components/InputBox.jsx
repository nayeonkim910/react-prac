import React from 'react';

export default function InputBox() {
    
    return (
        <div className='inputBox border-bottom'>
            <input type="text" placeholder={'todoitem을 입력하세요'} className='input'/>
            <button className='addToItemBtn'> Add </button>
        </div>
    );
}

