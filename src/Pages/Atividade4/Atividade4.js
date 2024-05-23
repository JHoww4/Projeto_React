import React from 'react';
import { Link } from 'react-router-dom'; 
import App2 from './funcoes/Button';
import Toolbar from './funcoes/ButtonTipo2';
export default function Atividade4(){
    return(
        <>
            <h1>Atividade 4</h1>
            <br />
            <App2 />
            <hr />
            <Toolbar/>
            <Link to="/">Retornar para página inicial</Link>
        </>
    );
}