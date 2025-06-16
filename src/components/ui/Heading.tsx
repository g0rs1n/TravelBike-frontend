
interface IHeadingProps {
    title: string;
}

export default function Heading ({title}: IHeadingProps) {
    return (
        <h1 className="text-2xl font-bold">{title}</h1>
    )
}