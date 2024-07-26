'use client';
import React from 'react';
import { twMerge } from 'tailwind-merge';
import Review1 from '../assets/images/rerview1.jpg';
import Review2 from '../assets/images/review2.jpg';
import Review3 from '../assets/images/review3.jpg';
import Review4 from '../assets/images/review4.jpg';
import Review5 from '../assets/images/review5.jpg';
import Review6 from '../assets/images/review6.jpg';
import Review7 from '../assets/images/review7.jpg';
import Review8 from '../assets/images/review8.jpg';
import Review9 from '../assets/images/review9.jpg';
import Image from 'next/image';
import { motion } from 'framer-motion';

const reviews = [
  {
    text: 'This platform has revolutionized our workflow. The user-friendly interface and powerful features have significantly boosted our productivity.',
    username: '@johndoe123',
    img: Review1,
    name: 'John Doe',
  },
  {
    text: 'Amazing tool! It has all the functionalities we need and the customer support is outstanding. Highly recommended.',
    username: '@janedoe456',
    img: Review2,
    name: 'Jane Doe',
  },
  {
    text: "We have seen a dramatic improvement in our project management since switching to this SaaS platform. It's intuitive and efficient.",
    username: '@mikeb789',
    img: Review3,
    name: 'Mike Brown',
  },
  {
    text: "The best investment we've made for our business. The platform is reliable, scalable, and packed with useful features.",
    username: '@sarahwilliams',
    img: Review4,
    name: 'Sarah Williams',
  },
  {
    text: "Our team loves this tool! It's easy to use and has streamlined our processes. The support team is also very responsive and helpful.",
    username: '@robertjohnson',
    img: Review5,
    name: 'Robert Johnson',
  },
  {
    text: 'This SaaS platform has been a game-changer for our organization. We can now manage our tasks and projects more effectively.',
    username: '@emilyclark',
    img: Review6,
    name: 'Emily Clark',
  },
  {
    text: 'Highly intuitive and easy to use. The automation features have saved us countless hours and increased our overall efficiency.',
    username: '@davidmiller',
    img: Review7,
    name: 'David Miller',
  },
  {
    text: "Exceptional experience! The platform is robust and the team behind it is always ready to help. We couldn't be happier.",
    username: '@lauraadams',
    img: Review8,
    name: 'Laura Adams',
  },
  {
    text: 'A top-notch solution for our business needs. It integrates seamlessly with our existing tools and has greatly improved our workflow.',
    username: '@peterlee',
    img: Review9,
    name: 'Peter Lee',
  },
];

const firstColumn = reviews.slice(0, 3);
const secondColumn = reviews.slice(3, 6);
const thirdColumn = reviews.slice(6, 9);

const Testimonials = (props: {
  className?: string;
  reviews: typeof reviews;
  duration?: number;
}) => {
  return (
    <div className={`${props.className} h-[80vh]`}>
      <motion.div
        animate={{ translateY: '-50%' }}
        transition={{
          duration: props.duration || 10,
          repeat: Infinity,
          repeatType: 'loop',
          ease: 'linear',
        }}
        className={'flex flex-col gap-6 pb-6'}
      >
        {[...new Array(2)].fill(0).map((_, index) => (
          <React.Fragment key={index}>
            {props.reviews.map(({ img, text, username, name }) => (
              <div
                key={name}
                className=' p-10 w-fit h-fit rounded-2xl shadow-lg flex flex-col gap-6'
              >
                <p className=' max-w-[280px]'>{text}</p>
                <div className=' flex gap-3'>
                  <Image
                    src={img}
                    alt='img'
                    className=' w-11 h-11 object-cover rounded-full'
                  />
                  <div className=' flex flex-col'>
                    <span className=' font-semibold'>{name}</span>
                    <span className=' font-medium tracking-wide'>
                      {username}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </React.Fragment>
        ))}
      </motion.div>
    </div>
  );
};

const Testimonial = () => {
  return (
    <section className=' bg-white'>
      <div className=' container'>
        <div className=' flex justify-center w-fit mx-auto rounded-xl'>
          <motion.span
            animate={{ backgroundPositionX: '100%' }}
            transition={{
              repeat: Infinity,
              repeatType: 'loop',
              ease: 'linear',
              duration: 1,
            }}
            className=' w-fit border-2 border-[rgba(34, 34, 34, 0.10)] bg-[linear-gradient(to_right,#DD7DDF,#3BFFFF,#E1CD86,#BBCB92,#71C2EF,#DD7DDF,#E1CD86,#BBCB92,#71C2EF,#3BFFFF)] text-transparent bg-clip-text py-1 px-2 rounded-xl'
          >
            Testimonials
          </motion.span>
        </div>
        <h2 className='text-3xl md:text-6xl font-bold leading-8 md:leading-[60px] text-center tracking-[-0.32px] md:tracking-[-3.24px] max-w-[600px] bg-gradient-to-b from-black to-[#001E80] text-transparent bg-clip-text pb-2 mt-5 mx-auto'>
          What our users say
        </h2>
        <p className='text-[22px] max-w-[600px] text-center font-normal leading-8 tracking-[-0.792px] mx-auto mt-5'>
          From intuitive designs to powerful features, our app has become an
          essential tool for users around the world.
        </p>
        <div className='lg:h-32 md:h-24 h-16'></div>
        <div className=' flex justify-center gap-6 [mask-image:linear-gradient(to_bottom,transparent,black_25%,black_75%,transparent)]'>
          <Testimonials
            reviews={firstColumn}
            className=' hidden md:block '
            duration={15}
          />
          <Testimonials
            reviews={secondColumn}
            className=' hidden lg:block '
            duration={19}
          />
          <Testimonials reviews={thirdColumn} duration={17} />
        </div>
      </div>
      <div className=' md:h-32 h-16'></div>
    </section>
  );
};

export default Testimonial;
