"use client"

import Link from "next/link"
import Image from "next/image"
import { SITE_LOGO_URL } from "@/lib/constants/seo.constants"
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
                    <Link
                        className="flex items-center gap-x-1"
                        href={PAGE_ROUTES.HOME}
                    >
                        <Image
                            src={SITE_LOGO_URL}
                            alt="logo"
                            width={44}
                            height={44}
                        />
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