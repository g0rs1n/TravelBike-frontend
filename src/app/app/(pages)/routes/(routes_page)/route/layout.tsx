

interface IRoutePageProps {
    children: React.ReactNode
}

export default function RoutePage (
    props: Readonly<IRoutePageProps>
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