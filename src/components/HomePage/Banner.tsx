'use client'

import AnimatedBtn from "./AnimatedBtn"


export function Banner () {
  return (
    <div className="banner-main">
      <div className="area">
        <ul className="circles">
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
        <div className="banner-contents border border-white px-48">
          <h1 className="text-white font-semibold text-5xl mt-32 leading-normal">
            Preserving Tradition,<br/> Celebrating Heritage
          </h1>
          <h2 className="mt-4 text-white font-medium ml-2">Bobamayegun Okunrin Akile Ijebu.</h2>
          <div className="mt-4 learnmore-btn relative">
            <AnimatedBtn />
          </div>
        </div>
		  </div>
    </div>
  )
}


