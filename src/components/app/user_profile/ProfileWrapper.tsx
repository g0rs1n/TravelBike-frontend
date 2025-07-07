
import dynamic from "next/dynamic"
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query"
import { IUserData, IUpdateUserResponse,  } from "@/lib/types/types"
import { AxiosError } from "axios"
import { catchError } from "@/lib/api/error"
import { userService } from "@/lib/services/user/user.service"
import GlobalError from "@/app/error"
import Loader from "@/components/ui/loader/Loader"

const LogoWrapper = dynamic(() => import('../user_profile/logo/LogoWrapper'))
const InformationWrapper = dynamic(() => import('../user_profile/information/InformationWrapper'))

export default function ProfileWrapper () {

    const {
        data,
        isLoading: QueryLoading,
        error
    } = useQuery<IUserData>({
        queryKey: ["userData"],
        queryFn: () => userService.getUser(),
    })

    const queryClient = useQueryClient()

    const {
        mutateAsync,
        isPending
    } = useMutation<
        IUpdateUserResponse,
        AxiosError,
        Partial<IUserData>
    >({
        mutationFn: (data) => userService.updateUser(data),
        onSuccess: (res) => {
            queryClient.setQueryData(["userData"], res.user)
        },
        onError: (error) => {
            catchError(error, "Error: mutation user_data_profile")
        },
    })

    if (QueryLoading || isPending) {
        return (
            <div className="flex items-center justify-center min-h-screen">
                <Loader/>
            </div>
        )
    }

    if (error || !data) return <GlobalError error={error}/>

    return (
        <>
            <div
                className="flex items-center gap-x-[45px] bg-[#fff] px-2 py-2 rounded-xl shadow-xl"
            >
                <LogoWrapper
                    logo={data.avatarPath}
                />
                <InformationWrapper
                    user={data}
                    mutateAsync={mutateAsync}
                />
            </div>
        </>
    )
}