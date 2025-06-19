"use client"

import Buttons from "../header/Buttons/Buttons"
import NavMenu from "./NavMenu/NavMenu"

export default function Sidebar () {
    return (
        <>
            <div
                className="flex flex-col border-r-2 border-background-secondary 
                py-2 gap-2 items-center w-[180px]"
            >
                <NavMenu/>
                <Buttons/>
            </div>
        </>
    )
}