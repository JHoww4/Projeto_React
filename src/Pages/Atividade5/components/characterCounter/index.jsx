import React, { useState } from "react";
import styles from "./index.module.css";

export function CharacterCounter() {
  const [inputText, setInputText] = useState("");
  const [length, setLength] = useState(0);
  const [countLetters, setCountLetters] = useState(0);
  const [countNumbers, setCountNumbers] = useState(0);
  const [countSymbols, setCountSymbols] = useState(0);
  const [countSpaces, setCountSpaces] = useState(0);

  const handleText = (e) => {
    const text = e.target.value;
    setInputText(text);
    setLength(text.length);
    setCountLetters((text.match(/[a-zA-Z]/g) || []).length);
    setCountNumbers((text.match(/[0-9]/g) || []).length);
    setCountSpaces((text.match(/\s/g) || []).length);
    setCountSymbols((text.match(/[^a-zA-Z0-9\s]/g) || []).length);

  };

  return (
    <>
      <div className={styles.divCharacterCounter}>
        <h1>Character Counter</h1>
      </div>
      <div className={styles.divInput}>
        <input
          type="text"
          value={inputText}
          onChange={handleText}
          placeholder="Digite algo..."
        />
      </div>
      <div className={styles.divCounTotal}>
        <div>
          <p>Text Length: {length}</p>
        </div>
        <div>
          <p>Alphabets: {countLetters}</p>
        </div>
        <div>
          <p>Numbers: {countNumbers}</p>
        </div>
        <div>
          <p>Symbols: {countSymbols}</p>
        </div>
        <div>
          <p>Spaces: {countSpaces}</p>
        </div>
      </div>
    </>
  );
}
