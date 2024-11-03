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

export const BaseModal = ({title, newsDate, newsMonth, newsYear, newsDetails}) => {
  const [open, setOpen] = useState(false);
  return (
    <div className="grid">
        <div className="animated-btn-news w-[50%]"
            onClick={() => setOpen(true)}>
            <AnimatedBtn 
            text={'Read More →'}
            style={'w-full text-center bg-black px-4 text-white py-2'}/>
        </div>
      <DragCloseDrawer open={open} setOpen={setOpen}>
        <div className="mx-auto max-w-2xl space-y-4 text-neutral-400">
          <div className="news-popup-header">
            <h2 className="text-4xl font-bold text-neutral-200">
              {title}
            </h2>
            <p className="text-sm mt-4 mb-10 text-neutral-300">{newsDate} {newsMonth}, {newsYear}</p>
          </div>
          <h3 className="mt-10 text-xl text-neutral-50">
            {newsDetails}
          </h3>
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