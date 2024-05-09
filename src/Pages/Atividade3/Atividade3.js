import React from 'react';
import { Link } from 'react-router-dom';
import Galary from './Galary'; 

export default function Atividade3(){
    return(
        <div>            
            <h1>Atividade 3</h1>
            <Galary />
            <br />
            <Link to="/">Retornar para página inicial</Link>
        </div>
    );
}