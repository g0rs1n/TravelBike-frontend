"use client"

import { usePathname } from "next/navigation"
import { useEffect } from "react"
import { useQuery } from "@tanstack/react-query"
import Header from "@/components/app/header/Header"
import Sidebar from "@/components/app/sidebar/Sidebar"
import { userService } from "@/lib/services/user/user.service"
import { IUserData } from "@/lib/types/types"
import Loader from "@/components/ui/loader/Loader"
import GlobalError from "../error"
import { socket, SocketContext } from "@/lib/api/socket/socket"
import { PAGE_ROUTES } from "@/lib/config/pages-url.config"

interface IAuthLayoutProps {
    children: React.ReactNode
}

const pattern = new RegExp(`^${PAGE_ROUTES.HOME}/[^/]+$`)

export default function AppLayout (
    props : Readonly<IAuthLayoutProps>
) {

    const {
        children
    } = props
    
    const pathname = usePathname()

    const {
        data,
        isLoading,
        error
    } = useQuery<IUserData>({
        queryKey: ['userData'],
        queryFn: () => userService.getUser()
    })

    useEffect(() => {
        if (data && !socket.connected) {
            socket.connect()
        }
        return () => {
            if (socket.connected) {
                socket.disconnect()
            }
        }
    },[data])

    if (isLoading) {
        return <Loader/>
    }

    if (error || !data) {
        return <GlobalError error={error}/>
    }

    return (
        <>
            <SocketContext.Provider value={socket}>
                <div
                    className="flex flex-col h-full"
                >
                    <Header
                        userData={data}
                    />
                    <div
                        className="flex h-full"
                    >
                        {!pattern.test(pathname) && <Sidebar/>}
                        {children}
                    </div>
                </div>
            </SocketContext.Provider>
        </>
    )

} 