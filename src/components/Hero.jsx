import React from "react";
import { motion } from "motion/react";

const Hero = () => {
  return (
    <div
      id="hero"
      className="flex flex-col items-center gap-6 py-20 px-4 sm:px-12 lg:px-24 xl:px-40
     text-center w-full overflow-hidden text-gray-700 dark:text-white"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.7 }}
        viewport={{ once: true }}
        className="inline-flex items-center border border-gray-300 p-1.5 pr-4 rounded-full"
      >
        <img
          className="w-9 h-10 rotate-34 object-cover rounded-full"
          src="/public/anas.jpeg"
          alt=""
        />
        <img
          className="w-9 h-10 object-cover z-11 -ml-2 rounded-full"
          src="/public/obada.jpeg"
          alt=""
        />
        <img
          className="w-9 h-10 object-cover z-12 rounded-full -ml-2"
          src="/public/aobe.jpeg"
          alt=""
        />
        <p className="text-xs font-medium ml-2">Trusted by 10k+ people</p>
      </motion.div>

      <motion.h1
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.8 }}
        viewport={{ once: true }}
        className="text-4xl sm:text-5xl md:text-6xl xl:text-[84px] font-medium xl:leading-23.75 max-w-5xl"
      >
        Turning imagination into{" "}
        <span className="bg-linear-to-r from-[#5044E5] to-[#4d8cea] bg-clip-text text-transparent">
          digital
        </span>{" "}
        impact.
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 1 }}
        viewport={{ once: true }}
        className="text-sm sm:text-lg font-medium text-gray-500 dark:text-white/75 max-w-4/5 sm:max-w-lg pb-3"
      >
        Creating meaningful connections and turning big ideas into interactive
        digital experincees.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 2 }}
        viewport={{ once: true }}
        className="relative"
      >
        <img
          className="w-full max-w-6xl object-cover relative z-10 rounded-[35px]"
          src="/public/bzak-woman-3687080.jpg"
          alt=""
        />
        <div
          className="absolute -z-10 -top-30 -right-20 dark:z-1 sm:-top-30 sm:-right-25
           w-70/100 min-w-65 min-h-45 h-1/2 max-w-225 max-h-175
           blur-[90px] sm:blur-[120px]
           bg-indigo-500 dark:bg-indigo-500/60 rounded-full
           "
        />
      </motion.div>
    </div>
  );
};

export default Hero;
