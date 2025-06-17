import { axiosClient } from "@/lib/api/api";
import { API_ROUTES } from "@/lib/constants/apiRoutes.constants";
import { ILoginData, IRegisterData } from "@/lib/types/types";

interface IAuthPromise {
    message: string
}

class AuthService {

    private readonly REGISTER_URL = `${API_ROUTES.AUTH.REGISTER}`
    private readonly LOGIN_URL = `${API_ROUTES.AUTH.LOGIN}`

    async register (data: IRegisterData): Promise<IAuthPromise> {
        const response = await axiosClient.post(this.REGISTER_URL, data)
        return response.data
    }

    async login (data: ILoginData): Promise<IAuthPromise> {
        const response = await axiosClient.post(this.LOGIN_URL, data)
        return response.data
    }

}

export const authService = new AuthService()