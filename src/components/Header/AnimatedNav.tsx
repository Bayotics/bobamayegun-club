'use client'

import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";

const AnimatedNav = () => {
  return (
    <div className=" flex navbar-menus gap-8  justify-between font-medium">
      <Link href= '/' className="nav-menu-btn   font-medium">
          <div className="">
              <p className="font-medium">Home</p>
          </div>
      </Link>
      <FlyoutLink href="#" FlyoutContent={AboutContent}>
        About Us
      </FlyoutLink>
      <FlyoutLink href="#" FlyoutContent={InitiativeContent}>
        Our Initiatives
      </FlyoutLink>
      <Link href= '/news'>
          <div className="nav-menu-btn  ">
              <p className="font-medium">News & Events</p>
          </div>
      </Link>
      <Link href= 'gallery'>
          <div className="nav-menu-btn  ">
              <p className="font-medium">Gallery</p>
          </div>
      </Link>
      <FlyoutLink href="#" FlyoutContent={SupportContent}>
        Join & Support
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
          className="absolute -bottom-2 -left-2 -right-2 h-1 origin-left scale-x-0 rounded-full
           bg-purple-600 transition-transform duration-300 ease-out"
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
            className="absolute left-1/2 top-12 bg-white text-white animated-nav-container"
          >
            <div className="absolute -top-6 left-0 right-0 h-6 bg-transparent" />
            <div className="absolute left-1/2 top-0 h-4 w-4 -translate-x-1/2 -translate-y-1/2 rotate-45 bg-black
             animated-nav-dropdown" />
            <FlyoutContent />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const AboutContent = () => {
  return (
    <div className="px-20 bg-black p-1 shadow-xl">
      <div className="mb-6 space-y-8 mt-6">
        <a href="/aboutus" className="font-medium block text-sm hover:underline">
          Values
        </a>
        <a href="/aboutus" className="font-medium block text-sm hover:underline">
          History
        </a>
        <a href="/aboutus" className="font-medium block text-sm hover:underline">
          Council
        </a>
        <a href="/aboutus" className="font-medium block text-sm hover:underline">
          Leadership
        </a>
      </div>
    </div>
  );
};
const InitiativeContent = () => {
  return (
    <div className="px-20 bg-black p-1 shadow-xl">
      <div className="mb-6 space-y-8 mt-6">
        <a href="/artsandculture" className="font-medium block text-sm hover:underline">
          Arts & Culture
        </a>
        <a href="/charity" className="font-medium block text-sm hover:underline">
          Charity
        </a>
        <a href="/policy" className="font-medium block text-sm hover:underline">
          Policy
        </a>
        <a href="/socialnetwork" className="font-medium block text-sm hover:underline">
          Social Networking
        </a>
      </div>
    </div>
  );
};
const SupportContent = () => {
  return (
    <div className="px-20 bg-black p-1 shadow-xl support-nav-content">
      <div className="mb-6 space-y-8 mt-6">
        <a href="/partnership" className="font-medium block text-sm hover:underline">
          Partnership
        </a>
        <a href="#" className="font-medium block text-sm hover:underline">
          Donations
        </a>
        <a href="#" className="font-medium block text-sm hover:underline">
          Volunteering
        </a>
      </div>
    </div>
  );
};

export default AnimatedNav;