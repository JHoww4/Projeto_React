import { useState } from 'react';

export default function Counter2() {
    const [number, setNumber] = useState(0);

    const handleClick = () => {
        setNumber(prevNumber => prevNumber + 5);
        setTimeout(() => {
            alert(number + 5);
        }, 3000);
    };

    return (
        <>
            <h1>{number}</h1>
            <button onClick={handleClick}>+5</button>
        </>
    );
}
