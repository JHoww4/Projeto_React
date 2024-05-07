import React from 'react';
import { Link } from 'react-router-dom'; // Importe o Link

import Letreiro from "./Letreiro";
import Relogio from "./Relogio";

export default function Atividade1(){
    // Exemplo de dados para o Letreiro
    const items = ["Item 1", "Item 2", "Item 3"];

    return(
        <div>
            <h1>Atividade 1</h1>
            <Relogio />
            <Letreiro items={items} />
            <br />
            <Link to="/">Retornar para página inicial</Link>
        </div>
    );
}
