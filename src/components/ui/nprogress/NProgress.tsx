
import NextTopLoader from 'nextjs-toploader'

export default function NProgress () {
    return <NextTopLoader
        color="#eeac33"
        height={3}
        initialPosition={0.08}
        showSpinner={false}
    />
}