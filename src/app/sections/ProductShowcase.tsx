'use client';
import React, { useRef } from 'react';
import Product from '../assets/images/ProductImage.png';
import Pyramid from '../assets/images/pyramid.png';
import Ring from '../assets/images/torus.png';
import Image from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';

const ProductShowcase = () => {
  const productRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: productRef,
    offset: ['start end', 'end start'],
  });
  const translateY = useTransform(scrollYProgress, [0, 1], [300, -300]);
  return (
    <section ref={productRef}>
      <div className=' py-24 bg-gradient-to-b from-[#FFFFFF] to-[#D2DCFF] overflow-hidden relative'>
        <div className=' flex items-center justify-center rounded-xl flex-col gap-7'>
          <span className=' w-fit border border-[rgba(34, 34, 34, 0.10)] bg-[linear-gradient(to_right,#DD7DDF,#3BFFFF,#E1CD86,#BBCB92,#71C2EF,#DD7DDF,#E1CD86,#BBCB92,#71C2EF,#3BFFFF)] text-transparent bg-clip-text py-1 px-2 rounded-xl'>
            Boost your productivity
          </span>
          <h2 className=' text-3xl md:text-6xl font-semibold md:font-bold leading-8 md:leading-[60px] text-center tracking-[-0.32px] md:tracking-[-3.24px] max-w-[600px] bg-gradient-to-b from-black to-[#001E80] text-transparent bg-clip-text pb-2'>
            A more effective way to track progress
          </h2>
          <p className=' text-[22px] max-w-[600px] text-center font-normal leading-8 tracking-[-0.792px]'>
            Effortlessly turn your ideas into a fully functional, responsive,
            no-code SaaS website in just minutes with the set of free components
            for Framer.
          </p>
          <motion.div className=''>
            <Image src={Product} alt='product' />
          </motion.div>
          <motion.div
            className=' absolute -right-24 hidden md:inline-flex top-[570px] '
            style={{ translateY }}
          >
            <Image src={Pyramid} alt='pyramid' />
          </motion.div>
          <motion.div
            className=' absolute bottom-28 hidden md:inline-flex -left-28'
            style={{ translateY: translateY }}
          >
            <Image src={Ring} alt='ring' />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ProductShowcase;
