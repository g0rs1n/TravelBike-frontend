import ClipLoader from "react-spinners/ClipLoader"

export default function Loader () {
    return (
        <div
            className="flex justify-center items-center flex-column h-full"
        >
            <ClipLoader 
                size={40}
            />
        </div>
    )
}