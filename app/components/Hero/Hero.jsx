
"use client";

import Link from "next/link";
import DownloadCV from "./DownloadCV"
import Nav from "./Nav"


import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="h-screen">
      {/* HEADLINES */}
      <div className=" text-[3.5rem] xs:text-[4rem] mt-16 sm:text-[3.5rem] md:text-[5.5rem] lg:text-[7rem] xl:text-[7.5rem] 2xl:text-[7rem] leading-[1] font-semibold">
        {/* FIRST LINE */}
        <div className="overflow-hidden">
          <motion.h2
            initial={{ y: "100%" }}
            whileInView={{ y: 0 }}
            transition={{ ease: "easeInOut", duration: 0.5 }}
          >
            Frontend engineer,
          </motion.h2>
        </div>
        {/* SECOND LINE */}
        <div className="overflow-hidden">
          <motion.h2
            initial={{ y: "100%" }}
            whileInView={{ y: 0 }}
            transition={{ ease: "easeInOut", duration: 0.5, delay: 0.3 }}
          >
           obsessed with building
          </motion.h2>
        </div>
        {/* THIRD LINE */}
        <div className="overflow-hidden">
          <motion.h2
            initial={{ y: "100%" }}
            whileInView={{ y: 0 }}
            transition={{ ease: "easeInOut", duration: 0.5, delay: 0.6 }}
          >
            cool web apps<span className="text-accent">.</span>
          </motion.h2>
        </div>
        
      </div>

      {/* DESCRIPTIONS */}
      {/* <div className="mt-5 flex flex-wrap md:flex-nowrap gap-10">
        <div className="overflow-hidden">
          <motion.p
            initial={{ y: "-100%" }}
            whileInView={{ y: 0 }}
            transition={{ ease: "easeInOut", duration: 1, delay: 2.1 }}
            className="w-[25rem]"
          >
            Passionate Full-Stack Developer crafting cutting-edge web apps.
            Thrives in teams, problem-solver. Delivers solutions with coding
            passion.
          </motion.p>
        </div>
        <div className="overflow-hidden">
          <motion.p
            initial={{ y: "-100%" }}
            whileInView={{ y: 0 }}
            transition={{ ease: "easeInOut", duration: 1, delay: 2.3 }}
          >
            Adenuga Ibraheem<br />{" "}
          </motion.p>
        </div>
        <div className="overflow-hidden">
          <motion.p
            initial={{ y: "-100%" }}
            whileInView={{ y: 0 }}
            transition={{ ease: "easeInOut", duration: 1, delay: 2.5 }}
          >
            Based in Nigeria
          </motion.p>
        </div>
      </div>
       */}
      <Nav className=""/>

      {/* BACKGROUND OVERLAY */}
      <div className="hidden xl:block absolute right-36 top-24 w-[20rem] h-[20rem] z-[-1] rounded-full radial blur-3xl"></div>

      {/* LOWER CONTENTS */}
     
    </section>
  );
};

export default Hero;





