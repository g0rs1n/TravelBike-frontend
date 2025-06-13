import { AxiosError } from "axios";

interface NestedMessage {
  message: string;
  error: string;
  statusCode: number;
}

interface ErrorResponse {
  message: string | NestedMessage;
  path: string;
  statusCode: number;
  timestamp: string;
}

export function catchError (
    error: unknown,
    customErrorMessage?: string
) {
    const axiosError = error as AxiosError<ErrorResponse>
    const responseError = axiosError.response?.data

    const messageError =
        (typeof responseError?.message === 'string'
            ? responseError.message
            : responseError?.message?.message) ||
        customErrorMessage ||
        "Something went wrong"
    
    throw new Error(messageError)
}