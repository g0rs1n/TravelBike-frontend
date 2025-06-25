
interface IProfileLayoutProps {
    children: React.ReactNode
}

export default function ProfileLayout (
    props: Readonly<IProfileLayoutProps>
) {

    const {
        children
    } = props

    return (
        <>
            {children}
        </>
    )

}