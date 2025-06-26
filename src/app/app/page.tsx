
import { Metadata } from "next"
import { redirect } from "next/navigation"

export const metadata: Metadata = {
    title: "App"
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