import { axiosClient } from "@/lib/api/api";
import { catchError } from "@/lib/api/error";
import { API_ROUTES } from "@/lib/constants/apiRoutes.constants";
import { 
    IUserData, 
    IUpdateUserResponse 
} from "@/lib/types/types";

export interface ILogOutPromise {
    success: boolean;
    message: string;
}

class UserService {
    
    private BASE_URL = API_ROUTES.USER.GET
    private LOGOUT_USER_URL = API_ROUTES.USER.LOGOUT
    private UPDATE_USER_URL = API_ROUTES.USER.PATCH

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
            const response = await axiosClient.post<ILogOutPromise>(this.LOGOUT_USER_URL)
            return response.data
        } catch (error) {
            catchError(error, "Error: logout userService")
        }
    }

    async updateUser (userData: Partial<IUserData>) {
        try {
            const response = await axiosClient.patch<IUpdateUserResponse>(
                this.UPDATE_USER_URL, 
                userData
            )
            return response.data
        } catch (error) {
            catchError(error, "Error: updateUserService")
        }
    }

}

export const userService = new UserService()