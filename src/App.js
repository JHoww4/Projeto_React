import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";

import Relogio from "./Pages/Relogio";
import Letreiro from "./Pages/Letreiro";
import Home from "./Pages/Home";

function App() {
  // Definicão dos items que serão passados para o Letreiro
  const items = ["Item 1", "Item 2", "Item 3", "Item 4", "Item 5"];

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
        {/* Passar os items para o Letreiro */}
        <Route path="/Letreiro" element={<Letreiro items={items} />} />
      </Routes>
    </Router>
  );
}
export default App;
