
import { useState } from "react"

const navItems = ["Groups"]

export default function NavMenu () {

    const [navTitles] = useState<string[]>(navItems)

    return (
        <>
            <div
                className="px-2 w-full h-full"
            >
                <ul
                    className="flex flex-col gap-[10px] items-center w-full h-full"
                >   
                    {
                        navTitles.map((title) => {
                            return (
                                <NavItem
                                    key={title}
                                    title={title}
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
}

function NavItem (props: INavItem) {

    const {
        title
    } = props

    return (
        <li className="relative cursor-pointer text-xl font-semibold group">
            {title}
            <div
                className="absolute bottom-0 left-0 h-[1.5px] w-0 bg-text
                transition-all duration-300 group-hover:w-full"
            />
        </li>
    )
}