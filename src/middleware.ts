import { NextRequest, NextResponse } from "next/server";
import { userService } from "./lib/services/user/user.service";
import { PAGE_ROUTES } from "./lib/config/pages-url.config";

export async function middleware (request: NextRequest) {

    // if (request.nextUrl.pathname.startsWith("/")) {
    //     const userData = await userService.getUser()
    //     if (userData) {
    //         // Update UserStore
    //         return NextResponse.redirect(new URL(`${PAGE_ROUTES.HOME}`, request.url))
    //     } else {
    //         return NextResponse.redirect(new URL(`${PAGE_ROUTES.AUTH}`, request.url))
    //     }
    // }

}

export const config = {
    matcher: ["/"]
}