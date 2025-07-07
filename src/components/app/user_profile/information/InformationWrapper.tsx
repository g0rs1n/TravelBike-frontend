
import { useState } from "react"
import { 
    IUserData,
    IUpdateUserResponse,
    TRegisterOptions
} from "@/lib/types/types"
import InfoField from "./info_field/InfoField"
import Button from "@/components/ui/buttons/Button"
import {
    SubmitHandler,
    useForm 
} from "react-hook-form"
import { toast } from "sonner"
import { userValidationRules } from "@/lib/validation/userValidation"

interface IInformationWrapper {
    user: IUserData;
    mutateAsync: (data: Partial<IUserData>) => Promise<IUpdateUserResponse>;
}

interface IFields {
    id: keyof IUserData;
    label: string;
    title?: string;
    validationRules: TRegisterOptions<IUserData>;
}

export default function InformationWrapper (props: IInformationWrapper) {

    const {
        user,
        mutateAsync
    } = props

    const [isEditMode, setIsEditMode] = useState(false)

    const {
        register,
        handleSubmit,
        formState: {errors, isDirty}
    } = useForm<IUserData>({
        mode: "onChange",
        defaultValues: {
            username: user.username,
            email: user.email,
            firstName: user.firstName,
            lastName: user.lastName,
            phone: user.phone,
        }
    })

    const onSubmit: SubmitHandler<IUserData> = async (data: IUserData) => {

        if (!isDirty) {
            setIsEditMode(!isEditMode)
            toast.error("No changes to save")
            return
        }

        toast.promise(mutateAsync(data), {
            loading: "Saving...",
            success: (res) => {
                setIsEditMode(!isEditMode)
                return res.message
            },
            error: (error) => {
                const message = error.response?.data?.message || error.message || "Unknown error";
                return message;
            }
        }) 
    }

    const handleOnClickButton = async () => {
        if (isEditMode) {
            await handleSubmit(onSubmit)()
        } else {
            setIsEditMode(!isEditMode)
        }
    }

    const fields: IFields[] = [
        {id: "username", label: "Username", title: user.username, 
            validationRules: userValidationRules.username
        },
        {id: "email", label: "Email", title: user.email, 
            validationRules: userValidationRules.email
        },
        {id: "firstName", label: "First Name", title: user.firstName, 
            validationRules: userValidationRules.firstName
        },
        {id: "lastName", label: "Last Name", title: user.lastName, 
            validationRules: userValidationRules.lastName
        },
        {id: "phone", label: "Phone", title: user.phone, 
            validationRules: userValidationRules.phone
        },
    ]

    return (
        <>
            <div>
                <div 
                    className="flex px-[10px] py-[10px] border-2 border-background-secondary 
                    rounded-md py-1 gap-x-[20px] flex-1"
                >
                    <div
                        className="flex  flex-1 items-start flex-col"
                    >
                        <div
                            className="flex flex-col gap-y-[5px]"
                        >
                            {
                                fields.map((data) => {
                                    return (
                                        <InfoField
                                            key={data.id}
                                            id={data.id}
                                            label={data.label}
                                            title={data.title}
                                            register={register}
                                            isEditMode={isEditMode}
                                            validationRules={data.validationRules}
                                            error={errors[data.id]}
                                        />
                                    )
                                })
                            }
                        </div>
                    </div>
                    <div>
                        <Button
                            handleClick={handleOnClickButton}
                            title={isEditMode ? "Save" : "Edit"}
                        />
                    </div>
                </div>
            </div>
        </>
    )
}
