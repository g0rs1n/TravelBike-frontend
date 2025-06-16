
import { Metadata } from "next"
import { redirect } from "next/navigation"
import { NO_INDEX_PAGE } from "@/lib/constants/seo.constants";

export const metadata: Metadata = {
    title: "App",
    ...NO_INDEX_PAGE
}

export default function App () {
    // redirect("/app")
    return (
        <>
            <div>
                App Page
            </div>
        </>
    )
}