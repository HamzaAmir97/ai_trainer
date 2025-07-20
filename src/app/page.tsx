"use client";
// import TerminalOverlay from "@/components/TerminalOverlay";
import TerminalOverlay from "@/components/TerminalOverlay";
import { Button } from "@/components/ui/button";
import UserPrograms from "@/components/UserProgramsn";
// import UserPrograms from "@/components/UserPrograms";
import { ArrowRightIcon } from "lucide-react";
import Link from "next/link";
import { motion, useInView, Variants } from "framer-motion";
import { useRef } from "react";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const HomePage = () => {
  const leftContentRef = useRef(null);
  const rightContentRef = useRef(null);
  const isLeftInView = useInView(leftContentRef, { once: true, margin: "-100px" });
  const isRightInView = useInView(rightContentRef, { once: true, margin: "-100px" });

  return (
    <motion.div variants={fadeUp} initial="hidden" animate={isLeftInView ? "visible" : "hidden"} className="flex flex-col min-h-screen text-foreground overflow-hidden">
      <motion.section variants={fadeUp} initial="hidden" animate={isLeftInView ? "visible" : "hidden"} className="relative z-10 py-24 flex-grow">
        <motion.div variants={fadeUp} initial="hidden" animate={isLeftInView ? "visible" : "hidden"} className="container mx-auto px-4">
          <motion.div variants={fadeUp} initial="hidden" animate={isLeftInView ? "visible" : "hidden"} className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative">
            {/* CORNER DECARATION */}
            <motion.div variants={fadeUp} initial="hidden" animate={isLeftInView ? "visible" : "hidden"} className="absolute -top-10 left-0 w-40 h-40 border-l-2 border-t-2" />

            {/* LEFT SIDE CONTENT */}
            <motion.div
              ref={leftContentRef}
              variants={fadeUp}
              initial="hidden"
              animate={isLeftInView ? "visible" : "hidden"}
              className="lg:col-span-7 space-y-8 ml-10 relative"
            >
              <motion.h1
                variants={fadeUp}
                initial="hidden"
                animate={isLeftInView ? "visible" : "hidden"}
                className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight"
              >
                <motion.div variants={fadeUp} initial="hidden" animate={isLeftInView ? "visible" : "hidden"}>
                  <motion.span variants={fadeUp} initial="hidden" animate={isLeftInView ? "visible" : "hidden"} className="text-foreground">Transform</motion.span>
                </motion.div>
                <motion.div variants={fadeUp} initial="hidden" animate={isLeftInView ? "visible" : "hidden"}>
                  <motion.span variants={fadeUp} initial="hidden" animate={isLeftInView ? "visible" : "hidden"} className="text-primary">Your Body</motion.span>
                </motion.div>
                <motion.div variants={fadeUp} initial="hidden" animate={isLeftInView ? "visible" : "hidden"} className="pt-2">
                  <motion.span variants={fadeUp} initial="hidden" animate={isLeftInView ? "visible" : "hidden"} className="text-foreground">With Advanced</motion.span>
                </motion.div>
                <motion.div variants={fadeUp} initial="hidden" animate={isLeftInView ? "visible" : "hidden"} className="pt-2">
                  <motion.span variants={fadeUp} initial="hidden" animate={isLeftInView ? "visible" : "hidden"} className="text-foreground">AI</motion.span>
                  <motion.span variants={fadeUp} initial="hidden" animate={isLeftInView ? "visible" : "hidden"} className="text-primary"> Technology</motion.span>
                </motion.div>
              </motion.h1>

              {/* SEPERATOR LINE */}
              <motion.div
                variants={fadeUp}
                initial="hidden"
                animate={isLeftInView ? "visible" : "hidden"}
                className="h-px w-full bg-gradient-to-r from-primary via-secondary to-primary opacity-50"
              ></motion.div>

              <motion.p
                variants={fadeUp}
                initial="hidden"
                animate={isLeftInView ? "visible" : "hidden"}
                className="text-xl text-muted-foreground w-2/3"
              >
                Talk to our AI assistant and get personalized diet plans and workout routines
                designed just for you
              </motion.p>

              {/* STATS */}
              <motion.div
                variants={fadeUp}
                initial="hidden"
                animate={isLeftInView ? "visible" : "hidden"}
                className="flex items-center gap-10 py-6 font-mono"
              >
                <motion.div variants={fadeUp} initial="hidden" animate={isLeftInView ? "visible" : "hidden"} className="flex flex-col">
                  <motion.div   variants={fadeUp} initial="hidden" animate={isLeftInView ? "visible" : "hidden"} className="text-2xl text-primary">500+</motion.div>
                  <motion.div variants={fadeUp} initial="hidden" animate={isLeftInView ? "visible" : "hidden"} className="text-xs uppercase tracking-wider">ACTIVE USERS</motion.div>
                </motion.div>
                <motion.div variants={fadeUp} initial="hidden" animate={isLeftInView ? "visible" : "hidden"}    className="h-12 w-px bg-gradient-to-b from-transparent via-border to-transparent"></motion.div>
                <motion.div variants={fadeUp} initial="hidden" animate={isLeftInView ? "visible" : "hidden"} className="flex flex-col">
                  <motion.div variants={fadeUp} initial="hidden" animate={isLeftInView ? "visible" : "hidden"} className="text-2xl text-primary">3min</motion.div>
                  <motion.div className="text-xs uppercase tracking-wider">GENERATION</motion.div>
                </motion.div>
                <motion.div variants={fadeUp} initial="hidden" animate={isLeftInView ? "visible" : "hidden"} className="h-12 w-px bg-gradient-to-b from-transparent via-border to-transparent"></motion.div>
                <motion.div variants={fadeUp} initial="hidden" animate={isLeftInView ? "visible" : "hidden"}  className="flex flex-col">
                    <motion.div className="text-2xl text-primary">100%</motion.div>
                    <motion.div className="text-xs uppercase tracking-wider">PERSONALIZED</motion.div>
                </motion.div>
              </motion.div>

              {/* BUTTON */}
              <motion.div
                variants={fadeUp}
                initial="hidden"
                animate={isLeftInView ? "visible" : "hidden"}
                className="flex flex-col sm:flex-row gap-4 pt-6"
              >
                <Button
                  size="lg"
                  asChild
                  className="overflow-hidden bg-primary text-primary-foreground px-8 py-6 text-lg font-medium"
                >
                  <Link href={"/generate-program"} className="flex items-center font-mono">
                    Build Your Program
                    <ArrowRightIcon className="ml-2 size-5" />
                  </Link>
                </Button>
              </motion.div>
            </motion.div>

            {/* RIGHT SIDE CONTENT */}
            <motion.div
              ref={rightContentRef}
              variants={fadeUp}
              initial="hidden"
              animate={isRightInView ? "visible" : "hidden"}
              className="lg:col-span-5 relative"
            >
              {/* CORNER PIECES */}
              <motion.div variants={fadeUp} initial="hidden" animate={isRightInView ? "visible" : "hidden"} className="absolute -inset-4 pointer-events-none">
                <motion.div className="absolute top-0 left-0 w-16 h-16 border-l-2 border-t-2 border-border" />
                <motion.div className="absolute top-0 right-0 w-16 h-16 border-r-2 border-t-2 border-border" />
                <motion.div className="absolute bottom-0 left-0 w-16 h-16 border-l-2 border-b-2 border-border" />
                <motion.div className="absolute bottom-0 right-0 w-16 h-16 border-r-2 border-b-2 border-border" />
              </motion.div>

              {/* IMAGE CONTANINER */}
              <motion.div variants={fadeUp} initial="hidden" animate={isRightInView ? "visible" : "hidden"} className="relative aspect-square max-w-lg mx-auto">
                <motion.div className="relative overflow-hidden rounded-lg bg-cyber-black">
                  <motion.img
                  variants={fadeUp}
                  
                    src="/hero-ai3.png"
                    alt="AI Fitness Coach"
                    className="size-full object-cover object-center"
                  />

                  {/* SCAN LINE */}
                  <motion.div className="absolute inset-0 bg-[linear-gradient(transparent_0%,transparent_calc(50%-1px),var(--cyber-glow-primary)_50%,transparent_calc(50%+1px),transparent_100%)] bg-[length:100%_8px] animate-scanline pointer-events-none" />

                  {/* DECORATIONS ON TOP THE IMAGE */}
                  <motion.div className="absolute inset-0 pointer-events-none">
                    <motion.div className="absolute top-1/3 left-1/3 w-1/3 h-1/3 border border-primary/40 rounded-full" />

                    {/* Targeting lines */}
                    <motion.div className="absolute top-1/2 left-0 w-1/4 h-px bg-primary/50" />
                    <motion.div className="absolute top-1/2 right-0 w-1/4 h-px bg-primary/50" />
                    <motion.div className="absolute top-0 left-1/2 h-1/4 w-px bg-primary/50" />
                    <motion.div className="absolute bottom-0 left-1/2 h-1/4 w-px bg-primary/50" />
                  </motion.div>

                  {/* OVERLAY  */}
                  <motion.div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
                </motion.div>

                {/* TERMINAL OVERLAY */}
                <TerminalOverlay />
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.section>

      <UserPrograms />
    </motion.div>
  );
};
export default HomePage;