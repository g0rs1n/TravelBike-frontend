
import { 
    IUserData,
    TRegisterOptions,
    TUseFormRegister,
    TFieldError
} from "@/lib/types/types";
import Fields from "@/components/ui/fields/Fields";

interface IInfoField {
    id: string;
    label: string;
    title?: string;
    isEditMode: boolean;
    register: TUseFormRegister<IUserData>;
    validationRules: TRegisterOptions<IUserData>;
    error?: TFieldError;
}

export default function InfoField (props: IInfoField) {

    const {
        id,
        label,
        title,
        isEditMode,
        register,
        validationRules,
        error
    } = props

    return (
        <div>
            <div
                className="flex items-end gap-x-[5px]"
            >
                <label
                    className="text-background-secondary text-md font-semibold"
                    htmlFor={id}
                >
                    {label}:
                </label>
                {
                    isEditMode ? 
                    <Fields<IUserData>
                        id={id}
                        type="text"
                        name={id as keyof IUserData}
                        register={register}
                        validationRules={validationRules}
                    />
                    :
                    <h3 className="font-medium text-md">
                        {
                            title ? title : `Add ${label}`
                        }
                    </h3>
                }
            </div>
            <div>
                {error && (
                    <p className="text-red-500 font-bold text-sm mt-1">
                        {error.message}
                    </p>
                )}
            </div>
        </div>
        
    )
}