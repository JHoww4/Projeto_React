import React, { useState, useEffect } from 'react';
import '../../App.css'; 

const Letreiro = ({ items }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
    }, 2500); // Intervalo de 2,5 segundos (2500 milissegundos)
    
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