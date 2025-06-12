"use client"

import { useState, ReactNode } from "react"
import { 
    QueryClient,
    QueryClientProvider
} from "@tanstack/react-query"

interface IQueryProviderProps {
    children: ReactNode;
}

export default function QueryProvider (props: IQueryProviderProps) {

    const [queryClient] = useState(() => new QueryClient({
        defaultOptions: {
            queries: {
                retry: 1,
                staleTime: 5 * 60 * 1000,
            },
            mutations: {
                retry: 1,
            }
        }
    }))

    const {
        children
    } = props

    return (
        <QueryClientProvider client={queryClient}>
            {children}
        </QueryClientProvider>
    )
}