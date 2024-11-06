import { Banner } from "@/components/Banner"

export default function Volunteering () {
    return (
        <div className = 'volunteering-main'>
        <Banner
         bannerBgName={'volunteering-page-banner'}
         textHeader={'Volunteering'}
         subText={'Discover our charitable initiatives and volunteer efforts'}
         />
         <div className="volunteering-content px-32 py-40">
            <h1 className="text-7xl font-semibold text-center">
                Coming Soon...
            </h1>
         </div>
    </div>
    )
}