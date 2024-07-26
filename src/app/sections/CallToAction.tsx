'use client';
import React, { useRef } from 'react';
import Spiral from '../assets/images/helix2.png';
import EmojiStart from '../assets/images/emojistar.png';
import Arrow from '../assets/icons/arrowIcons.svg';
import Image from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';
const CallToAction = () => {
  const actionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: actionRef,
    offset: ['start end', 'end start'],
  });
  const translateY = useTransform(scrollYProgress, [0, 1], [-60, 300]);
  return (
    <section
      ref={actionRef}
      className='bg-gradient-to-b from-[#FFFFFF] to-[#D2DCFF] py-24'
    >
      <div className='container flex flex-col gap-10 relative'>
        <h2 className=' text-3xl md:text-6xl font-semibold md:font-bold leading-8 md:leading-[60px] text-center tracking-[-0.32px] md:tracking-[-3.24px] max-w-[600px] bg-gradient-to-b from-black to-[#001E80] text-transparent bg-clip-text mx-auto pb-2'>
          Sign up for free today
        </h2>
        <p className='text-[22px] sm:max-w-[500px] max-w-[400px] text-center font-normal leading-8 tracking-[-0.792px] mx-auto'>
          Celebrate the joy of accomplishment with an app designed to track your
          progress and motivate your efforts.
        </p>
        <div className=' flex items-center justify-center gap-3'>
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
              <Arrow />
            </motion.span>
          </button>
        </div>
        <motion.div
          className=' absolute hidden sm:inline-flex lg:left-0 md:-left-52 -top-28'
          style={{ translateY }}
        >
          <Image src={EmojiStart} alt='emoji star' />
        </motion.div>
        <motion.div
          className=' absolute hidden sm:inline-flex lg:-right-7 md:-right-48'
          style={{ translateY }}
        >
          <Image src={Spiral} alt='spiral' />
        </motion.div>
      </div>
    </section>
  );
};

export default CallToAction;
