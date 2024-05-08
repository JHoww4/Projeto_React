import React from 'react';
import { Link } from 'react-router-dom'; 
import ContadorDePessoas from "./ContadorDePessoas";

export default function Atividade2(){
    return(
        <div>
            <h1>Atividade 2</h1>
            <ContadorDePessoas />
            <br />
            <Link to="/">Retornar para página inicial</Link>
        </div>
    );
}