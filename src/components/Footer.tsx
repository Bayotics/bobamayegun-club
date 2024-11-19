'use client'


import Image from "next/image"
import logo from '@/images/Bobamayegun-logo.png'
import { RiTwitterXFill } from "react-icons/ri";
import { RxInstagramLogo } from "react-icons/rx";
import { FaFacebookF } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa6";
import AnimatedBtn from "./HomePage/AnimatedBtnForAbout";
import {Fade} from 'react-awesome-reveal';



export default function Footer () {
    return (
        <div className="text-white">
            <Fade direction =  'up' triggerOnce>
                <div className = 'footer-top flex px-24 py-10'>
                    <div className="footer-card w-1/4">
                        <div 
                            className=
                            "fc-content text-center rounded-2xl bg-gradient-to-tr from-[#4f46e5] to-[#7b3db6] py-16 px-8">
                            <div className="footer-logo">
                                <div className="footer-logo-grid  flex gap-2 justify-center">
                                    <div className="pic-logo-footer">
                                        <Image src={logo} alt="bobamayegun logo" className="mt-2 h-10 w-10"/>
                                    </div>
                                    <div className="text-logo-footer">
                                        <h1 className="text-lg font-semibold mt-4">Bobamayegun</h1>
                                    </div>
                                </div>
                            </div>
                            <div className="footer-card-text mt-8">
                                <p className="text-sm">Fostering unity, growth, and cultural pride. 
                                    Have any inquiry or contribution? Contact us, we are here for you.</p>
                            </div>
                            <section className="footer-socials flex mt-8 justify-center gap-4">
                                <section className="footer-x bg-white p-2 rounded-full">
                                    <RiTwitterXFill className="text-purple-700" />
                                </section>
                                <section className="footer-ig bg-white p-2 rounded-full">
                                    <RxInstagramLogo className="text-purple-700" />
                                </section>
                                <section className="footer-fb bg-white p-2 rounded-full">
                                    <FaFacebookF className="text-purple-700" />
                                </section>
                                <section className="footer-youtube bg-white p-2 rounded-full">
                                    <FaYoutube className="text-purple-700" />
                                </section>
                            </section>

                        </div>
                    </div>
                    <div className="footer-contact w-1/4 pt-16 pl-12">
                        <h1 className="font-semibold mt-4 text-lg">Get In Touch</h1>
                        <p className="mt-8 text-sm">contact@bobamayegun.com</p>
                        <p className="mt-4 text-sm">+234 123 456 7890</p>
                        <p className="mt-4 text-sm">13, Test Ave, FictiousLand, Lagos</p>

                    </div>
                    <div className="footer-links w-1/4 pt-16 pl-20">
                        <h1 className="font-semibold mt-4 text-lg">Quick Links</h1>
                        <div className="flex gap-10 footer-quick-links mt-8">
                            <div className="fql-left">
                                <p className=" text-sm">Home</p>
                                <p className="mt-4 text-sm">History</p>
                                <p className="mt-4 text-sm">Events</p>
                                <p className="mt-4 text-sm">Support</p>
                            </div>
                            <div className="fql-right">
                                <p className=" text-sm">Values</p>
                                <p className="mt-4 text-sm">Leadership</p>
                                <p className="mt-4 text-sm">Partnership</p>
                                <p className="mt-4 text-sm">Donations</p>
                            </div>
                        </div>
                    </div>
                    <div className="footer-newsletter w-1/4 pt-16 pl-6">
                        <h1 className="font-semibold mt-4 text-lg">Newsletter</h1>
                        <div className="newsletter-input mt-8">
                            <input className="w-[80%] px-4 py-4 rounded-full text-black"
                            placeholder="Enter email..." />
                        </div>
                        <div className="footer-btn mt-6">
                            <AnimatedBtn text={'Subscribe →'}
                            style={'bg-gradient-to-r from-[#4f46e5] to-[#7b3db6] px-8 hover:bg-black py-4 rounded-full text-white mt-12 w-[80%] text-center'} />
                        </div>
                    </div>
                </div>
                <div className="footer-bottom mt-10 bg-slate-900 py-4 ">
                    <p className="text-center text-xs text-gray-400">
                        copyright@2024. All rights reserved. 
                        Design and Development by @unclebayotics
                    </p>
                </div>
            </Fade>
        </div> 
    )
}

