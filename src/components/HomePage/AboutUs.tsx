
'use client'

import Image from "next/image"
import aboutPic from '@/images/home-about-img.png'

export function AboutUs () {

    return (
        <div className = 'about-sec mt-20'>
           <div className="bgGridWrapper">
            <div className="about-sec-home px-20 py-16">
                <h1 className="text-white font-semibold text-4xl text-center">
                    Unity Through Culture, Strength Through Community
                </h1>
                <div className="about-sec-home-contents border rounded-3xl flex 
                    justify-between border-purple-300 m-auto bg-gray-950 mt-20">
                    <div className="blurry-bg flex justify-between">
                        <div className="ash-content-left w-1/2 px-12">
                            <div className="ash-cont-left-texts mt-64">
                                <h2 className="text-white text-md font-normal">About Us</h2>
                                <h1 className="text-3xl font-semibold text-white">
                                    Egbe Bobamayegun Okunrin Akile Ijebu
                                </h1>
                                <p className="text-white mt-4">
                                    we are a society 
                                    dedicated to preserving, promoting, and celebrating the rich 
                                    heritage of the Ijebu people. Our mission is to foster unity, 
                                    cultural pride, and community empowerment 
                                    through the preservation of traditions, language, 
                                    and values. We provide a platform for cultural exchange, 
                                    education, and mentorship, enabling members to connect with their 
                                    roots while contributing to the development of the larger society. 
                                    At Egbe Bobamayegun, we honor our past, strengthen our present, 
                                    and build a future where our culture thrives in harmony with modernity.
                                </p>
                            </div>
                        </div>
                        <div className="ash-content-right w-1/2">
                            <div className="ash-content-img p-10">
                                <Image src= {aboutPic} alt="about us" className="rounded-3xl"/>
                            </div>
                        </div>
                    </div>
                    
                   

                </div>
            </div>
           </div>
        </div>
    )
}