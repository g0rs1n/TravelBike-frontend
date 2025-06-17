
class ROUTES {
    
    private BASE_AUTH_URL = '/auth'
    private BASE_USER_URL = '/user'

    AUTH = {
        REGISTER: `${this.BASE_AUTH_URL}/register`,
        LOGIN: `${this.BASE_AUTH_URL}/login`,
        VERIFY: `${this.BASE_AUTH_URL}/verify`,
    }

    USER = {
        GET: this.BASE_USER_URL,
        LOGOUT: `${this.BASE_USER_URL}/logout`,
    }

}

export const API_ROUTES = new ROUTES()