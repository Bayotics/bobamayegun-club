import { Banner } from "@/components/Banner"
import ContactScreen from "@/components/membershipform/Content"

export default function Membership () {
    return (
        <div className = 'membership-main'>
            <Banner
                bannerBgName={'membership-page-banner'}
                textHeader={'DECLARATION OF INTEREST'}
                subText={''}
            />
            <div className="membership-content">
                <ContactScreen />
            </div>
        </div>
    )
}