
import { 
    TRegisterAuthForm, 
    TNameAuthFieldProps,
    TValidationRules
} from "@/lib/types/types";

interface IFieldsProps {
    id: string;
    placeholder: string;
    type: string;
    name: TNameAuthFieldProps;
    value?: string;
    register?: TRegisterAuthForm;
    validationRules?: TValidationRules;
}

export default function Fields (props: IFieldsProps) {

    const {
        id,
        placeholder,
        type,
        name,
        register,
        validationRules
    } = props

    return (
        <input
            id={id}
            type={type}
            placeholder={placeholder}
            className="border-1 border-background-secondary rounded-sm px-[3px] py-[1px] focus:border-text"
            autoComplete="off"
            {
                ...(register && register(name, validationRules))
            }
        />
    )
}