"use client";

import { motion, useScroll, useSpring } from "framer-motion";

export function ScrollProgressBar() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 200,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <motion.div
      className="scroll-progress-track"
      style={{ scaleX }}
    >
      <div className="h-full w-full bg-gradient-to-r from-brass via-sage-dark to-brass" />
    </motion.div>
  );
}
