import React, { useState } from "react";
import { motion } from "framer-motion";
import AnimatedCharacters from "./AnimatedTextEvent";

interface PlaceholderText {
  type: string;
  text: string;
}

export default function AnimatedText() {
  const [replay, setReplay] = useState<boolean>(true);
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

  const handleReplay = () => {
    setReplay(!replay);
    setTimeout(() => {
      setReplay(true);
    }, 600);
  };

  return (
    <motion.div
      className=""
      initial="hidden"
      animate={replay ? "visible" : "hidden"}
      variants={container}
    >
      <div className="text-purple-950 font-semibold text-[3.1rem] mt-32 leading-normal">
        {placeholderText.map((item, index) => {
          return <AnimatedCharacters {...item} key={index} />;
        })}
      </div>
      
    </motion.div>
  );
}

