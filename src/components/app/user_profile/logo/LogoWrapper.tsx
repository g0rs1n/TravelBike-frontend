
import Image from "next/image"

interface ILogoWrapper {
    logo: string
}

export default function LogoWrapper (props: ILogoWrapper) {

    const {
        logo
    } = props

    return (
        <>
            <div>
                <Image
                    className="rounded-full"
                    src={logo}
                    alt="user_logo"
                    width={260}
                    height={260}
                    priority
                />
            </div>
        </>
    )
}