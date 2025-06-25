
import { useContext } from 'react'
import { useMutation } from '@tanstack/react-query'
import { useRouter } from 'next/navigation'
import { LogOut } from 'lucide-react'
import { userService } from '@/lib/services/user/user.service'
import { toast } from 'sonner'
import { AxiosError } from 'axios'
import { ILogOutPromise } from '@/lib/services/user/user.service'
import { catchError } from '@/lib/api/error'
import { PAGE_ROUTES } from '@/lib/config/pages-url.config'
import { SocketContext } from '@/lib/api/socket/socket'

export default function Buttons () {

    const {replace} = useRouter()
    const socket = useContext(SocketContext)

    const {
        mutateAsync
    } = useMutation<
        ILogOutPromise,
        AxiosError
    >({
        mutationFn: () => userService.logout(),
        onSuccess: () => {
            socket.disconnect()
            replace(PAGE_ROUTES.AUTH)
        },
        onError: (error) => {
            catchError(error, "Error: useMutation Logout Button")
        }
    })

    const handleLogoutButton = async () => {
        toast.promise(mutateAsync(), {
            loading: "Logging out...",
            success: (res) => res.message,
            error: (error) => error.message
        })
    }
    
    return (
        <LogOut
            onClick={handleLogoutButton}
            className='cursor-pointer'
            size={29}
        />
    )
}