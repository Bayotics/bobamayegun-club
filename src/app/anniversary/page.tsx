import { Banner } from "@/components/Banner"
import { AnniversaryContent } from "@/components/anniversary/Content"

export default function Anniversary () {
    return (
        <div className = 'anniversary-main'>
            <div className = 'anniversary-banner'>
                <Banner
                    bannerBgName={'anniversary-page-banner'}
                    textHeader={'Bobamayegun is Turning 10!'}
                    subText={'Celebrating a Decade of Tradition, Passion, and Togetherness. Join Us for a Grand Celebration!'}
                />
            </div>
            <div className="anniversary-content">
                <AnniversaryContent />
            </div>
        </div>
    )
}