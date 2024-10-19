'use client'

import React, { useEffect, useState, ReactNode } from "react";
import { useSwipeable } from "react-swipeable";

interface CarouselItemProps {
  children: ReactNode;
  width: string;
  imageUrl: string;
}

export const CarouselItem: React.FC<CarouselItemProps> = ({ children, width, imageUrl }) => {
  return (
    <div
      className="carousel-item-exco"
      style={{ width: width, backgroundImage: `url(${imageUrl.src})` }}
    >
      {children}
    </div>
  );
};

interface CarouselProps {
  children: ReactNode;
  activeIndex: number;
  updateIndex: (index: number) => void;
}

const Carousel: React.FC<CarouselProps> = ({ children, activeIndex, updateIndex }) => {
  const [paused, setPaused] = useState<boolean>(false);

  useEffect(() => {
    const interval = setInterval(() => {
      if (!paused) {
        updateIndex(activeIndex + 1);
      }
    }, 3000);

    return () => {
      if (interval) {
        clearInterval(interval);
      }
    };
  }, [paused, activeIndex, updateIndex]);

  const handlers = useSwipeable({
    onSwipedLeft: () => updateIndex(activeIndex + 1),
    onSwipedRight: () => updateIndex(activeIndex - 1)
  });

  return (
    <div
      {...handlers}
      className="exco-carousel"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div
        className="inner"
        style={{ transform: `translateX(-${activeIndex * 100}%)` }}
      >
        {React.Children.map(children, (child) => {
          return React.cloneElement(child as React.ReactElement, { width: "100%" });
        })}
      </div>
      <div className="indicators">
        {React.Children.map(children, (child, index) => {
          return (
            <button
              className={`${
                index === activeIndex ? "active" : ""
              } indicatorDot`}
              onClick={() => {
                updateIndex(index);
              }}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Carousel;

