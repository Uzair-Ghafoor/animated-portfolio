'use client';
import React, { useRef } from 'react';
import {
  motion,
  useScroll,
  useTransform,
  useMotionValueEvent,
} from 'framer-motion';
import Arrow from '../assets/icons/arrowIcons.svg';
import Visual from '../assets/images/Visual.png';
import HalfTour from '../assets/images/half-torus.png';
import Cylinder from '../assets/images/cylinder.png';
import Image from 'next/image';
const Hero = () => {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ['start end', 'end start'],
  });
  const translateY = useTransform(scrollYProgress, [0, 1], [300, -300]);

  return (
    <section
      ref={heroRef}
      className=' pt-20 overscroll-x-auto md:overflow-hidden md:h-[710px] h-fit bg-[radial-gradient(ellipse_200%_100%_at_bottom_left,#183EC2,#EAEEFE_100%)]  '
    >
      <div className='container flex flex-col sm:flex-row relative'>
        <div className=''>
          {/* left side */}
          <div className=' flex flex-col gap-6 max-w-[478px]'>
            <div className=' border-[1px] border-[rgba(34,34,34,0.10)] w-fit px-[7px] bg-[linear-gradient(to_right,#b103fc,#0384fc,#fa8405,#9c05fa,#fc5e03,#5f05fa,#c75d5d,#b103fc,#71C2EF,#b103fc)] text-transparent bg-clip-text py-1 rounded-xl'>
              Version 2.0 is here
            </div>
            <h1 className=' text-5xl md:text-6xl font-semibold leading-[60px] bg-gradient-to-b from-black to-[#001E80] text-transparent bg-clip-text tracking-[-1.35] sm:text-[90px] sm:leading-[90px] sm:tracking-[-5.85px]'>
              Pathway to productivity
            </h1>
            <p className=' text-[#010D3E] text-[22px] font-normal leading-8 tracking-[-0.792px]'>
              Celebrate the joy of accomplishment with an app designed to track
              your progress, motivate your efforts, and celebrate your
              successes.
            </p>
            <div className=' flex items-center gap-3'>
              <button className=' btn btn-primary'>Get for free</button>
              <button className=' flex items-center justify-center gap-1'>
                Learn more
                <motion.span
                  animate={{ translateX: [-3, 3] }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    repeatType: 'mirror',
                  }}
                >
                  <Arrow className=' text-2xl' />
                </motion.span>
              </button>
            </div>
          </div>
        </div>
        {/* right side/bottom */}
        {/* main image */}
        <motion.div
          className=' md:absolute lg:bottom-[-330px] lg:left-[600px] lg:right-0  md:right-0 md:left-[470px] md:bottom-[-230px] sm:flex py-32    '
          animate={{
            translateY: [-30, 30],
          }}
          transition={{
            repeat: Infinity,
            repeatType: 'mirror',
            duration: 3,
            ease: 'easeInOut',
          }}
        >
          <Image src={Visual} alt='visual' />
        </motion.div>
        {/* half tour */}
        <motion.div
          className=' absolute lg:bottom-[-360px] hidden lg:inline-flex lg:right-[-20px]  '
          style={{ translateY: translateY }}
        >
          <Image draggable='false' src={HalfTour} alt='half tour' />
        </motion.div>
        {/* cylinder */}
        <motion.div
          className=' absolute lg:top-[-80px] lg:right-[590px] md:right-[115px] hidden sm:flex '
          style={{ translateY: translateY }}
        >
          <Image draggable='false' src={Cylinder} alt='Cylinder' />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
