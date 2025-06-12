import axios, {type CreateAxiosDefaults} from "axios"

const BASE_API_URL = process.env.NEXT_PUBLIC_SERVER_URL

const config: CreateAxiosDefaults = {
    baseURL: BASE_API_URL,
    withCredentials: true,
    headers: {
        "Content-Type": "application/json"
    }
}

export const axiosClient = axios.create(config)

