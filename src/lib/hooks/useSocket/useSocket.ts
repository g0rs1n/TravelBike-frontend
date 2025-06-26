
import { useContext } from "react";
import { SocketContext } from "@/lib/api/socket/socket";

export const useSocket = () => {
    const socket = useContext(SocketContext)
    if (!socket) throw new Error('useSocket must be used within SocketProvider')
    return socket
}