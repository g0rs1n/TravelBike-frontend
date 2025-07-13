

interface IRoutesLayoutProps {
    children: React.ReactNode
}

export default function RoutesLayout (
    props: Readonly<IRoutesLayoutProps>
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