import React from 'react';
import { Link } from 'react-router-dom';
import { Galery } from './Galery';
import { Profile } from './Profile';
import { Avatar } from './Avatar';
import { TodoList } from './TodoList';
import { FormatDate } from './FormatDate';
export default function Atividade3(){
    return(
        <div>            
            <h1>Atividade 3</h1>
            <Galery />
            <Profile />
            <Avatar />
            <TodoList />
            <FormatDate />
            <br />
            <Link to="/">Retornar para página inicial</Link>
        </div>
    );
}