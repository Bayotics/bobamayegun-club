
'use client'

import Image from "next/image";
import aboutPix from '@/images/why-us-ii.jpeg'
import AnimatedBtn from "./AnimatedBtnForAbout";
import { CiCalendar } from "react-icons/ci";
import { GoPerson } from "react-icons/go";
import { PiCheckCircleThin } from "react-icons/pi";
import { CiFaceSmile } from "react-icons/ci";
import { Slide, Zoom, Fade } from "react-awesome-reveal";
import Reveal from "react-awesome-reveal";
import { keyframes } from "@emotion/react";


export function AboutUs () {
    const customAnimation = keyframes
        `from {
            opacity: 0;
            transform: translate3d(-200px, -10px, 0);
        }

        to {
            opacity: 1;
            transform: translate3d(0, 0, 0);
        }
    `;
    return (
        <div className = 'about-sec mt-20'>
           <div className="bgGridWrapper">
            <div className="about-sec-home px-20 py-16">
                <Slide direction = 'up' duration={2000} triggerOnce>
                    <h1 className="text-white font-semibold text-4xl text-center">
                        Unity Through Culture,<br/> Strength Through Community
                    </h1>
                </Slide>
                <div className="about-sec-home-contents  mt-20">
                    <div className="blurry-bg flex gap-8 justify-between">
                        <div className="ash-content-right w-[40%]  ">
                            <Reveal keyframes={customAnimation} triggerOnce>
                                <div className="ash-content-img">
                                    <Image src= {aboutPix} alt="about us"
                                    className="rounded-xl w-full h-[450px]"/>
                                </div>    
                            </Reveal>;
                            {/* <Fade direction = 'left' duration = {2000}>
                                
                            </Fade> */}
                        </div>
                        <div className="ash-content-left w-[60%] px-12 bg-[#26232c] rounded-xl">
                            <div className="ash-cont-left-texts mt-10">
                                <Fade direction = 'up' cascade triggerOnce>
                                    <h2 className="text-white text-md font-normal">About Us</h2>
                                    <h1 className="text-3xl font-semibold text-white">
                                        Egbe Bobamayegun Okunrin Akile Ijebu
                                    </h1>
                                </Fade>
                                <Zoom triggerOnce>
                                    <p className="text-gray-300 mt-10">
                                        we are a society 
                                        dedicated to preserving, promoting, and celebrating the rich 
                                        heritage of the Ijebu people. Our mission is to foster unity, 
                                        cultural pride, and community empowerment 
                                        through the preservation of traditions, language, 
                                        and values. We provide a platform for cultural exchange, 
                                        education, and mentorship, enabling members to connect with their 
                                        roots while contributing to the development of the larger society. 
                                    </p>
                                    <div className='join-us-promo-btn mt-3 text-black'>
                                        <AnimatedBtn text={'Learn More →'}
                                        style={'bg-white px-8 hover:bg-gray-600 hover:text-white py-4 rounded-lg text-gray-900 mt-12 w-[40%] text-center'} />
                                    </div>
                                </Zoom>
                                
                            </div>
                        </div>
                    </div>
                    <div className="home-about-buttom flex mt-20 justify-between gap-8">
                        <div className="hab-i  w-1/4">
                            <Zoom triggerOnce>
                                <div className="bg-[#26232c] py-6 px-10  rounded-xl text-center w-full">
                                    <div className="  flex justify-center">
                                        <CiCalendar className="text-blue-500 font-thin text-5xl"/>
                                    </div>
                                    <h1 className="text-4xl mt-12 font-medium text-gray-200">10+</h1>
                                    <p className="mt-4 text-gray-400 text-lg">Years of Existence</p>
                                </div>
                            </Zoom>
                        </div>
                        <div className="hab-i  w-1/4">
                            <Zoom delay={200} triggerOnce>
                                <div className="bg-[#26232c] py-6 px-10  rounded-xl text-center w-full">
                                    <div className="  flex justify-center">
                                        <GoPerson className="text-pink-400 font-thin text-5xl"/>
                                    </div>
                                    <h1 className="text-4xl mt-12 font-medium text-gray-200">150+</h1>
                                    <p className="mt-4 text-gray-400 text-lg">Members</p>
                                </div>
                            </Zoom>
                        </div>
                        <div className="hab-i  w-1/4">
                            <Zoom delay={400} triggerOnce>
                                <div className="bg-[#26232c] py-6 px-10  rounded-xl text-center w-full">
                                    <div className="  flex justify-center">
                                        <PiCheckCircleThin className="text-green-400 font-thin text-5xl"/>
                                    </div>
                                    <h1 className="text-4xl mt-12 font-medium text-gray-200">80+</h1>
                                    <p className="mt-4 text-gray-400 text-lg">Projects Delivered</p>
                                </div>
                            </Zoom>
                        </div>
                        <div className="hab-i  w-1/4">
                            <Zoom delay={600} triggerOnce>
                                <div className="bg-[#26232c] py-6 px-10  rounded-xl text-center w-full">
                                    <div className="  flex justify-center">
                                        <CiFaceSmile className="text-orange-400 font-thin text-5xl"/>
                                    </div>
                                    <h1 className="text-4xl mt-12 font-medium text-gray-200">50+</h1>
                                    <p className="mt-4 text-gray-400 text-lg">Events Organised</p>
                                </div>
                            </Zoom>
                        </div>
                    </div>

                </div>
            </div>
           </div>
        </div>
    )
}