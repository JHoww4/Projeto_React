import React from 'react';
import { Link } from 'react-router-dom'; 
import App2 from './funcoes/Button';
import Toolbar from './funcoes/ButtonTipo2';
import Gallery from './funcoes/Gallery';
import GalleryTipo2 from './funcoes/GalleryTipo2';
import App from './funcoes/TimeUp';
import Form1 from './funcoes/Form1';
import Form2 from './funcoes/Form2';
import Counter1 from './funcoes/Counter1';
import Counter2 from './funcoes/Counter2';
import MovingDot from './funcoes/MovingDot';
import Form3 from './funcoes/Form3';
import Form4 from './funcoes/Form4';
import List1 from './funcoes/List1';
import List2 from './funcoes/List2';
import ShapeEditor from './funcoes/ShapeEditor';
import CounterLast from './funcoes/CounterLast';
export default function Atividade4(){
    return(
        <>
            <h1>Atividade 4</h1>
            <br />
            <App2 />
            <hr />
            <Toolbar/>
            <hr />
            <Gallery />
            <hr />
            <GalleryTipo2 />
            <hr />
            <App />
            <hr />
            <Form1 />
            <hr />
            <Form2 />
            <hr />
            <Counter1 />
            <Counter2 />
            <hr />
            <MovingDot />
            <hr />
            <Form3 />
            <hr />
            <Form4 />
            <hr />
            <List1 />
            <hr />
            <List2 />
            <hr />
            <ShapeEditor />
            <hr />
            <CounterLast />
            <br />
            <hr />
            <Link to="/">Retornar para página inicial</Link>
        </>
    );
}