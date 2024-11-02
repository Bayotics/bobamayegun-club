
import { Banner } from "@/components/charity/Banner"
import { Intro } from "@/components/charity/Intro"
import { Info } from "@/components/charity/Info"
import { Content } from "@/components/charity/Content"

export default function Charity() {
    return(
        <div className="charity-main">
            <Banner />
            <Intro />
            <Info />
            <Content />
        </div>
    )
}