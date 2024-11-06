import { Banner } from "@/components/Banner"
import Content from "@/components/membership/Content"

export default function Membership () {
    return (
        <div className = 'membership-main'>
            <Banner
                bannerBgName={'membership-page-banner'}
                textHeader={'Join Us'}
                subText={'Become a certified Bobamayegun Okunrin Akile Ijebu member'}
            />
            <div className="membership-content">
                <Content />
            </div>
        </div>
    )
}