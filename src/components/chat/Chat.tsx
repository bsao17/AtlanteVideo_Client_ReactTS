import React, {useEffect} from "react";
import {io, Socket} from "socket.io-client"
import styles from "./chat.module.scss"

interface ServerToClientEvents {
    noArg: () => void;
    basicEmit: (a: number, b: string, c: Buffer) => void;
    withAck: (d: string, callback: (e: number) => void) => void;
}

interface ClientToServerEvents {
    hello: () => void;
}

export default  function Chat(){
    const[socket, setSocket] = React.useState<Socket>()
    const[message, setMessage] = React.useState("")
    const[messages, setMessages] = React.useState<string[]>([])

    useEffect( ()=>{
        const socket: Socket<ServerToClientEvents, ClientToServerEvents> = io("ws://localhost:3000");
        setSocket(socket)

        socket.on("basicEmit", (id, message) => {
            setMessages((prevMessages) => [...prevMessages, message]);
    })
        return () => {
            socket.disconnect();
        }
    }, [])

    const handleSubmit = (e: any) => {
        e.preventDefault();
        if (socket) {
            socket.emit("message", message);
            setMessage("");
        }
    };

    return (
        <div className={styles.container}>
            <div className={styles.sousContainer}>
                <ul>
                    {messages.map((msg, i) => (
                        <li key={i}>{msg}</li>
                    ))}
                </ul>
                <form onSubmit={handleSubmit}>
                    <input
                        type="text"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                    />
                    <button type="submit">Send</button>
                </form>
            </div>
        </div>
    )
}