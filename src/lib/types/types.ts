import { 
    UseFormRegister, 
    RegisterOptions, 
    FieldErrorsImpl 
} from "react-hook-form";

export interface IUserData {
    id: string;
    email: string;
    username: string;
    firstName?: string;
    lastName?: string;
    password: string;
    phone?: string;
    avatarPath: string;
}

export interface IAuthForm {
    username?: string; 
    email: string;
    password: string;
}

export interface ILoginData {
    email: string;
    password: string;
}

export interface IRegisterData extends ILoginData {
    username: string;
}
 
export type TRegisterAuthForm = UseFormRegister<IAuthForm>
export type TAuthFormErrors = FieldErrorsImpl<IRegisterData>

export type TNameAuthFieldProps = keyof IAuthForm

export type TValidationRules = RegisterOptions<IAuthForm, TNameAuthFieldProps>;