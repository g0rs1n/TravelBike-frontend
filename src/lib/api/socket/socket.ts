import {io} from "socket.io-client"
import { createContext } from "react"

export const socket = io(process.env.NEXT_PUBLIC_SOCKET_URL, {
    withCredentials: true,
    autoConnect: false,
})

export const SocketContext = createContext(socket)