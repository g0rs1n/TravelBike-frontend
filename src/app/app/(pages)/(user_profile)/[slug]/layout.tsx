
import { Metadata } from "next"

interface IProfileLayoutProps {
    children: React.ReactNode
}

interface IGenerateMetadataProps {
    params: {
        slug: string
    }
}

export async function generateMetadata (
    {params}: IGenerateMetadataProps
): Promise<Metadata> {
    const {slug} = await params
    return {
        title: `${slug}`
    }
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