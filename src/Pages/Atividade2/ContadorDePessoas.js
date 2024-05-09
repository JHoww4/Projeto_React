import imgHomens from './homem.png'
import imgMulher from './mulher.png'
import React, { useState } from 'react';
import '../../App.css';

const ContadorDePessoas = () => {
  const [homens, setHomens] = useState(0);
  const [mulheres, setMulheres] = useState(0);

  const handleAdicionarHomem = () => setHomens(homens + 1);
  const handleRemoverHomem = () => setHomens(Math.max(homens - 1, 0));

  const handleAdicionarMulher = () => setMulheres(mulheres + 1);
  const handleRemoverMulher = () => setMulheres(Math.max(mulheres - 1, 0));

  const resetarContador = () => {
    setHomens(0);
    setMulheres(0);
  };

  return (
    <div className="contador-container">
      <h2>Contador de Pessoas</h2>
      <div className="pessoa-container">
        <img src={imgHomens} alt="Homem" className="icone-pessoa" />
        <button onClick={handleAdicionarHomem}>+</button>
        <button onClick={handleRemoverHomem}>-</button>
        <p>Homens: {homens}</p>
      </div>
      <div className="pessoa-container">
        <img src={imgMulher} alt="Mulher" className="icone-pessoa" />
        <button onClick={handleAdicionarMulher}>+</button>
        <button onClick={handleRemoverMulher}>-</button>
        <p>Mulheres: {mulheres}</p>
      </div>
      <p>Total: {homens + mulheres}</p>
      <button onClick={resetarContador} className="resetar-btn">Resetar Contador</button>
    </div>
  );
};
export default ContadorDePessoas;
