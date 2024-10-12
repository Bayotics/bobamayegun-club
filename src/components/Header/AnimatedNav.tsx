'use client'

import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const AnimatedNav = () => {
  return (
    <div className=" h-[10px] justify-center  bg-white">
      <FlyoutLink href="#" FlyoutContent={PricingContent}>
        About Us
      </FlyoutLink>
    </div>
  );
};

const FlyoutLink = ({
  children,
  href,
  FlyoutContent,
}: {
  children: React.ReactNode;
  href: string;
  FlyoutContent?: React.ElementType;
}) => {
  const [open, setOpen] = useState(false);

  const showFlyout = FlyoutContent && open;

  return (
    <div
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
      className="relative w-fit h-fit"
    >
      <a href={href} className="relative text-black">
        {children}
        <span
          style={{
            transform: showFlyout ? "scaleX(1)" : "scaleX(0)",
          }}
          className="absolute -bottom-2 -left-2 -right-2 h-1 origin-left scale-x-0 rounded-full bg-indigo-300 transition-transform duration-300 ease-out"
        />
      </a>
      <AnimatePresence>
        {showFlyout && (
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 15 }}
            style={{ translateX: "-50%" }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="absolute left-1/2 top-12 bg-white text-white"
          >
            <div className="absolute -top-6 left-0 right-0 h-6 bg-transparent" />
            <div className="absolute left-1/2 top-0 h-4 w-4 -translate-x-1/2 -translate-y-1/2 rotate-45 bg-white" />
            <FlyoutContent />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const PricingContent = () => {
  return (
    <div className="px-20 bg-black p-1 shadow-xl">
      <div className="mb-6 space-y-8 mt-6">
        <a href="#" className="block text-sm hover:underline">
          Values
        </a>
        <a href="#" className="block text-sm hover:underline">
          History
        </a>
        <a href="#" className="block text-sm hover:underline">
          Council
        </a>
        <a href="#" className="block text-sm hover:underline">
          Leadership
        </a>
      </div>
    </div>
  );
};

export default AnimatedNav;