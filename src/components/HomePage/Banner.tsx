'use client'

import AnimatedBtn from "./AnimatedBtn"
import bannerImg from '../../images/banner-image-one.jpg'
import bannerImgtwo from '../../images/banner-image-two.jpg'
import bannerImgthree from '../../images/banner-image-three.jpg'
import Image from "next/image"
import { Fade } from "react-awesome-reveal";
import AnimatedText from "./AnimatedText"
import Link from "next/link"




export function Banner () {

  return (
    <div className="banner-main">
      <div className="area">
        <Fade duration={2000}>
          <div className="banner-contents px-32 flex gap-16">
            <div className="banner-content-left w-1/2">
              <h1 className="text-white font-semibold text-[3rem] mt-32 leading-tight 
                hidden home-banner-title-heading">
                Preserving Tradition, Celebrating Heritage
              </h1>
              <div className = 'animated-text-banner'>
                <AnimatedText />
              </div>
              <div className="banner-text-side">
              <h2 className="mt-8 text-gray-600 ml-2 text-xl">
                <span className="font-semibold text-xl text-gray-600">
                  Bobamayegun Okunrin Akile Ijebu. </span>
                  We are proud custodians of the vibrant and timeless Ijebu culture. 
              </h2>
              </div>
              <div className="mt-8 learnmore-btn relative">
                <Link href = '/aboutus'>
                  <AnimatedBtn/>
                </Link>
              </div>
            </div>
            <div className="banner-content-right flex justify-center w-1/2">
              <div className = 'bcr-images-left w-1/2 mt-10'>
                <Image className="h-[300px] w-[70%] rounded-full m-auto border-4 border-purple-400 object-cover"
                src= {bannerImgtwo} alt="bobamayegun">
                </Image> 
                <Image className="h-[300px] w-[70%] rounded-full mt-4 m-auto border-4 border-purple-400 object-cover"
                src= {bannerImg} alt="bobamayegun">
                </Image> 
              </div> 
              <div className = 'bcr-images-right w-1/2 mt-28'>
                <Image className="h-[400px] w-[85%] rounded-full mt-4 border-4 border-purple-400"
                src= {bannerImgthree} alt="bobamayegun">
                </Image> 
              </div>            
            </div>
            
          </div>
        </Fade>
        
		  </div>
    </div>
  )
}


