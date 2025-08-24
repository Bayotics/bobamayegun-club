
"use client";
import galleryOne from '@/images/home-carousel/caro-banner-one.png'
import galleryTwo from '@/images/home-carousel/caro-banner-one.jpg'
import galleryThree from '@/images/home-carousel/caro-banner-four.jpg'   
import EastIcon from '@mui/icons-material/East';
import WestIcon from '@mui/icons-material/West';
import { useState, useEffect } from "react";
import AnimatedBtn from './AminatedBtnForCaro';


// text and style

const slides = [
  {
    image: galleryOne,
    title: "Bobamayegun Okunrin Akile Ijebu is turning 10!",
    subtitle: "Join Us for Our 10th Anniversary",
    btnText: "Register Now",
    btnRoute: "/anniversary"
  },
  {
    image: galleryTwo,
    title: "Celebrating the Ijebu Culture",
    subtitle: "We are proud custodians of the timeless Ijebu culture",
    btnText: "Join Us",
    btnRoute: "/membership"
  },
  {
    image: galleryThree,
    title: "Join us for Our 10th Anniversary",
    subtitle: "Join us as we Celebrate a Decade of Tradition, Passion, and Togetherness",
    btnText: "Make Inquiry",
    btnRoute: "/anniversary"
  }
];

const CarouselBanner = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  useEffect(() => {
  const timer = setInterval(nextSlide, 20000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen bg-[#0a0a0a]">
      <div className="relative h-screen w-full overflow-hidden hero-caro-container">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              currentSlide === index ? "opacity-100" : "opacity-0"
            }`}
          >
            <div
              className="absolute inset-0 bg-cover bg-center hero-caro-bg"
              style={{ background: `url(${slide.image.src}) no-repeat center center / cover` }}
            >
              <div className="absolute inset-0 bg-black/40" /> {/* Overlay */}
            </div>
            <div className="relative z-10 flex h-full items-center justify-center">
              <div className="text-center">
                <div className='hero-caro-main-title px-20'>
                    <h1 className="mb-4 text-5xl font-bold text-white md:text-7xl">
                        {slide.title}
                    </h1>
                </div>
                <p className="text-lg text-white/90 md:text-xl caro-paragraph">
                  {slide.subtitle}
                </p>
                <div className='homepage-caro-animated-btn mt-10 w-1/6 m-auto'>
                    <AnimatedBtn
                    style={`mb-2 inline-block rounded-lg bg-white/10 px-4 py-3 text-lg font-medium text-white backdrop-blur-sm ${slide.btnText === "Register Now" ? "flicker-flashy" : ""}`} 
                    text={slide.btnText}
                    _route={slide.btnRoute}/>
                </div>
              </div>
            </div>
          </div>
        ))}

        {/* Navigation Buttons */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 z-20 -translate-y-1/2 transform rounded-full bg-white/10 p-3 backdrop-blur-sm transition-all hover:bg-white/20"
          aria-label="Previous slide"
        >
          <div className="h-6 w-6 text-white"><WestIcon className="text-purple-200"/> </div>
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 z-20 -translate-y-1/2 transform rounded-full bg-white/10 p-3 backdrop-blur-sm transition-all hover:bg-white/20"
          aria-label="Next slide"
        >
            <div className="h-6 w-6 text-white"><EastIcon className="text-purple-200"/> </div>
          </button>

        {/* Slide Indicators */}
        <div className="absolute bottom-8 left-1/2 z-20 flex -translate-x-1/2 transform space-x-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`h-2 w-2 rounded-full transition-all ${
                currentSlide === index
                  ? "bg-purple-500 w-8"
                  : "bg-white/50 hover:bg-white/75"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CarouselBanner;
