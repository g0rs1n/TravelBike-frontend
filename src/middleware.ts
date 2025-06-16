
import { 
    NextResponse, 
    NextRequest 
} from "next/server";
import { PAGE_ROUTES } from "./lib/config/pages-url.config";
import { API_ROUTES } from "./lib/constants/apiRoutes.constants";

const BASE_SERVER_URL = process.env.NEXT_PUBLIC_SERVER_URL
const VERIFY_AUTH_URL = `${BASE_SERVER_URL}${API_ROUTES.AUTH.VERIFY}`

const PUBLIC_PATHS = [PAGE_ROUTES.AUTH];
const PRIVATE_PATHS = [PAGE_ROUTES.HOME, "/"];

const verifyAuth = async (token: string) => {
    try {

        const response = await fetch(VERIFY_AUTH_URL, {
            method: "GET",
            headers: {
                Cookie: `access_token=${token}`
            }
        })

        return response.ok
        
    } catch (error) {
        console.error("Error: middlware auth-verify", error)
        return false
    }
}

export default async function middleware (request: NextRequest) {

    const token = request.cookies.get("access_token")?.value
    const pathname = request.nextUrl.pathname

    const isPublic = PUBLIC_PATHS.includes(pathname);
    const isPrivate = PRIVATE_PATHS.includes(pathname);

    if (isPrivate && !token) {
        return NextResponse.redirect(new URL(PAGE_ROUTES.AUTH, request.url));
    }

    if (token) {
        const isValid = await verifyAuth(token);

        if (!isValid && isPrivate) {
            return NextResponse.redirect(new URL(PAGE_ROUTES.AUTH, request.url));
        }

        if (isValid) {
            if (pathname === "/") {
                return NextResponse.redirect(new URL(PAGE_ROUTES.HOME, request.url));
            }
            if (isPublic && pathname !== PAGE_ROUTES.HOME) {
                return NextResponse.redirect(new URL(PAGE_ROUTES.HOME, request.url));
            }
        }
    }

  return NextResponse.next();

}

export const config = {
    matcher: [
        "/",
        PAGE_ROUTES.AUTH,
        PAGE_ROUTES.HOME
    ],
}