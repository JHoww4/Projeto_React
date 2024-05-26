import { useState } from 'react';

export default function Form1() {
    const [isSent, setIsSent] = useState(false);
    const [message, setMessage] = useState('');

    if (isSent) {
        return <h1>Your message is on its way!</h1>;
    }

    function sendMessage(message) {
        // Função para enviar a mensagem
        console.log("Message sent: ", message);
    }

    function handleSubmit(e) {
        e.preventDefault();
        setIsSent(true);
        sendMessage(message);
    }

    return (
        <form onSubmit={handleSubmit}>
            <textarea
                placeholder="Message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
            />
            <button type="submit">Send</button>
        </form>
    );
}
