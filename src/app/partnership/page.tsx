import { Banner } from "@/components/Banner"
import Content from "@/components/partnership/Content"

export default function Partnership () {
    return (
        <div className = 'partnership-main'>
            <Banner
             bannerBgName={'partnership-page-banner'}
             textHeader={'Become a Partner'}
             subText={'Explore partnership opportunities at our society'}
             />
            <Content />
        </div>
    )
}