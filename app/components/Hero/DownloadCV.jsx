import React from 'react'
import { motion, useTime, useTransform } from 'framer-motion';
import styles from './Hero.module.css';
import Image from 'next/image';
const DownloadCV = () => {
  return (
    <a
      href="/"
      target={'_blank'}
      className="magic-puffIn"
      rel="noreferrer"
    >
      <div
        className={
          'relative mx-auto mt-36 aspect-square h-56 rounded-full border-2 border-white text-primary md:mt-16 lg:mt-28 lg:h-72 xl:mt-16'
        }
      >
        {/* Background text `</>` */}
        <div className="background absolute top-0 left-0 z-10 flex h-full w-full -rotate-45 items-center justify-center text-[13rem] font-black opacity-20 ">
        <Image src="/images/doc.png" alt="Image 1" width={300} height={200} />
        </div>
        {/* Download CV btn */}


        {/* Box that pop */}
        <div className="popBox absolute top-1/2 left-1/2 z-10 h-0 w-0 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary transition-all duration-500"></div>

        {/* Spinner */}
        <Arc runnong_time={2000} style={styles.arc_2} />
        <Arc runnong_time={1800} style={styles.arc_1} />
        <Arc runnong_time={1600} style={styles.arc_3} />

      </div>
    </a>
  );
};


export default DownloadCV


const Arc = ({ runnong_time, style }) => {
  const time = useTime();
  const rotate = useTransform(time, [0, runnong_time], [0, 360], {
    clamp: false,
  });
  return (
    <motion.div
      style={{
        rotate,
      }}
      className={`absolute rounded-full border-transparent before:absolute before:h-3 before:w-3 before:rounded-full before:bg-base-content after:absolute after:h-3 after:w-3 after:rounded-full after:bg-base-content ${style}`}
    />
  );
};

