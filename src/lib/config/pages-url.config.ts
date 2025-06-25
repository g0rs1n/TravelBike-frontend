
class ROUTES {

    private readonly root = '/app'

    HOME = this.root
    AUTH = '/auth'
    APP = {
        GROUPS: `${this.root}/groups`
    }
    
}

export const PAGE_ROUTES = new ROUTES()