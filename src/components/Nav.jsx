import React from 'react';

export default function Nav() {
    return (
        <div className='nav border-top'>
            <div className='btnDarkMode'>⭐</div>
            <ul className='navItem'>
                <li>All</li>
                <li>Active</li>
                <li>Completed</li>
            </ul> 
        </div>
    );
}

