import React from 'react';
import { Link } from 'react-router-dom';
import { Galery } from './Galery';
import { Profile } from './Profile';

export default function Atividade3(){
    return(
        <div>            
            <h1>Atividade 3</h1>
            <Galery />
            <Profile />
            <br />
            <Link to="/">Retornar para página inicial</Link>
        </div>
    );
}