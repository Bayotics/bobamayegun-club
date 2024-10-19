'use client'

import { useEffect, useState } from "react";
import Carousel, { CarouselItem } from "./ExcosCarousel";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import {
  AiFillBehanceSquare,
  AiFillInstagram,
  AiFillFacebook
} from "react-icons/ai";
import { motion } from "framer-motion";
import excoOne from '@/images/exco-three.jpg'
import excoTwo from '@/images/exco-two.jpg'
import excoThree from '@/images/exco-one.png';

const initialData = [
  {
    image: excoOne,      
    name: "Ade Agbaje PhD",
    memo: "Chairman",
    socialMedia: "@yinksboy"
  },
  {
    image: excoTwo,
    name: "Engr. Beyioku",
    memo: "General Secretary",
    socialMedia: "@b_wesse"
  },
  {
    image: excoThree,
    name: "Dr. Akintomide",
    memo: "Vice Chairman",
    socialMedia: "@akins_ade"
  }
];

export default function OurExcos() {
  const [data] = useState(initialData);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isLoading, setLoading] = useState(true);

  const updateIndex = (newIndex) => {
    if (newIndex < 0) {
      newIndex = data.length - 1;
    } else if (newIndex >= data.length) {
      newIndex = 0;
    }

    setActiveIndex(newIndex);
  };

  useEffect(() => {
    const id = setTimeout(() => setLoading(false), 1500);
    return () => clearTimeout(id);
  }, []);

  return (
    <div className="wrapper">
      {!isLoading && (
        <>
          <div className = 'excos-header'>
            <p className="text-center text-black">Leadership</p>
            <h1 className="text-black text-center mt-4 font-semibold text-3xl">
                Our Excos
            </h1>
            <h2 className="mt-2 text-gray-700 text-center text-base">
                Here are the directing members
            </h2>
          </div>
          <div className="main-content mt-12">
            <div className="content-wrapper border">
              <div className="main-text " style={{ zIndex: 50 }}>
                {data[activeIndex].name}
              </div>
              <div className="main-desc text-black">
                {data[activeIndex].memo}
                <p className="text-gray-700">{data[activeIndex].socialMedia}</p>
              </div>
            </div>
            <Carousel activeIndex={activeIndex} updateIndex={updateIndex}>
              {data.map((url) => (
                <CarouselItem  imageUrl={url.image} />
              ))}
            </Carousel>
          </div>
          <div className="bottomnav font-semibold">
            <motion.div
              initial={{ x: `100px`, opacity: 0 }}
              animate={{ x: `0px`, opacity: 1 }}
              transition={{ duration: 1.5, ease: "easeOut" }}
              className="label"
            >
               BOBAMAYEGUN
            </motion.div>

            <div className="nav">
              <MdKeyboardArrowLeft
                onClick={() => {
                  updateIndex(activeIndex - 1);
                }}
              />
              <MdKeyboardArrowRight
                onClick={() => {
                  updateIndex(activeIndex + 1);
                }}
              />
            </div>
          </div>

          <motion.div
            initial={{
              y: `100px`,
              rotate: `${window.innerWidth >= 555 ? "-90deg" : "0deg"}`,
              opacity: 0
            }}
            animate={{
              y: `0px`,
              rotate: `${window.innerWidth >= 555 ? "-90deg" : "0deg"}`,
              opacity: 1
            }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="horizontalBar"
          >
            {/* <span className="socialMediaLinks text-white text-3xl border-2 border-white ">
              <AiFillFacebook />
              <AiFillInstagram />
              <AiFillBehanceSquare />
            </span> */}
          </motion.div>
        </>
      )}
    </div>
  );
}
