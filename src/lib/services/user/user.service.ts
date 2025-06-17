import { axiosClient } from "@/lib/api/api";
import { catchError } from "@/lib/api/error";
import { API_ROUTES } from "@/lib/constants/apiRoutes.constants";
import { IUserData } from "@/lib/types/types";

export interface ILogOutPromise {
    success: boolean;
    message: string;
}

class UserService {
    
    private BASE_URL = API_ROUTES.USER.GET
    private LOGOUT_USER = API_ROUTES.USER.LOGOUT

    async getUser () {
        try {
            const response = await axiosClient.get<IUserData>(this.BASE_URL)
            return response.data
        } catch (error) {
            catchError(error, "Failed to fetch user")
        }
    }

    async logout () {
        try {
            const response = await axiosClient.post<ILogOutPromise>(this.LOGOUT_USER)
            return response.data
        } catch (error) {
            catchError(error, "Error: logout userService")
        }
    }

}

export const userService = new UserService()