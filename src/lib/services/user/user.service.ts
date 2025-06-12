import { axiosClient } from "@/lib/api/api";
import { catchError } from "@/lib/api/error";
import { API_ROUTES } from "@/lib/constants/apiRoutes.constants";
import { IUserData } from "@/lib/types/types";

class UserService {
    
    private readonly BASE_URL = `${API_ROUTES.USER.GET}`

    async getUser () {
        try {
            const response = await axiosClient.get<IUserData>(this.BASE_URL)
            return response.data
        } catch (error) {
            catchError(error, "Failed to fetch user")
        }
    }
}

export const userService = new UserService()