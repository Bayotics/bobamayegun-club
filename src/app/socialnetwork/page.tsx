import { Banner } from "@/components/Banner"
import { Content } from "@/components/socialNetwork/Content"

export default function SocialNetwork () {
    return (
        <div className="social-network-main">
            <Banner
             bannerBgName={'socialnetwork-page-banner'}
             textHeader={'Social Activities'}
             subText={'Connect with like-minded peers at Bobamayegun Okunrin Akile Ijebu'}
             />
            <Content/>
       </div>
    )
}