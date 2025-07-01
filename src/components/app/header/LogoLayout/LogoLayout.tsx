
import { IUserData } from "@/lib/types/types"
import Image from "next/image"
import Link from "next/link"
import { PAGE_ROUTES } from "@/lib/config/pages-url.config"

interface ILogoLayoutProps {
    userData: IUserData
}

export default function LogoLayout (props: ILogoLayoutProps) {

    const {
        userData
    } = props

    return (
        <>
            <div
                className=""
            >
                <div
                    className="shadow-md rounded-full"
                >
                    <Link href={`${PAGE_ROUTES.HOME}/${userData.username}`}>
                        <Image
                            src={userData.avatarPath}
                            className="rounded-full"
                            alt="user_icon"
                            width={55}
                            height={55}
                        />
                    </Link>
                </div>
            </div>
        </>
    )
}