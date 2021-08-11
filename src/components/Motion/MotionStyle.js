import { motion } from "framer-motion";

export const MotionStyle = (props) => {
  return (
    <motion.div
      className={props.className}
      drag
      dragConstraints={{
        top: -100,
        left: -100,
        right: 100,
        bottom: 100,
      }}
      animate={{ rotateX: 360 }}
      transition={{
        duration: 4,
        ease: "easeInOut",
        delay: 0,
        loop: Infinity,
        repeatDelay: 0,
      }}
    ></motion.div>
  );
};

export const MotionStyle2 = (props) => {
  return (
    <motion.div
      className={props.className}
      drag
      dragConstraints={{
        top: -100,
        left: -100,
        right: 100,
        bottom: 100,
      }}
      animate={{
        // scale: [1, 2, 1],
        x:[100.-100,50],
   
      }}
   
      transition={{
        duration: 5,
        ease: "easeInOut",
        delay: 3,
        loop: Infinity,
        repeatDelay: 0,
        times: [0.5, 0.5, 0.5],
      }}
    ></motion.div>
  );
};
