"use client";
import Image from "next/image";
import { motion } from "framer-motion";

import Button from "./Button";
import { Dict } from "@/types/types";
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut" as const,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, scale: 0.8, x: 100 },
  visible: {
    opacity: 1,
    scale: 1,
    x: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut" as const,
    },
  },
};
interface HeroProps {
  dict: Dict;
  lang: "fa-ir" | "en-us";
}
const Hero = ({ dict, lang }: HeroProps) => {
  return (
    <section className="max-container padding-container flex flex-col gap-20 py-10 pb-32 md:gap-28 lg:py-20 xl:flex-row">
      <Image
        src="/hero.png"
        alt="hero"
        width={700}
        height={700}
        className={`absolute top-[300px] md:top-0 ${
          lang === "fa-ir" ? "left-0" : "right-0"
        }`}
      />

      <motion.div
        className="relative z-20 flex flex-1 flex-col xl:w-1/2"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <Image
          src="/camp.svg"
          alt="camp"
          width={50}
          height={50}
          className="absolute left-[-5px] top-[-30px] w-10 lg:w-[50px]"
        />

        <motion.h1 variants={itemVariants} className="bold-52 lg:bold-88 ">
          {dict["header"].title}
        </motion.h1>
        <motion.p
          variants={itemVariants}
          className="regular-16 mt-6 text-gray-30 xl:max-w-[520px]"
        >
          {dict["header"].subtitle}
        </motion.p>

        <motion.div
          variants={itemVariants}
          className="my-11 flex flex-wrap items-center gap-5"
        >
          <div className="flex items-center gap-2">
            {Array(5)
              .fill(1)
              .map((_, index) => (
                <Image
                  src="/star.svg"
                  key={index}
                  alt="star"
                  width={24}
                  height={24}
                />
              ))}
          </div>

          <p className="bold-16 lg:bold-20 text-blue-400">
            420k
            <span className="regular-16 lg:regular-20 mx-2 text-gray-300">
              {dict["header"].Reviews}
            </span>
          </p>
        </motion.div>

        <motion.div
          variants={itemVariants}
          className="flex flex-col w-full gap-3 sm:flex-row"
        >
          <Button
            type="button"
            title={dict["header"].Reviews}
            variant="btn_green"
          />
          <Button
            type="button"
            title={dict["header"].Reviews}
            icon="/play.svg"
            variant="btn_white_text"
          />
        </motion.div>
      </motion.div>

      <div className="relative flex flex-1 items-start">
        <motion.div
          className="relative z-20 flex w-[268px] flex-col gap-8 rounded-3xl bg-green-900 bg-opacity-80 backdrop-blur-md px-7 py-8 shadow-2xl"
          variants={cardVariants}
          initial="hidden"
          animate="visible"
        >
          {" "}
          <div className="flex flex-col">
            <div className="flexBetween">
              <p className="regular-16 text-gray-20">Location</p>
              <Image src="/close.svg" alt="close" width={24} height={24} />
            </div>
            <p className="bold-20 text-white">{dict["header"].AguasCaliente}</p>
          </div>
          <div className="flexBetween">
            <div className="flex flex-col">
              <p className="regular-16 block text-gray-20">
                {dict["header"].Elevation}
              </p>
              <p className="bold-20 text-white">173.28 mi</p>
            </div>
            <div className="flex flex-col">
              <p className="regular-16 block text-gray-20">
                {dict["header"].Distance}
              </p>
              <p className="bold-20 text-white">2.040 km</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
