
interface IInfoField {
    label: string;
    title?: string;
}

export default function InfoField (props: IInfoField) {

    const {
        label,
        title
    } = props

    return (
        <div
            className="flex items-center gap-x-[5px]"
        >
            <label
                className="text-background-secondary text-lg font-semibold"
                htmlFor="username"
            >
                {label}:
            </label>
            <h3 className="font-medium text-base">
                {
                    title ? title : `Add ${label}`
                }
            </h3>
        </div>
    )
}