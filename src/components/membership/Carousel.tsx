'use client'

import React, { useState } from "react";
import avii from '@/images/social/social-portrait-one.png';
import aviii from '@/images/social/social-portrait-two.png';
import aviiii from '@/images/social/social-portrait-three.png';
import aviiv from '@/images/social/social-portrait-four.png';
import { FaQuoteLeft } from "react-icons/fa";
import { IoMdArrowBack } from "react-icons/io";
import { IoMdArrowForward } from "react-icons/io";





export default function Carousel() {

  const items = [
    {
        pic: avii,
        comment: ' I’ve deepened my understanding of Ijebu heritage and met inspiring people along the way. Every event is rich with tradition, and I feel more connected to my culture than ever. Highly recommended for anyone proud of their Ijebu heritage!',
        userInfo: 'Jamiu Abdulwasiu Akande, Branch Manager, Zenith Bank Plc'
    },
    {
        pic: aviii,
        comment: 'This society has provided me with not only a community but also a sense of family. Everyone is so welcoming, and the events are always organized with such respect for Ijebu traditions. It’s truly heartwarming to see the commitment to preserving our culture. Proud to be a member!',
        userInfo: 'Agunbiade Ezekiel, Director, NNPC'
    },
    {
        pic: aviiii,
        comment: 'I joined hoping to learn more about my culture, but I gained so much more. I’ve met mentors, business partners, and friends who genuinely support one another. Bobamayegun Okunrin Akile Ijebu isn’t just a cultural society; it’s a network for life.',
        userInfo: 'Okunola Adeboye PhD, CFO Service Management Group, USA'
    },
    {
        pic: aviiv,
        comment: 'I’ve attended several events, and each one is a beautiful celebration of Ijebu culture. The organizers put so much effort into making each gathering memorable and meaningful. It’s an honor to celebrate our roots in such a vibrant, authentic way. ',
        userInfo: 'Micheal Talabi, Team Lead, CINNSOL Nigeria'
    }

  ];
  const [index, setIndex] = useState(0);
  const [transform, setTransform] = useState(0);

  const increment = () => {
    setIndex(index + 4);
    setTransform((previousTransform) => previousTransform - 80);
  };

  const decrement = () => {
    setIndex(index - 4);
    setTransform((previousTransform) => previousTransform + 80);
  };

  return (
    <div className="container_caro">
      <div className="carousel-ctr">
        <button className="btn_caro btn-caro-left" disabled={index === 0} onClick={decrement}>
          {<IoMdArrowBack className="text-3xl"/>}
        </button>
        <div className="carousel-wrapper_caro">
          <div
            className="item-ctr"
            style={{ transform: `translateX(${transform}vw)` }}
          >
            {items.map((item) => (
              <div key={item.userInfo} className="item_caro">
                <div className="item-content_caro">
                    <div className = 'icc-box flex gap-12'>
                        <div className = 'icc-avatar h-[50vh] w-[55%]'
                          style={{
                            backgroundImage: `url(${item.pic.src})`,
                            backgroundSize: "contain",
                            backgroundRepeat: "no-repeat"
                          }}>
                        </div>
                        <div className = 'icc-texts'>
                          <div className = 'flex gap-3'>
                            <div className = 'quote-span'>
                              <FaQuoteLeft className="text-5xl text-purple-900" />
                            </div>
                            <h2 className="text-black text-xl">{item.comment}</h2>
                          </div>
                          <p className="mt-4 ml-16 text-lg text-center text-purple-800">
                            {item.userInfo}
                          </p>
                        </div>
                    </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <button className="btn_caro btn-caro-right" disabled={index === 8} onClick={increment}>
          {<IoMdArrowForward className="text-3xl"/>}
        </button>
      </div>
    </div>
  );
}
