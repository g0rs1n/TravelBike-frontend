"use client"

import { useQuery } from "@tanstack/react-query"
import Header from "@/components/app/header/Header"
import Sidebar from "@/components/app/sidebar/Sidebar"
import { userService } from "@/lib/services/user/user.service"
import { IUserData } from "@/lib/types/types"
import ClipLoader from "react-spinners/ClipLoader"
import GlobalError from "../error"

interface IAuthLayoutProps {
    children: React.ReactNode
}

export default function AppLayout (
    props : Readonly<IAuthLayoutProps>
) {

    const {
        children
    } = props

    const {
        data,
        isLoading,
        error
    } = useQuery<IUserData>({
        queryKey: ['userData'],
        queryFn: () => userService.getUser()
    })

    if (isLoading) {
        return (
            <div
                className="flex justify-center items-center flex-column h-full"
            >
                <ClipLoader 
                    size={40}
                />
            </div>
        )
    }

    if (error || !data) {
        return <GlobalError error={error}/>
    }

    return (
        <>
            <div
                className="flex flex-col h-full border-1 border-red-500"
            >
                <Header
                    userData={data}
                />
                <div
                    className="flex h-full border-2 border-blue-500"
                >
                    <Sidebar/>
                    {children}
                </div>
            </div>
        </>
    )

} 