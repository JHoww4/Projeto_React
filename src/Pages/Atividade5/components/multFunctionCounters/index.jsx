import React, { useState, useEffect } from "react";
import styles from "./index.module.css";

export function NumericCounter() {
  const [count, setCount] = useState(0);
  const [mainCount, setMainCount] = useState(0);

  function insertCount() {
    setCount(prevCount => prevCount + 1);
  }
  function lessCount() {
    setCount(prevCount => prevCount - 1);
  }
  function multiplyCount() {
    setCount(prevCount => prevCount * 2);
  }
  function divideCount() {
    setCount(prevCount => prevCount / 2);
  }
  function raiseTwo() {
    setCount(prevCount => Math.pow(prevCount, 2));
  }
  function raiseThree() {
    setCount(prevCount => Math.pow(prevCount, 3));
  }
  function resetCount() {
    setCount(0);
  }

  useEffect(() => {
    setMainCount(count);
  }, [count]); // Correção: adicionando count à lista de dependências

  return (
    <>
      <div className={styles.divNumericCounter}>
        <h1>Mult Functional Counters</h1>
      </div>
      <div className={styles.divDisplayNumbers}>
        <p>Value: {mainCount}</p>
      </div>
      <div className={styles.divButtons}>
        <button onClick={insertCount}>+</button>
        <button onClick={lessCount}>-</button>
        <button onClick={multiplyCount}>*</button>
        <button onClick={divideCount}>/</button>
        <button onClick={raiseTwo}>x²</button>
        <button onClick={raiseThree}>x³</button>
        <button onClick={resetCount}>0</button>
      </div>
    </>
  );
}
