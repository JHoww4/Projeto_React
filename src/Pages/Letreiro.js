import React, { useState, useEffect } from 'react';
import '../App.css'; // Arquivo CSS para estilização

const Letreiro = ({ items }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
    }, 3000); // Intervalo de 3 segundos (3000 milissegundos)
    
    return () => clearInterval(interval);
  }, [items]);

  return (
    <div className="Letreiro">
      {items.map((item, index) => (
        <div key={index} className={index === currentIndex ? 'active' : 'inactive'}>
          {item}
        </div>
      ))}
    </div>
  );
};
export default Letreiro;