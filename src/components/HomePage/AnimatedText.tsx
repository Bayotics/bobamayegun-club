'use client'
import { motion } from "framer-motion";

interface PropValue {
    text: string[]
}
// Parent:
// const textVal = 'Unity through strength, strength through Community';
    // const conv = textVal.split('');
const AnimatedText: React.FC<PropValue> = ({ text }) => {
  

  return (
    <div className="anim-text">
      {text.map((el, i) => (
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: 0.25,
            delay: i / 10,
          }}
          key={i}
        >
          {el}{" "}
        </motion.span>
      ))}
    </div>
  );
}

export default AnimatedText;