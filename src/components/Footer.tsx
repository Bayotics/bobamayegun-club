'use client'


import Image from "next/image"
import logo from '../images/bobamayegun-logo.png'
import { RiTwitterXFill } from "react-icons/ri";
import { RxInstagramLogo } from "react-icons/rx";
import { FaFacebookF } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa6";
import AnimatedBtn from "./HomePage/AnimatedBtnForAbout";
import Link from "next/link";



export default function Footer () {
    return (
        <div className="text-white">
                <div className = 'footer-top flex px-24 py-10'>
                    <section className="footer-card w-1/4">
                        <div 
                            className=
                            "fc-content text-center rounded-2xl bg-gradient-to-tr from-[#4f46e5] to-[#7b3db6] py-16 px-8">
                            <div className="footer-logo">
                                <section className="footer-logo-grid  flex gap-2 justify-center">
                                    <section className="pic-logo-footer">
                                        <Image src={logo} alt="bobamayegun logo" className="mt-2 h-10 w-10"/>
                                    </section>
                                    <section className="text-logo-footer">
                                        <h1 className="text-lg font-semibold mt-4">Bobamayegun</h1>
                                    </section>
                                </section>
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
                    </section>
                    <section className="footer-contact w-1/4 pt-16 pl-12">
                        <h1 className="font-semibold mt-4 text-lg">Get In Touch</h1>
                        <p className="mt-8 text-sm">contact@bobamayegun.com</p>
                        <p className="mt-4 text-sm">+234 123 456 7890</p>
                        <p className="mt-4 text-sm">13, Test Ave, FictiousLand, Lagos</p>

                    </section>
                    <div className="footer-links w-1/4 pt-16 pl-20">
                        <h1 className="font-semibold mt-4 text-lg">Quick Links</h1>
                        <div className="flex gap-10 footer-quick-links mt-8">
                            <section className="fql-left">
                                <p className=" text-sm">Home</p>
                                <p className="mt-4 text-sm">History</p>
                                <p className="mt-4 text-sm">Events</p>
                                <p className="mt-4 text-sm">Support</p>
                            </section>
                            <section className="fql-right">
                                <p className=" text-sm">Values</p>
                                <p className="mt-4 text-sm">Leadership</p>
                                <p className="mt-4 text-sm">Partnership</p>
                                <p className="mt-4 text-sm">Donations</p>
                            </section>
                        </div>
                    </div>
                    <section className="footer-newsletter w-1/4 pt-16 pl-6">
                        <h1 className="font-semibold mt-4 text-lg">Newsletter</h1>
                        <section className="newsletter-input mt-8">
                            <input className="w-[80%] px-4 py-4 rounded-full text-black"
                            placeholder="Enter email..." />
                        </section>
                        <section className="footer-btn mt-6">
                            <AnimatedBtn text={'Subscribe →'}
                            style={'bg-gradient-to-r from-[#4f46e5] to-[#7b3db6] px-8 hover:bg-black py-4 rounded-full text-white mt-12 w-[80%] text-center'} />
                        </section>
                    </section>
                </div>
                <div className="footer-bottom mt-10 bg-slate-900 py-4 ">
                    
                    <p className="text-center text-xs text-gray-400">
                        copyright@2025. All rights reserved. 
                        Design and Development by <span><Link href={'https://bayotics.github.io/updated-portfolio/'} target="_blank">Abdullahi Sho</Link></span> 
                    </p>
                </div>
        </div> 
    )
}

