import { CiCalendar } from "react-icons/ci";
import { GoPerson } from "react-icons/go";
import { PiCheckCircleThin } from "react-icons/pi";
import { CiFaceSmile } from "react-icons/ci";
import aboutPix from '@/images/why-us-ii.jpeg';
import AnimatedBtn from "@/components/HomePage/AnimatedBtnForAbout";
import Image from "next/image";
import valueImgi from '@/images/faqv.jpg'
import valueImgii from '@/images/banner-img.jpg'
import valueImgiii from '@/images/banner-image-two.jpg'
import { Fade, Zoom, Slide } from "react-awesome-reveal";
import Link from "next/link";


export function Intro () {
    return(
        <div className = 'intro-main'>
            <div className="about-sec-home-contents  py-20 px-16">
                <div className="blurry-bg flex gap-8 justify-between">
                    <div className="ash-content-right w-[40%]  ">
                        <div className="ash-content-img">
                            <Image src= {aboutPix} alt="about us"
                                className="rounded-xl w-full h-[450px] object-cover"/>
                        </div>
                    </div>
                    <div className="ash-content-left w-[60%] px-12 bg-white rounded-xl">
                        <div className="ash-cont-left-texts mt-10">
                            <Slide direction = 'up' triggerOnce>
                                <h2 className="text-md font-normal">About Us</h2>
                                <h1 className="text-3xl font-semibold">
                                    Egbe Bobamayegun Okunrin Akile Ijebu
                                </h1>
                                <p className="text-gray-600 mt-10 text-lg">
                                    we are a society 
                                    dedicated to promoting, and celebrating the rich 
                                    heritage of the Ijebu people. Our mission is to foster unity, 
                                    cultural pride, and community empowerment 
                                    through the preservation of traditions, 
                                    and values. We provide a platform for cultural exchange, 
                                    education, and mentorship, enabling members to connect with their 
                                    roots while contributing to the development of the larger society. 
                                </p>
                                <div className='join-us-promo-btn mt-3 mb-3 text-black'>
                                    <Link href = '/membership'>
                                        <AnimatedBtn text={'Join Us →'}
                                        style={'bg-black text-white px-8 hover:bg-gray-900 hover:text-white py-4 rounded-lg mt-12 w-[40%] text-center jupb-btn'} />
                                    </Link>
                                </div>
                            </Slide>
                        </div>
                    </div>
                </div>
                <div className="home-about-buttom flex   mt-20 justify-between gap-8">
                    <div className="hab-i py-6 px-10 bg-white rounded-xl text-center w-1/4 shadow-gray-300 shadow-2xl">
                        <Zoom triggerOnce>
                            <div className="  flex justify-center">
                                <CiCalendar className="text-blue-500 font-thin text-5xl"/>
                            </div>
                            <h1 className="text-4xl mt-12 font-medium">10+</h1>
                            <p className="mt-4 text-gray-600 text-lg">Years of Existence</p>
                        </Zoom>
                    </div>
                    <div className="hab-i py-6 px-10 bg-white rounded-xl text-center w-1/4 shadow-gray-300 shadow-2xl">
                        <Zoom delay={200} triggerOnce>
                            <div className="  flex justify-center">
                                <GoPerson className="text-pink-400 font-thin text-5xl"/>
                            </div>
                            <h1 className="text-4xl mt-12 font-medium text-black">500+</h1>
                            <p className="mt-4 text-gray-600 text-lg">Members</p>
                        </Zoom>                            
                    </div>
                    <div className="hab-i py-6 px-10 bg-white rounded-xl text-center w-1/4 shadow-gray-300 shadow-2xl">
                        <Zoom delay = {400} triggerOnce>
                            <div className="  flex justify-center">
                                <PiCheckCircleThin className="text-green-400 font-thin text-5xl"/>
                            </div>
                            <h1 className="text-4xl mt-12 font-medium text-black">80+</h1>
                            <p className="mt-4 text-gray-600 text-lg">Projects Delivered</p>
                        </Zoom>
                    </div>
                    <div className="hab-i py-6 px-10 bg-white rounded-xl text-center w-1/4 shadow-gray-300 shadow-2xl">
                        <Zoom delay={600} triggerOnce>
                            <div className="  flex justify-center">
                                <CiFaceSmile className="text-orange-400 font-thin text-5xl"/>
                            </div>
                            <h1 className="text-4xl mt-12 font-medium text-black">50+</h1>
                            <p className="mt-4 text-gray-600 text-lg">Events Organised</p>
                        </Zoom>
                    </div>
                </div>
            </div>
            <div className="our-values py-28 px-16">
                <div className="values-grid flex gap-8">
                    <div className="values-left flex w-1/2 gap-6">
                        <div className="value-left-first">
                            <Slide direction="left" triggerOnce>
                                <div className="val-left-lef">
                                    <Image src = {valueImgi} alt="our values" 
                                    className="rounded-xl h-[250px] w-full object-cover"/>
                                </div>
                                <div className="val-left-right mt-6">
                                    <Image src = {valueImgii} alt="our values"
                                    className="rounded-xl h-[250px] w-full object-cover"/>
                                </div>
                            </Slide>
                        </div>
                        <div className="value-left-last">
                            <Image src = {valueImgiii} alt="our values" 
                            className="h-[524px] w-full rounded-2xl object-cover"/>
                        </div>
                        
                    </div>
                    <div className="values-right w-1/2 bg-white rounded-3xl px-12">
                        <Fade direction="up" triggerOnce>
                            <p className="mt-40">Our Values</p>
                            <h1 className="text-3xl font-semibold">
                                Mission
                            </h1>
                            <h2 className="mt-6 text-gray-600">
                                We aim to foster a vibrant, 
                                connected community where Ijebu people worldwide can engage with 
                                their history, traditions, and values. Through storytelling, education, 
                                and cultural exchange, we empower Ijebu descendants to embrace 
                                their identity and share it proudly with the world. 
                                Bobamayegun serves as a bridge between the past and the future, 
                                ensuring that the spirit of Ijebu lives on with authenticity, 
                                pride, and unity.
                            </h2>
                        </Fade>
                    </div>
                </div>
            </div>
        </div>
    )
} 