
import { useState } from "react"
import { IUserData } from "@/lib/types/types"
import InfoField from "./info_field/InfoField"
import Button from "@/components/ui/buttons/Button"

interface IInformationWrapper {
    data: IUserData
}

export default function InformationWrapper (props: IInformationWrapper) {

    const {
        data
    } = props

    const [isEditMode, setIsEditMode] = useState(false)

    const handleOnClickButton = () => setIsEditMode(!isEditMode)

    const fields = [
        {label: "Username", title: data.username},
        {label: "Email", title: data.email},
        {label: "First Name", title: data.firstName},
        {label: "Last Name", title: data.lastName},
        {label: "Phone", title: data.phone},
    ]

    return (
        <>
            <div 
                className="flex py-1 gap-x-[20px] flex-1"
            >
                <div
                    className="flex flex-1 px-[5px] items-start flex-col"
                >
                    <div
                        className="flex px-[5px] flex-col gap-y-[5px]"
                    >
                        {
                            fields.map((data) => {
                                return (
                                    <InfoField
                                        key={data.label}
                                        label={data.label}
                                        title={data.title}
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
        </>
    )
}
