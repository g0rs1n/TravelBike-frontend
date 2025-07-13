
class ROUTES {

    private readonly root = '/app'

    HOME = this.root
    AUTH = '/auth'
    APP = {
        PROFILE: `${this.root}/profile`,
        GROUPS: `${this.root}/groups`
    }
    
}

export const PAGE_ROUTES = new ROUTES()