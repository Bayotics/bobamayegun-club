'use client'


import { Fade } from "react-awesome-reveal";
import CarouselBanner from "./CarouselBanner"




export function Banner () {

  return (
    <div className="banner-main">
      <div className="area">
        <Fade duration={2000}>
          <div className="banner-contents">
            <CarouselBanner />
          </div>
        </Fade>
		  </div>
    </div>
  )
}


