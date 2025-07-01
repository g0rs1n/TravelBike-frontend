
interface IButtonProps {
    title: string;
    disabled?: boolean;
    handleClick?: () => void;
}

export default function Button (props : IButtonProps) {

    const {
        title,
        disabled,
        handleClick,
    } = props

    return (
        <>
            <button
                disabled={disabled}
                className="
                    py-[6px] px-[10px] border-2 border-background-secondary rounded-lg cursor-pointer
                    bg-background-secondary text-white font-2xl
                    hover:bg-transparent hover:text-black hover:border-2
                    transition-colors duration-300
                "
                onClick={handleClick}
            >
                {title}
            </button>
        </>
    )
}