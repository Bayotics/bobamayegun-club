'use client'

import { useEffect, useState } from "react";
import Carousel, { CarouselItem } from "./ExcosCarousel";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import { FaInstagram, FaLinkedin  } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { motion } from "framer-motion";
import excoOne from '@/images/exco-three.jpg'
import excoTwo from '@/images/exco-two.jpg'
import excoThree from '@/images/exco-one.png';
import AnimatedBtn from "../AnimatedBtnForAbout";

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
            <div className="content-wrapper border flex">
              <div className="exco-socials mt-2 w-1/4 pt-2 pl-10">
                <div className="exco-social-icons">
                  <FaInstagram className="mt-6 text-xl"/>
                  <FaLinkedin className="mt-6 text-xl"/>
                  <FaXTwitter className="mt-6 text-xl mb-10"/>
                </div>
              </div>
              <div className="main-text w-3/4" style={{ zIndex: 50 }}>
                <h1 className="font-normal text-5xl text-black">{data[activeIndex].name}</h1>
                <h2 className="text-lg text-black font-light">{data[activeIndex].memo}</h2>
                <p className="text-base text-black">{data[activeIndex].socialMedia}</p>
                <div className="w-1/2 exco-learn-more">
                  <AnimatedBtn />
                </div>
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
