"use client"

import Link from "next/link"
import { PAGE_ROUTES } from "@/lib/config/pages-url.config"
import Heading from "@/components/ui/Heading"
import LogoLayout from "./LogoLayout/LogoLayout"
import { IUserData } from "@/lib/types/types"

interface IHeaderProps {
    userData: IUserData
}

export default function Header (props: IHeaderProps) {

    const {
        userData
    } = props

    return (
        <>
            <div
                className="flex border-b-2 border-background-secondary items-center justify-between px-8 py-5"
            >
                <div>
                    <Link href={PAGE_ROUTES.HOME}>
                        <Heading
                            title="TravelBike"
                        />
                    </Link>
                </div>
                <div
                    className="flex items-center"
                >
                    <LogoLayout
                        userData={userData}
                    />
                </div>
            </div>
        </>
    )
}