'use client'

import React, { ReactElement, useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { SiAmazon, SiGithub, SiGoogle, SiMeta, SiTwitch } from "react-icons/si";
import { FaPeopleRoof } from "react-icons/fa6";
import { MdSupportAgent, MdCelebration } from "react-icons/md";
import { BiNetworkChart } from "react-icons/bi";
import { BsFillBarChartFill } from "react-icons/bs";




import { twMerge } from "tailwind-merge";

export const WhyUsAnimate = () => {
  return (
    <section className="flex flex-col items-center justify-center gap-12 px-4 pt-28 md:flex-row">
      <LogoRolodex
        items={[
          <LogoItem key={1} className="bg-orange-300 text-neutral-900">
            <FaPeopleRoof />
            <h1 className="text-center text-xl">Culture</h1>
          </LogoItem>,
          <LogoItem key={2} className="bg-green-300 text-neutral-900">
            <MdSupportAgent />
            <h1 className="text-center text-xl">Support</h1>
          </LogoItem>,
          <LogoItem key={3} className="bg-blue-300 text-neutral-900">
            <BiNetworkChart className="mt-6 ml-4" />
            <h1 className="text-center text-xl">Networking</h1>
          </LogoItem>,
          <LogoItem key={4} className="bg-white text-black">
            <MdCelebration className="ml-6"/>
            <h1 className="text-center text-xl">Celebration</h1>
          </LogoItem>,
          <LogoItem key={5} className="bg-purple-300 text-neutral-900">
            <BsFillBarChartFill className="ml-6"/>
            <h1 className="text-center text-xl">Development</h1>
          </LogoItem>,
        ]}
      />
    </section>
  );
};

const DELAY_IN_MS = 2500;
const TRANSITION_DURATION_IN_SECS = 1.5;

const LogoRolodex = ({ items }: { items: ReactElement[] }) => {
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setIndex((pv) => pv + 1);
    }, DELAY_IN_MS);

    return () => {
      clearInterval(intervalRef.current || undefined);
    };
  }, []);

  return (
    <div
      style={{
        transform: "rotateY(-20deg)",
        transformStyle: "preserve-3d",
      }}
      className="relative z-0 h-72 w-72 shrink-0 rounded-xl border border-neutral-700 bg-neutral-800"
    >
      <AnimatePresence mode="sync">
        <motion.div
          style={{
            y: "-50%",
            x: "-50%",
            clipPath: "polygon(0 0, 100% 0, 100% 50%, 0 50%)",
            zIndex: -index,
            backfaceVisibility: "hidden",
          }}
          key={index}
          transition={{
            duration: TRANSITION_DURATION_IN_SECS,
            ease: "easeInOut",
          }}
          initial={{ rotateX: "0deg" }}
          animate={{ rotateX: "0deg" }}
          exit={{ rotateX: "-180deg" }}
          className="absolute left-1/2 top-1/2"
        >
          {items[index % items.length]}
        </motion.div>
        <motion.div
          style={{
            y: "-50%",
            x: "-50%",
            clipPath: "polygon(0 50%, 100% 50%, 100% 100%, 0 100%)",
            zIndex: index,
            backfaceVisibility: "hidden",
          }}
          key={(index + 1) * 2}
          initial={{ rotateX: "180deg" }}
          animate={{ rotateX: "0deg" }}
          exit={{ rotateX: "0deg" }}
          transition={{
            duration: TRANSITION_DURATION_IN_SECS,
            ease: "easeInOut",
          }}
          className="absolute left-1/2 top-1/2"
        >
          {items[index % items.length]}
        </motion.div>
      </AnimatePresence>

      <hr
        style={{
          transform: "translateZ(1px)",
        }}
        className="absolute left-0 right-0 top-1/2 z-[999999999] -translate-y-1/2 border-t-2 border-neutral-800"
      />
    </div>
  );
};

const LogoItem = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div
      className={twMerge(
        "grid h-64 w-64 place-content-center rounded-lg bg-neutral-700 text-6xl text-neutral-50",
        className
      )}
    >
      {children}
    </div>
  );
};