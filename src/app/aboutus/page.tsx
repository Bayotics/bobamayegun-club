import { Intro } from "@/components/aboutUsPage/Intro";
import { Banner } from "@/components/Banner"
import { History } from "@/components/aboutUsPage/History";
import { Team } from "@/components/aboutUsPage/Team";

export default function AboutUs () {
    return (
    <div className="aboutus-page-main">
        <Banner
        bannerBgName={'aboutus-page-banner'}
        textHeader={'Who We Are'}
        subText={'We are proud custodians of the vibrant and timeless Ijebu culture. '}
        />
        <Intro />
        <History />
        <Team />
    </div>
    )
}