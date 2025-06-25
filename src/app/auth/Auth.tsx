"use client"

import {SubmitHandler, useForm} from 'react-hook-form'
import {useMutation} from '@tanstack/react-query'
import Heading from '@/components/ui/Heading'
import Fields from '@/components/ui/fields/Fields'
import Button from '@/components/ui/buttons/Button'
import Line from '@/components/ui/line/Line'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { 
    IAuthForm, 
    ILoginData, 
    IRegisterData, 
    TAuthFormErrors 
} from '@/lib/types/types'
import {toast} from 'sonner'
import { authService } from '@/lib/services/auth/auth.service'
import { catchError } from '@/lib/api/error'
import { sanitizeService } from '@/lib/services/sanitize/sanitize.service'
import { PAGE_ROUTES } from '@/lib/config/pages-url.config'
import Loader from '@/components/ui/loader/Loader'

export default function Auth () {

    const [isLoginForm, setIsLoginForm] = useState(false)
    const [isRedirecting, setIsRedirecting] = useState(false)
    const {replace} = useRouter()

    const {
        register, 
        handleSubmit, 
        reset, 
        formState: {errors, isValid}
    } = useForm<IAuthForm>({
        mode: "onSubmit"
    })
    const formErrors : TAuthFormErrors = errors

    const {
        mutateAsync
    } = useMutation({
        mutationFn: (data: ILoginData | IRegisterData) => 
            isLoginForm ? 
            authService.login(data as ILoginData) :
            authService.register(data as IRegisterData),
        onSuccess: () => {
            setIsRedirecting(true)
            replace(PAGE_ROUTES.HOME)
            reset()
        },
        onError: (error) => {
            catchError(error, "Error: api auth form mutation")
        }
    })

    const onSubmit: SubmitHandler<IAuthForm> = async (data) => {
        if (isValid) {
            const newSanitizeData = sanitizeService.sanitizeObject(data)
            toast.promise(mutateAsync(newSanitizeData), {
                loading: isLoginForm ? "Logging in..." : "Registering...",
                success: (res) => res.message,
                error: (error) => error.message
            })
        }
    }

    const inputErrors = {
        username: {
            message: formErrors.username?.message || null,
        },
        email: {
            message: formErrors.email?.message || null,
        },
        password: {
            message: formErrors.password?.message || null,
        },
    }

    if (isRedirecting) {
        return <Loader/>
    }

    return (
        <>
            <div className='flex h-full'>
                <form
                    className='
                        w-sm m-auto p-5 rounded-xl border-2 border-background-secondary shadow-xl 
                        opacity-0 animate-[fadeIn_0.5s_ease-in-out_forwards]
                    '
                    onSubmit={handleSubmit(onSubmit)}
                >
                    <div className='flex flex-col items-center w-full'>
                        <Heading title={isLoginForm ? "Sign in to your account" : "Create an account"}/>
                        <Line/>
                    </div>
                    {
                        !isLoginForm &&
                        <div
                            className='flex flex-col gap-1 mb-1'
                        >
                            <label
                                htmlFor="username"
                                className='font-bold text-lg'
                            >
                                Username
                            </label>
                            <Fields
                                id="username"
                                placeholder='Enter your username'
                                type="text"
                                name="username"
                                register={register}
                                validationRules={{
                                    required: "Username is required",
                                    minLength: { value: 3, message: "Username must be at least 3 characters" },
                                    maxLength: { value: 20, message: "Username must be at most 20 characters" },
                                }}
                            />
                            {inputErrors.username.message && (
                                <p className="font-bold text-red-500 text-sm mt-[1px]">
                                    {inputErrors.username.message}
                                </p>
                            )}
                        </div>
                    }
                    <div
                        className='flex flex-col gap-1 mb-1'
                    >
                        <label
                            htmlFor="email"
                            className='font-bold text-lg'
                        >
                            Email
                        </label>
                        <Fields
                            id="email"
                            placeholder='Enter your email'
                            type="email"
                            name="email"
                            register={register}
                            validationRules={{
                                required: "Email is required",
                                maxLength: { value: 254, message: "Email must be at most 254 characters",},
                                pattern: {
                                    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                                    message: "Invalid email address",
                                },
                            }}
                        />
                        {inputErrors.email.message && (
                            <p className="font-bold text-red-500 text-sm mt-[1px]">
                                {inputErrors.email.message}
                            </p>
                        )} 
                    </div>
                    <div
                        className='flex flex-col gap-1 mb-1'
                    >
                        <label
                            htmlFor="password"
                            className='font-bold text-lg'
                        >
                            Password
                        </label>
                        <Fields
                            id="password"
                            placeholder='Enter your password'
                            type="password"
                            name="password"
                            register={register}
                            validationRules={{
                                required: "Password is required",
                                minLength: { value: 8, message: "Password must be at least 8 characters"},
                                maxLength: { value: 32,message: "Password must be at most 32 characters"},
                                pattern: {
                                    value: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d@$!%*?&]{8,32}$/,
                                    message: "Password must contain at least one letter and one number",
                                },
                            }}
                        />
                        {inputErrors.password.message && (
                            <p className="font-bold text-red-500 text-sm mt-[1px]">
                                {inputErrors.password.message}
                            </p>
                        )} 
                    </div>
                    <div
                        className='flex flex-col items-center gap-1'
                    >
                        <Button
                            title={isLoginForm ? "Login" : "Sign Up"}
                        /> 
                        <p
                            className='flex gap-1'
                        >
                            {isLoginForm ? "New to TravelBike?" : "Already have an account?"}
                            <span
                                className='cursor-pointer hover:text-blue-700 hover:underline'
                                onClick={() => {
                                    setIsLoginForm(!isLoginForm)
                                    reset()
                                }}
                            >
                                {isLoginForm ? "Create an account" : "Sign in"}
                            </span>
                        </p>
                    </div>
                </form>
            </div>
        </>
    )
}