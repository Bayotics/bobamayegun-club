'use client'

import React, { Dispatch, ReactNode, SetStateAction, useState } from "react";
import useMeasure from "react-use-measure";
import {
  useDragControls,
  useMotionValue,
  useAnimate,
  motion,
} from "framer-motion";
import AnimatedBtn from "../HomePage/AnimatedBtnForAbout";

export const BaseModal = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="grid">
        <div className="animated-btn-history w-[40%]"
            onClick={() => setOpen(true)}>
            <AnimatedBtn 
            text={'Read Full History'}
            style={'w-full text-center bg-black px-4 text-white py-2'}/>
        </div>
      <DragCloseDrawer open={open} setOpen={setOpen}>
        <div className="mx-auto max-w-2xl space-y-4 text-neutral-400">
          <h2 className="text-4xl font-bold text-neutral-200">
            Bobamayegun Okunrin Akile Ijebu: A Celebration of Ijebu Heritage
          </h2>
          <p>
            Founded in 2008 by Chief Wasiu Noman, Bobamayegun was born 
            out of a deep desire to preserve, promote, and share the 
            rich and diverse history of the Ijebu people. For centuries, 
            the Ijebu Kingdom has held a unique place within Nigeria, recognized for 
            its influential role in trade, a distinct cultural identity, and a 
            lineage of leaders who have preserved Ijebu customs and values through generations. 
            Our online community, Bobamayegun, is dedicated to capturing the essence of our heritage, 
            from historical legacies and traditional practices to 
            contemporary celebrations and communal development.
          </p>
          <h3 className="mt-3 text-2xl font-semibold">
            Founding of Bobamayegun
          </h3>
          <p>
            Chief Wasiu Noman, a respected Ijebu elder and 
            custodian of our traditions, founded Bobamayegun with a vision to 
            unify Ijebu communities both within Nigeria and in the diaspora. 
            In an era of rapid globalization, Chief Wasiu saw the importance of 
            creating a digital space where Ijebu descendants could connect with their 
            roots and access historical knowledge, cultural practices, 
            and community updates. Recognizing that many younger Ijebu 
            were disconnected from their heritage, Chief Wasiu worked 
            diligently to build a community that would serve as a 
            virtual gathering place and a cultural archive for future generations.
            <br/><br/>
            Since its inception, Bobamayegun has grown to become more than just a community; 
            it is a cultural institution. Moving forward, we are committed to 
            expanding our content, offering more interactive events, and establishing 
            educational programs that can bring Ijebu history and culture to schools, 
            both locally and internationally. Our goal is to reach more Ijebu people 
            and ensure that our heritage is not only remembered but celebrated 
            and passed down with pride. Through Chief Wasius legacy, 
            we continue to uphold the vision that inspired the creation of 
            Bobamayegun, ensuring the timeless traditions of the Ijebu people 
            endure for generations to come.
          </p>
        </div>
      </DragCloseDrawer>
    </div>
  );
};

interface Props {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
  children?: ReactNode;
}

const DragCloseDrawer = ({ open, setOpen, children }: Props) => {
  const [scope, animate] = useAnimate();
  const [drawerRef, { height }] = useMeasure();

  const y = useMotionValue(0);
  const controls = useDragControls();

  const handleClose = async () => {
    animate(scope.current, {
      opacity: [1, 0],
    });

    const yStart = typeof y.get() === "number" ? y.get() : 0;

    await animate("#drawer", {
      y: [yStart, height],
    });

    setOpen(false);
  };

  return (
    <>
      {open && (
        <motion.div
          ref={scope}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          onClick={handleClose}
          className="fixed inset-0 z-50 bg-neutral-950/70"
        >
          <motion.div
            id="drawer"
            ref={drawerRef}
            onClick={(e) => e.stopPropagation()}
            initial={{ y: "100%" }}
            animate={{ y: "0%" }}
            transition={{
              ease: "easeInOut",
            }}
            className="absolute bottom-0 h-[75vh] w-full overflow-hidden rounded-t-3xl bg-neutral-900"
            style={{ y }}
            drag="y"
            dragControls={controls}
            onDragEnd={() => {
              if (y.get() >= 100) {
                handleClose();
              }
            }}
            dragListener={false}
            dragConstraints={{
              top: 0,
              bottom: 0,
            }}
            dragElastic={{
              top: 0,
              bottom: 0.5,
            }}
          >
            <div className="absolute left-0 right-0 top-0 z-10 flex justify-center bg-neutral-900 p-4">
              <button
                onPointerDown={(e) => {
                  controls.start(e);
                }}
                className="h-2 w-14 cursor-grab touch-none rounded-full bg-neutral-700 active:cursor-grabbing"
              ></button>
            </div>
            <div className="relative z-0 h-full overflow-y-scroll p-4 pt-12">
              {children}
            </div>
          </motion.div>
        </motion.div>
      )}
    </>
  );
};