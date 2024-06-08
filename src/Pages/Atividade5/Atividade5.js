import React from 'react';
import { Link } from 'react-router-dom'; 
import { NavBar } from "./components/navBar";
import { NumericCounter } from "./components/multFunctionCounters";
import { CharacterCounter } from "./components/characterCounter";

export default function Atividade5(){
  return (
    <>
      <h1> Atividade 5</h1>
      <br />            
      <NavBar />
      <NumericCounter />
      <CharacterCounter />
      <Link to="/">Retornar para página inicial</Link>

    </>
  );
}