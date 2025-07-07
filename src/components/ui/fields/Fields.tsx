
import {
    TUseFormRegister,
    TPath
} from "@/lib/types/types";
import {
    RegisterOptions,
    FieldValues,
} from "react-hook-form";

export interface IFieldsProps<TForm extends FieldValues> {
    id: string;
    placeholder?: string;
    type: string;
    name: TPath<TForm>;
    register?: TUseFormRegister<TForm>;
    validationRules?: RegisterOptions<TForm,TPath<TForm>>;
    newStyles?: string; 
}

export default function Fields <TForm extends FieldValues> (props: IFieldsProps<TForm>) {

    const {
        id,
        placeholder,
        type,
        name,
        register,
        validationRules,
        newStyles,
    } = props

    return (
        <input
            id={id}
            type={type}
            placeholder={placeholder}
            className={
                `border-1 border-background-secondary rounded-sm px-[3px] py-[1px] focus:border-text ${newStyles || ""}
            `}
            autoComplete="off"
            {
                ...(register && register(name, validationRules))
            }
        />
    )
}