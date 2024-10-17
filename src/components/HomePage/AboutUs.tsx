
'use client'

import Image from "next/image"
import aboutPic from '@/images/home-about-img.png'

export function AboutUs () {

    return (
        <div className = 'about-sec mt-20'>
           <div className="bgGridWrapper">
            <div className="about-sec-home px-20 py-16">
                <div className="about-sec-home-contents border rounded-3xl flex 
                    justify-between border-yellow-300 m-auto bg-black">
                    <div className="ash-content-left border w-1/2"></div>
                    <div className="ash-content-right border w-1/2">
                        <div className="ash-content-img p-10">
                            <Image src= {aboutPic} alt="about us" className="rounded-3xl"/>
                        </div>
                    </div>

                </div>
            </div>
           </div>
        </div>
    )
}