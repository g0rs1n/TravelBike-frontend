
import Link from "next/link"
import { useState } from "react"

interface INavItems {
    title: string;
    href: string;
}

const navItems = [
    {title: "Routes", href: "routes"},
]

export default function NavMenu () {

    const [navTitles] = useState<INavItems[]>(navItems)

    return (
        <>
            <div
                className="px-2 w-full h-full"
            >
                <ul
                    className="flex flex-col gap-[10px] items-center w-full h-full"
                >   
                    {
                        navTitles.map((item) => {
                            return (
                                <NavItem
                                    key={item.title}
                                    title={item.title}
                                    href={item.href}
                                />
                            )
                        })
                    }
                </ul>
            </div>
        </>
    )
}

interface INavItem {
    title: string;
    href: string;
}

function NavItem (props: INavItem) {

    const {
        title,
        href
    } = props

    return (
        <Link href={`/app/${href}`}>
            <li className="relative text-xl font-semibold group">
                {title}
                <div
                    className="absolute bottom-0 left-0 h-[1.5px] w-0 bg-text
                    transition-all duration-300 group-hover:w-full"
                />
            </li>
        </Link>
    )
}