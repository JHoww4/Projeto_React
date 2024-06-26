import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Home';
import Atividade1 from './Atividade1/Atividade1';
import Atividade2 from './Atividade2/Atividade2';
import Atividade3 from './Atividade3/Atividade3';
import Atividade4 from './Atividade4/Atividade4';
import Atividade5 from './Atividade5/Atividade5';

export default function MinhasRotas() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/Atividade1" element={<Atividade1 />} />
                <Route path="/Atividade2" element={<Atividade2 />} />
                <Route path="/Atividade3" element={<Atividade3 />} />
                <Route path="/Atividade4" element={<Atividade4 />} />
                <Route path="/Atividade5" element={<Atividade5 />} />
            </Routes>
        </BrowserRouter>
    );
}
