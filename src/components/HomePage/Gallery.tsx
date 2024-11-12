'use client'

import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import galleryOne from '@/images/gallery/gallery-img-one.jpg'
import galleryTwo from '@/images/gallery/gallery-img-two.jpg'
import galleryThree from '@/images/gallery/gallery-img-three.jpg'
import galleryFour from '@/images/gallery/gallery-img-four.jpg'
import galleryFive from '@/images/gallery/gallery-img-five.jpg'
import gallerySix from '@/images/gallery/gallery-img-six.jpg'
import gallerySeven from '@/images/gallery/gallery-img-seven.jpg'
import galleryEight from '@/images/gallery/gallery-img-eight.jpg'
import galleryNine from '@/images/gallery/gallery-img-nine.jpg'
import galleryTen from '@/images/gallery/gallery-img-ten.jpg'
import galleryeleven from '@/images/gallery/gallery-img-eleven.jpg'
import galleryTwelve from '@/images/gallery/gallery-img-twelve.jpg'
import galleryThirteen from '@/images/gallery/gallery-img-thirteen.jpg'
import galleryFourteen from '@/images/gallery/gallery-img-fourteen.jpg'
import galleryFifteen from '@/images/gallery/gallery-img-fifteen.jpg'
import gallerySixteen from '@/images/gallery/gallery-img-sixteen.jpg'
import {Fade, Zoom } from 'react-awesome-reveal';


const Gallery = () => {
  return (
    <div>
        <Fade direction="up" triggerOnce>
          <h1 className="text-black text-center mt-4 font-semibold text-3xl">Gallery</h1>
        </Fade>
        <section className="w-full px-8 py-12 grid grid-cols-1 md:grid-cols-2 items-center gap-8 max-w-6xl mx-auto">
            <div>
              <Zoom triggerOnce>
                <span className="block mb-4 text-xs md:text-sm text-purple-500 font-medium">
                  Browse our gallery
                </span>
                <h3 className="text-4xl md:text-6xl font-semibold">
                  Past events in Pics
                </h3>
                <p className="text-base md:text-lg text-slate-700 my-4 md:my-6">
                  Lets take you through celebration gallore at Our community
                </p>
                <button className='init-btn 
                  bg-gradient-to-r from-pink-500 to-pink-900 px-4 hover:bg-black
                  py-2 rounded-2xl text-white mt-4'>
                  View full gallery
                </button>
              </Zoom>
            </div>
            <ShuffleGrid />
        </section>
    </div>
    
  );
};

const shuffle = (array: (typeof squareData)[0][]) => {
  let currentIndex = array.length,
    randomIndex;

  while (currentIndex != 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }

  return array;
};

const squareData = [
  {
    id: 1,
    src: galleryOne,
  },
  {
    id: 2,
    src: galleryTwo,
  },
  {
    id: 3,
    src: galleryThree,
  },
  {
    id: 4,
    src: galleryFour,
  },
  {
    id: 5,
    src: galleryFive,
  },
  {
    id: 6,
    src: gallerySix,
  },
  {
    id: 7,
    src: gallerySeven,
  },
  {
    id: 8,
    src: galleryEight,
  },
  {
    id: 9,
    src: galleryNine,
  },
  {
    id: 10,
    src: galleryTen,
  },
  {
    id: 11,
    src: galleryeleven,
  },
  {
    id: 12,
    src: galleryTwelve,
  },
  {
    id: 13,
    src: galleryThirteen,
  },
  {
    id: 14,
    src: galleryFourteen,
  },
  {
    id: 15,
    src: galleryFifteen,
  },
  {
    id: 16,
    src: gallerySixteen,
  },
];

const generateSquares = () => {
  return shuffle(squareData).map((sq) => (
    <motion.div
      key={sq.id}
      layout
      transition={{ duration: 1.5, type: "spring" }}
      className="w-full h-full"
      style={{
        backgroundImage: `url(${sq.src.src})`,
        backgroundSize: "cover",
      }}
    ></motion.div>
  ));
};

const ShuffleGrid = () => {
  const timeoutRef = useRef<any>(null);
  const [squares, setSquares] = useState(generateSquares());

  useEffect(() => {
    shuffleSquares();

    return () => clearTimeout(timeoutRef.current);
  }, []);

  const shuffleSquares = () => {
    setSquares(generateSquares());

    timeoutRef.current = setTimeout(shuffleSquares, 3000);
  };

  return (
    <div className="grid grid-cols-4 grid-rows-4 h-[450px] gap-1">
      {squares.map((sq) => sq)}
    </div>
  );
};

export default Gallery;