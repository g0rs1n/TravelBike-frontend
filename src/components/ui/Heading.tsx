
interface IHeadingProps {
    title: string;
}

export default function Heading ({title}: IHeadingProps) {
    return (
        <div className="w-full">
            <h1 className="text-2xl font-bold">{title}</h1>
            <div className="w-full h-0.5 my-2 bg-black"/>
        </div>
    )
}