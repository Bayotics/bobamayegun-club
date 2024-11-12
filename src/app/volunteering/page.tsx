'use client'
import { Zoom } from "react-awesome-reveal";
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
            <Zoom duration = {5000} triggerOnce>
                <h1 className="text-7xl font-semibold text-center">
                    Coming Soon...
                </h1>
            </Zoom>
         </div>
    </div>
    )
}