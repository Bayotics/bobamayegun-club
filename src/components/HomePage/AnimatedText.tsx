import React, { useState } from "react";
import { motion } from "framer-motion";
import AnimatedCharacters from "./AnimatedTextEvent";

interface PlaceholderText {
  type: string;
  text: string;
}

export default function AnimatedText() {
  const [replay] = useState<boolean>(true);
  const placeholderText: PlaceholderText[] = [
    { type: "heading1", text: "Preserving Tradition," },
    {
      type: "heading2",
      text: "Celebrating Culture"
    }
  ];

  const container = {
    visible: {
      transition: {
        staggerChildren: 0.025
      }
    }
  };

  return (
    <motion.div
      className=""
      initial="hidden"
      animate={replay ? "visible" : "hidden"}
      variants={container}
    >
      <div className="text-purple-950 font-[500] text-[3rem] mt-32 leading-[1.3] home-banner-head-text">
        {placeholderText.map((item, index) => {
          return <AnimatedCharacters {...item} key={index} />;
        })}
      </div>
      
    </motion.div>
  );
}

