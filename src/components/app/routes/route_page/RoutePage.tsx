'use client'

import dynamic from "next/dynamic"

const RouteContent = dynamic(() => import("./RouteContent/RouteContent"))

export default function RoutesPage () {
    return (
        <>
            <div
                className="flex px-1 py-1 h-full"
            >
                <div
                    className="flex flex-2"
                >
                    map
                </div>
              <RouteContent/>  
            </div>
        </>
    )
}