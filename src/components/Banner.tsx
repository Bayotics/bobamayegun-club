
'use client'


import { Fade } from "react-awesome-reveal";

export function Banner ({bannerBgName, textHeader, subText}) {
    return(
        <Fade triggerOnce>
            <div className= {`${bannerBgName} py-40 px-32`}>
                <h1 className="text-6xl font-semibold text-white">
                    {textHeader}
                </h1>
                <p className="mt-8 font-normal text-lg text-white">
                    {subText}
                </p>
            </div>
        </Fade>
    )
} 