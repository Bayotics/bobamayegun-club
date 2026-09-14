import { Banner } from "@/components/Banner"
import { AnniversaryContent } from "@/components/anniversary/Content"

export default function Anniversary () {
    return (
        <div className = 'anniversary-main'>
            <div className = 'anniversary-banner'>
                <Banner
                    bannerBgName={'anniversary-page-banner'}
                    textHeader={'A Decade of Culture, Connection, and Celebration'}
                    subText={'Looking back on a remarkable chapter of Bobamayegun: a decade of tradition, friendship, and unforgettable memories.'}
                />
            </div>
            <div className="anniversary-content">
                <AnniversaryContent />
            </div>
        </div>
    )
}