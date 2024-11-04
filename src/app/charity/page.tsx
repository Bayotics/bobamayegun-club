
import { Banner } from "@/components/Banner"
import { Intro } from "@/components/charity/Intro"
import { Info } from "@/components/charity/Info"
import { Content } from "@/components/charity/Content"

export default function Charity() {
    return(
        <div className="charity-main">
            <Banner
             bannerBgName={'charity-page-banner'}
             textHeader={'Help for the less priviledged'}
             subText={'We prioritize giving back to the society and helping people in need'}
             />
            <Intro />
            <Info />
            <Content />
        </div>
    )
}