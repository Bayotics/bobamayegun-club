import { Banner } from "@/components/Banner"
import { Content } from "@/components/news/Content";

export default function News () {
    return (
        <div className = 'news-main'>
            <Banner
             bannerBgName={'news-page-banner'}
             textHeader={'News & Evens'}
             subText={'Our recent and upcoming activities '}
             />
            <Content />
        </div>
    )
}