import { Banner } from "@/components/Banner"
import ContactScreen from "@/components/membershipform/Content"

export default function Membership () {
    return (
        <div className = 'membership-main'>
            <div className = 'membersh-banner'>
                <Banner
                    bannerBgName={'membership-page-banner'}
                    textHeader={'DECLARATION OF INTEREST'}
                    subText={''}
                />
            </div>
            <div className="membership-content">
                <ContactScreen />
            </div>
        </div>
    )
}