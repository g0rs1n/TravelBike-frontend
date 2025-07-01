
import dynamic from "next/dynamic"
import { useQuery } from "@tanstack/react-query"
import { IUserData } from "@/lib/types/types"
import { userService } from "@/lib/services/user/user.service"
import GlobalError from "@/app/error"

const LogoWrapper = dynamic(() => import('../user_profile/logo/LogoWrapper'), {
    ssr: false
})
const InformationWrapper = dynamic(() => import('../user_profile/information/InformationWrapper'), {
    ssr: false
})

export default function ProfileWrapper () {

    const {
        data,
        isLoading,
        error
    } = useQuery<IUserData>({
        queryKey: ["userData"],
        queryFn: () => userService.getUser(),
    })

    if (error || !data) return <GlobalError error={error}/>

    return (
        <>
            <div
                className="flex gap-x-[45px] bg-[#fff] px-2 py-2 rounded-xl shadow-xl"
            >
                <LogoWrapper
                    logo={data.avatarPath}
                />
                <InformationWrapper
                    data={data}
                />
            </div>
        </>
    )
}