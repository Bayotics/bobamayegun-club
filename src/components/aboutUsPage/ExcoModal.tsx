'use client'
import { AnimatePresence, motion } from "framer-motion";
import { Dispatch, SetStateAction, useState } from "react";
import { FiUser, FiInfo } from "react-icons/fi";
import { RiTwitterXFill } from "react-icons/ri";
import { RxInstagramLogo } from "react-icons/rx";
import { FaFacebookF } from "react-icons/fa";
import Link from "next/link";

const ExcoModal = ({excoName, title, description, xLink, fbLink, igLink}) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="">
      <button
        onClick={() => setIsOpen(true)}
        className="mt-2 text-2xl"
      >
        <FiInfo />
      </button>
      <SpringModal isOpen={isOpen} 
        setIsOpen={setIsOpen}
        excoName={excoName}
        title= {title}
        description={description}
        xLink={xLink}
        fbLink={fbLink}
        igLink={igLink}
         />
    </div>
  );
};

const SpringModal = ({
  excoName, 
  title, 
  description,
  xLink,
  fbLink,
  igLink,
  isOpen,
  setIsOpen,
}: {
  isOpen: boolean;
  excoName: string;
  title: string;
  description: string;
  xLink: string;
  fbLink: string;
  igLink: string;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
}) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setIsOpen(false)}
          className="bg-slate-900/20 backdrop-blur p-8 fixed inset-0 z-50 grid place-items-center overflow-y-scroll cursor-pointer"
        >
          <motion.div
            initial={{ scale: 0, rotate: "12.5deg" }}
            animate={{ scale: 1, rotate: "0deg" }}
            exit={{ scale: 0, rotate: "0deg" }}
            onClick={(e) => e.stopPropagation()}
            className="bg-gradient-to-br from-violet-600 to-indigo-600 text-white p-6 rounded-lg w-full max-w-lg shadow-xl cursor-default relative overflow-hidden"
          >
            <FiUser className="text-white/10 rotate-12 text-[250px] absolute z-0 -top-24 -left-24" />
            <div className="relative z-10 team-modal-box">
              <div className="bg-white w-16 h-16 mb-2 rounded-full text-3xl text-indigo-600 grid place-items-center mx-auto">
                <FiUser />
              </div>
              <h3 className="text-3xl font-bold text-center">
                {excoName}
              </h3>
              <h6 className = 'text-center'>
                {title}
              </h6>
              <p className="text-center mt-6">
                {description}
              </p>
              <div className="flex mt-8 justify-center gap-4 socials-for-teams">
                <div className="footer-x bg-white p-2 rounded-full">
                    <Link href={xLink}>
                        <RiTwitterXFill className="text-purple-700" />
                    </Link>
                </div>
                <div className="footer-ig bg-white p-2 rounded-full">
                    <Link href={igLink}>
                        <RxInstagramLogo className="text-purple-700" />
                    </Link>
                </div>
                <div className="footer-fb bg-white p-2 rounded-full">
                    <Link href={fbLink}>
                        <FaFacebookF className="text-purple-700" />
                    </Link>
                </div>
             </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ExcoModal;