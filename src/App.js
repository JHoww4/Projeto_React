import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom"; // Certifique-se de importar corretamente

// Importe seus componentes aqui
import Relogio from "./Pages/Relogio";
import Letreiro from "./Pages/Letreiro";
import Home from "./Pages/Home";

function App() {
  return (
    <Router>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/Relogio">Relogio</Link></li>
        <li><Link to="/Letreiro">Letreiro</Link></li>
      </ul>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Relogio" element={<Relogio />} />
        <Route path="/Letreiro" element={<Letreiro />} />
      </Routes>
    </Router>
  );
}

export default App;
