'use client'

import AnimatedBtn from "../HomePage/AnimatedBtnForAbout"
import { Fade } from "react-awesome-reveal";
import Link from "next/link";



export function Intro () {
    return(
        <div className="charityintro-main">
            <div className="charity-intro-cards flex">
                <div className="cic-left py-16 px-16 w-1/2">
                    <Fade direction="up" triggerOnce>
                        <h1 className="text-3xl text-white ml-6">
                            We strive to make a <br/> lasting impact on the lives of<br/> people.
                        </h1>
                        <div className="charity-btn mt-4">
                            <Link href = '/donations'>
                                <AnimatedBtn 
                                text = {'Donate →'}
                                style={'bg-transparent px-2 py-1 text-purple-300'}/>
                            </Link>
                        </div>
                    </Fade>
                </div>
                <div className = 'cic-right w-1/2 py-16 px-16'>
                    <Fade direction="down" triggerOnce>
                        <h1 className="text-3xl text-white ml-6">
                            “We make a living by what we get.  <br/> We make a life by what we give.
                        </h1>
                        <p className="mt-2 text-xl text-white ml-6">Winston Churchill</p>
                        <div className="charity-btn mt-4">
                            <Link href = '/donations'>
                                <AnimatedBtn 
                                text = {'Talk to Us →'}
                                style={'bg-transparent px-2 py-1 text-purple-300'}/>
                            </Link>
                        </div>
                    </Fade>
                </div>
            </div>
        </div>
    )
}