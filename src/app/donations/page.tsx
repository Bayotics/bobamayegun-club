import { Banner } from "@/components/Banner"

export default function Donations () {
    return (
        <div className = 'donations-main'>
        <Banner
         bannerBgName={'donations-page-banner'}
         textHeader={'Support Our Cause'}
         subText={'Support Bobamayegun Okunrin Akile Ijebu by donating'}
         />
         <div className="donation-content px-32 py-40">
            <h1 className="text-7xl font-semibold text-center">
                Coming Soon...
            </h1>
         </div>
    </div>
    )
}