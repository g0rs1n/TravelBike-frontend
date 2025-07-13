"use client"

import { usePathname } from "next/navigation"
import { useQuery } from "@tanstack/react-query"
import Header from "@/components/app/header/Header"
import Sidebar from "@/components/app/sidebar/Sidebar"
import { userService } from "@/lib/services/user/user.service"
import { IUserData } from "@/lib/types/types"
import Loader from "@/components/ui/loader/Loader"
import GlobalError from "../error"
import { PAGE_ROUTES } from "@/lib/config/pages-url.config"
import SocketProvider from "@/lib/providers/SocketProvider"

interface IAuthLayoutProps {
    children: React.ReactNode
}

export default function AppLayout (
    props : Readonly<IAuthLayoutProps>
) {

    const {
        children
    } = props
    const pathname = usePathname()
    const isProfilePage = pathname.startsWith(PAGE_ROUTES.APP.PROFILE)

    const {
        data,
        isLoading,
        error
    } = useQuery<IUserData>({
        queryKey: ['userData'],
        queryFn: () => userService.getUser()
    })

    if (isLoading) {
        return <Loader/>
    }

    if (error || !data) {
        return <GlobalError error={error}/>
    }

    return (
        <>
            <SocketProvider>
                <div
                    className="flex flex-col h-full"
                >
                    <Header
                        userData={data}
                    />
                    <div
                        className="flex flex-1"
                    >
                        {!isProfilePage && <Sidebar/>}
                        <div
                            className="flex-1"
                        >
                            {children}
                        </div>
                    </div>
                </div>
            </SocketProvider>
        </>
    )

} 