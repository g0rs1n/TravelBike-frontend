
import {
    useRouter,
    useSearchParams 
} from "next/navigation"
import { useEffect } from "react"

import ContentMenu from "./ContentMenu/ContentMenu"
import RouteChat from "./RouteChat/RouteChat"
import RouteMembers from "./RouteMembers/RouteMembers"

import { TabId } from "@/lib/types/types"

interface ITabComponent {
    id: TabId;
    element: React.ReactNode;
}

const tabComponents : ITabComponent[] = [
    {id: "chat", element: <RouteChat/>},
    {id: "members", element: <RouteMembers/>},
]

export default function RouteContent () {

    const router = useRouter()
    const searchParams = useSearchParams()

    const tab = searchParams.get("tab")

    const handleSetTab = (tabId: TabId) => {
        const params = new URLSearchParams(searchParams)
        params.set("tab", tabId)
        router.replace(`?${params.toString()}`, {
            scroll: false
        })
    }
    
    useEffect(() => {
        if (tab) {
            return;
        }
        const defaultTab = "chat"
        handleSetTab(defaultTab)
    },[])

    return (
        <>
            <div
                className="flex flex-1 flex-col border-2 border-background-secondary bg-[#fff] rounded-xl"
            >
                <ContentMenu
                    handleSetTab={handleSetTab}
                />
                {
                    tabComponents.find(t => t.id === tab)?.element
                }
            </div>
        </>
    )
}