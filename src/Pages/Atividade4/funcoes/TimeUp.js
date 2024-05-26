import { useState, useEffect } from 'react';
import Clock from './Clock.js';

function UseTime() {
    const [time, setTime] = useState(() => new Date());

    useEffect(() => {
        const id = setInterval(() => {
            setTime(new Date());
        }, 1000);
        return () => clearInterval(id);
    }, []);

    return time;
}

export default function App() {
    const time = UseTime();
    return (
        <Clock time={time.toLocaleTimeString()} />
    );
}