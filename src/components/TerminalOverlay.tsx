"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

import { easeInOut } from "framer-motion"; // أو any easing function

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: easeInOut, // ✅ هذا مقبول لأنه دالة easing
    },
  },
};



const TerminalOverlay = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true,
    margin: "-100px 0px",
  });

  return (
    <motion.div
      ref={ref}
      variants={fadeInUp}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      className="absolute bottom-0 left-0 right-0 p-4"
    >
      <div className="relative bg-cyber-terminal-bg backdrop-blur-sm border border-border rounded-lg p-3 overflow-hidden font-mono">
        {/* Status bar */}
        <div className="flex items-center justify-between mb-2 border-b border-border pb-1">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-primary animate-pulse"></div>
            <p className="text-xs text-primary">SYSTEM ACTIVE</p>
          </div>
          <p className="text-xs text-muted-foreground">ID:78412.93</p>
        </div>

        <p className="text-sm text-foreground mb-2 tracking-tight">
          <span className="text-primary">/</span> WORKOUT ANALYSIS COMPLETE
        </p>

        <div className="space-y-1.5 text-xs text-muted-foreground">
          <div className="flex items-center">
            <div className="text-primary mr-2">01</div>
            <span>30 min strength training (upper body)</span>
          </div>
          <div className="flex items-center">
            <div className="text-primary mr-2">02</div>
            <span>20 min cardio (moderate intensity)</span>
          </div>
          <div className="flex items-center">
            <div className="text-primary mr-2">03</div>
            <span>10 min flexibility (recovery)</span>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default TerminalOverlay;
