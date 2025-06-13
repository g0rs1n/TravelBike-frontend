
interface IAuthLayoutProps {
    children: React.ReactNode
}

export default function AppLayout (
    props : Readonly<IAuthLayoutProps>
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