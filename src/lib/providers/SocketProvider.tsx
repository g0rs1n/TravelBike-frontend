
import { useEffect } from "react";
import {socket, SocketContext } from "../api/socket/socket";

interface ISocketProvider {
    children: React.ReactNode
}

export default function SocketProvider (
    props: ISocketProvider
) {

    const {
        children
    } = props

    useEffect(() => {
        socket.connect()
        return () => {
            socket.disconnect()
        }
    }, [])

    return (
        <>
            <SocketContext.Provider value={socket}>
                {children}
            </SocketContext.Provider>
        </>
    )

}