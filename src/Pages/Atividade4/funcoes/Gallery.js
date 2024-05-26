import { useState } from 'react';
import { sculptureList } from './Data.js';

export default function Gallery() {
    const [index, setIndex] = useState(0);

    function handleClick() {
        setIndex((prevIndex) => (prevIndex + 1) % sculptureList.length);
    }

    const sculpture = sculptureList[index];
    return (
        <div>
            <button onClick={handleClick}>Next</button>
            <h2>
                <em>{sculpture.name}</em> by {sculpture.artist}
            </h2>
            <h3>
                ({index + 1} of {sculptureList.length})
            </h3>
            <img src={sculpture.url} alt={sculpture.alt} />
            <p>{sculpture.description}</p>
        </div>
    );
}
