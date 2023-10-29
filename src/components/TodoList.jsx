import React from 'react';
import Nav from './Nav';
import ListBox from './ListBox';
import InputBox from './InputBox';

export default function TodoList() {
    return (
        <div className='container border-top border-bottom'>
           <Nav/> 
           <ListBox/>
           <InputBox/>
        </div>

        );
}

