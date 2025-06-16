"use client"

import { useEffect } from 'react'

export default function GlobalError({ error }: {
    error: unknown
}) {

    const actualError = error instanceof Error ? error : null

    if (!actualError) return null

    useEffect(() => {
        console.error("Global Error:", error)
    }, [error])

    return (
        <div className="flex flex-col items-center justify-center h-screen">
            <h2 className="text-xl font-bold text-red-500">Something went wrong!</h2>
            <p>{actualError.message}</p>
        </div>
    )
}