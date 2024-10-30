import { Intro } from "@/components/aboutUsPage/Intro";
import { Banner } from "@/components/aboutUsPage/Banner";
import { History } from "@/components/aboutUsPage/history";

export default function AboutUs () {
    return (
    <div className="aboutus-page-main">
        <Banner />
        <Intro />
        <History />
    </div>
    )
}