
import { RegisterOptions } from "react-hook-form";
import { IAuthForm } from "@/lib/types/types";

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
const PASSWORD_REGEX = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d@$!%*?&]{8,32}$/

export const authValidationRules: Record<keyof IAuthForm, RegisterOptions<IAuthForm>> = {
    username: {
        required: "Username is required",
        minLength: { value: 3, message: "Username must be at least 3 characters" },
        maxLength: { value: 20, message: "Username must be at most 20 characters" },
    },
    email: {
        required: "Email is required",
        maxLength: { value: 254, message: "Email must be at most 254 characters",},
        pattern: {
            value: EMAIL_REGEX,
            message: "Invalid email address",
        },
    },
    password: {
        required: "Password is required",
        minLength: { value: 8, message: "Password must be at least 8 characters"},
        maxLength: { value: 32,message: "Password must be at most 32 characters"},
        pattern: {
            value: PASSWORD_REGEX,
            message: "Password must contain at least one letter and one number",
        },
    }
}