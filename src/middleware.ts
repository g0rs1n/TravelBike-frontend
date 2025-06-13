
import { 
    NextResponse, 
    NextRequest 
} from "next/server";
import { PAGE_ROUTES } from "./lib/config/pages-url.config";
import { API_ROUTES } from "./lib/constants/apiRoutes.constants";

const BASE_SERVER_URL = process.env.NEXT_PUBLIC_SERVER_URL
const VERIFY_AUTH_URL = `${BASE_SERVER_URL}/${API_ROUTES.AUTH.VERIFY}`

export default async function middleware (request: NextRequest) {

    const token = request.cookies.get("access_token")?.value

    if (request.nextUrl.pathname.startsWith("/")) {
        if (!token) return NextResponse.redirect(new URL(PAGE_ROUTES.AUTH, request.url))
        try {
            
            const response = await fetch(VERIFY_AUTH_URL, {
                method: "GET",
                headers: {
                    Cookie: `access_token=${token}`
                }
            })

            if (response.ok) {
                return NextResponse.redirect(new URL(PAGE_ROUTES.HOME, request.url))
            } else {
                return NextResponse.redirect(new URL(PAGE_ROUTES.AUTH, request.url))
            }

        } catch (error) {
            console.error("Error: middlware auth-verify", error)
            return NextResponse.redirect(new URL(PAGE_ROUTES.AUTH, request.url))
        }
    }

}

export const config = {
    matcher: ["/"],
}