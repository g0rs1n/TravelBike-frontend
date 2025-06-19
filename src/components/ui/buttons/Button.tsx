
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
                    py-[6px] px-[10px] border-2 border-background-secondary rounded-lg mt-[10px] cursor-pointer
                    bg-background-secondary text-white font-2xl
                    hover:bg-transparent hover:text-black hover:border-2
                    transition-colors duration-300
                "
            >
                {title}
            </button>
        </>
    )
}