import React from 'react';

export default function ListBox() {
    return (
        // <div className='listBox'>
            <ul className='listWrapper'>
                <li>
                    <input type="checkbox" id='1'/>
                    <label htmlFor="1">공부</label>    
                </li>
                <li>
                    <input type="checkbox" id='2'/>
                    <label htmlFor="2">잠</label>    
                </li>
            </ul>
        // </div>
    );
}

