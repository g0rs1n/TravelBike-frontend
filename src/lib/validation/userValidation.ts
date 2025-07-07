
import { RegisterOptions } from "react-hook-form";
import { IUserData } from "@/lib/types/types";

const PHONE_REGEX = /^[+\d]?(?:[\d-.\s()]*)$/
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

export const userValidationRules: Record<keyof IUserData, RegisterOptions<IUserData>> = {
    id: {},
    username: {
        required: "Username is required",
        minLength: { value: 3, message: "Min 3 characters" },
        maxLength: { value: 20, message: "Max 20 characters" },
    },
    email: {
        required: "Email is required",
        maxLength: { value: 254, message: "Max 254 characters",},
        pattern: {
            value: EMAIL_REGEX,
            message: "Invalid email address",
        },
    },
    firstName: {
        validate: value => {
            if (!value) return true
            return value.length <= 50
            ? true
            : "Must be 50 characters or fewer"
        }
    },
    lastName: {
        validate: value => {
            if (!value) return true
            return value.length <= 60
            ? true
            : "Must be 60 characters or fewer"
        }
    },
    phone: {
        maxLength: {
            value: 20,
            message: "Max 20 characters"
        },
        pattern: {
            value: PHONE_REGEX,
            message: "Invalid phone number"
        }
    },
    avatarPath: {}
} 