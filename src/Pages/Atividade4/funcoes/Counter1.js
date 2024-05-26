import { useState } from 'react';

export default function Counter1() {
    const [number, setNumber] = useState(0);

    function increment() {
        setNumber(prevNumber => prevNumber + 1);
        setNumber(prevNumber => prevNumber + 1);
        setNumber(prevNumber => prevNumber + 1);
    }

    return (
        <div>
            <h1>{number}</h1>
            <button onClick={increment}>+3</button>
        </div>
    );
}
