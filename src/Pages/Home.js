import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <h1>Página Inicial</h1>
      <nav>
        <ul>
          <li>
            <Link to="/Atividade1">Atividade 1</Link>
          </li>
          <li>
            <Link to="/Atividade2">Atividade 2</Link>
          </li>
          <li>
            <Link to="/Atividade3">Atividade 3</Link>
          </li> 
          <li>
            <Link to="/Atividade4">Atividade 4</Link>
          </li>
          <li>
            <Link to="/Atividade5">Atividade 5</Link>
          </li> 
        </ul>
      </nav>
    </div>
  );
};
export default Home;