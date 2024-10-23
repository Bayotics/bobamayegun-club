'use client'

import AnimatedBtn from "./AnimatedBtn"
import bannerImg from '../../images/banner-image-one.jpg'
import bannerImgtwo from '../../images/banner-image-two.jpg'
import bannerImgthree from '../../images/banner-image-three.jpg'
import Image from "next/image"



export function Banner () {
  return (
    <div className="banner-main">
      <div className="area">
        
        <div className="banner-contents px-32 flex gap-16">
          <div className="banner-content-left w-1/2">
            <h1 className="text-purple-950 font-semibold text-[3.1rem] mt-32 leading-normal">
              Preserving Tradition,<br/> Celebrating Heritage
            </h1>
            <div className="banner-text-side">
             <h2 className="mt-8 text-purple-800 ml-2">
              <span className="font-semibold text-purple-950">Bobamayegun Okunrin Akile Ijebu. </span>
                We are proud custodians of the vibrant and timeless Ijebu culture. 
                Our society is a gathering of individuals dedicated to preserving 
                our rich heritage, celebrating our traditions, and promoting unity 
                within the Ijebu community and beyond.
            </h2>
            </div>
            <div className="mt-8 learnmore-btn relative">
              <AnimatedBtn/>
            </div>
          </div>
          <div className="banner-content-right flex justify-center w-1/2">
            <div className = 'bcr-images-left w-1/2 mt-10'>
              <Image className="h-[300px] w-[70%] rounded-full m-auto border-4 border-purple-400"
               src= {bannerImgtwo} alt="bobamayegun">
              </Image> 
              <Image className="h-[300px] w-[70%] rounded-full mt-4 m-auto border-4 border-purple-400"
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
		  </div>
    </div>
  )
}


