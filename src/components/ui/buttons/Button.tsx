
interface IButtonProps {
    title: string;
    disabled?: boolean;
}

export default function Button (props : IButtonProps) {

    const {
        title,
        disabled
    } = props

    return (
        <>
            <button
                disabled={disabled}
                className="
                    py-[6px] px-[10px] border-2 border-black rounded-lg mt-[10px] cursor-pointer
                    bg-white text-black 
                    hover:bg-black hover:text-white hover:border-white
                    transition-colors duration-300
                "
            >
                {title}
            </button>
        </>
    )
}