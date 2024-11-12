'use client'

import { IoWaterOutline } from "react-icons/io5";
import { PiTreeEvergreenLight, PiHandFist } from "react-icons/pi";
import { IoSchoolOutline } from "react-icons/io5";
import { Fade } from "react-awesome-reveal";





export function Info () {
    return (
        <div className="charity-info-main mt-20">
            <div className="charity-info-content flex py-10 px-10">
                <div className="cicontent-left w-1/2  py-20">
                    <Fade direction = 'up' triggerOnce>
                        <p className="text-gray-500">What we do</p>
                        <h1 className="mt-6 text-5xl">
                            Variuos things we help<br/> with in the society
                        </h1>
                    </Fade>
                </div>
                <div className="cicontent-right w-1/2  grid grid-cols-2 gap-4 gap-y-12">
                    <div className="cic-grid-i  flex gap-4">
                        <div className="cic-grid-icon">
                            <IoWaterOutline className=
                            "text-5xl text-green-400"/>
                        </div>
                        <div className="cic-grid-text">
                            <Fade direction="up" triggerOnce>
                                <h1 className="text-2xl">Water delivery</h1>
                                <p className="mt-2 text-gray-700">
                                    Through partnerships with local authorities and water supply organizations, 
                                    we have been able to deliver water directly to those in need. 
                                </p>
                            </Fade>
                        </div>
                    </div>
                    <div className="cic-grid-i  flex gap-4">
                        <div className="cic-grid-icon">
                            <PiTreeEvergreenLight className=
                            "text-5xl text-pink-500"/>
                        </div>
                        <div className="cic-grid-text">
                            <Fade direction="down" triggerOnce>
                                <h1 className="text-2xl">Development</h1>
                                <p className="mt-2 text-gray-700">
                                    We work closely with local leaders to identify and address 
                                    critical community needs, contributing to sustainable and 
                                    meaningful development.
                                </p>
                            </Fade>
                        </div>
                    </div>
                    <div className="cic-grid-i  flex gap-4">
                        <div className="cic-grid-icon">
                            <IoSchoolOutline className=
                            "text-5xl text-yellow-500"/>
                        </div>
                        <div className="cic-grid-text">
                            <Fade direction="down" triggerOnce>
                                <h1 className="text-2xl">Education</h1>
                                <p className="mt-2 text-gray-700">
                                    Bobamayegun offers scholarships and educational grants to 
                                    deserving Ijebu students, helping to reduce the financial 
                                    barriers to quality education.
                                </p>
                            </Fade>
                        </div>
                    </div>
                    <div className="cic-grid-i  flex gap-4">
                        <div className="cic-grid-icon">
                            <PiHandFist className=
                            "text-5xl text-purple-500"/>
                        </div>
                        <div className="cic-grid-text">
                            <Fade direction="up" triggerOnce>
                                <h1 className="text-2xl">Empowerment</h1>
                                <p className="mt-2 text-gray-700">
                                    We offer small grants and resources for micro-enterprises, 
                                    especially for women and youth, to boost self-reliance and 
                                    economic independence.
                                </p>
                            </Fade>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}