'use client';
import CheckWhite from '../assets/icons/checkwhite.svg';
import CheckBlack from '../assets/icons/checkblack.svg';
import { motion } from 'framer-motion';
const pricingItem = [
  {
    title: 'Free',
    monthlyPrice: 0,
    buttonText: 'Get started for free',
    popular: false,
    inverse: false,
    features: [
      'Up to 5 project members',
      'Unlimited tasks and projects',
      '2GB storage',
      'Integrations',
      'Basic support',
    ],
  },
  {
    title: 'Pro',
    monthlyPrice: 9,
    buttonText: 'Get started for free',
    popular: true,
    inverse: true,
    features: [
      'Up to 5 project members',
      'Unlimited tasks and projects',
      '50GB storage',
      'Integrations',
      'Priority support',
      'Advanced support',
      'Export support',
    ],
  },
  {
    title: 'Pro',
    monthlyPrice: 9,
    buttonText: 'Get started for free',
    popular: false,
    inverse: false,
    features: [
      'Up to 5 project members',
      'Unlimited tasks and projects',
      '200GB storage',
      'Integrations',
      'Dedicated account manager',
      'Custom fields',
      'Advanced analytics',
      'Export capabilities',
      'API access',
      'Advanced security features',
    ],
  },
];

const Pricing = () => {
  return (
    <section className=' py-24 bg-white'>
      <div className='container'>
        <h2 className='text-3xl md:text-6xl font-semibold md:font-bold leading-8 md:leading-[60px] text-center tracking-[-0.32px] md:tracking-[-3.24px] max-w-[600px] bg-gradient-to-b from-black to-[#001E80] text-transparent bg-clip-text pb-2 mx-auto'>
          Pricing
        </h2>
        <p className='text-[22px] text-center font-normal leading-8 tracking-[-0.792px] mx-auto max-w-[340px] sm:max-w-[540px] mt-5'>
          Free forever. Upgrade for unlimited tasks, better security, and
          exclusive features
        </p>
        <div className=' flex flex-col items-center justify-center lg:items-end gap-6 mt-16 lg:flex-row'>
          {pricingItem.map(
            ({
              title,
              monthlyPrice,
              buttonText,
              popular,
              inverse,
              features,
            }) => (
              <div
                key={title}
                className={` p-10 border border-[#F1F1F1] ${
                  inverse && 'bg-black text-white'
                } rounded-3xl h-fit w-fit shadow-2xl`}
              >
                <div className=' flex justify-between'>
                  <h3 className=' text-lg font-bold text-black/50'>{title}</h3>
                  {popular && (
                    <div className=' inline-flex text-sm px-4 py-1.5 rounded-lg border border-white/20'>
                      <motion.span
                        animate={{ backgroundPositionX: '-100%' }}
                        transition={{
                          repeat: Infinity,
                          repeatType: 'loop',
                          ease: 'linear',
                          duration: 1,
                        }}
                        className=' bg-[linear-gradient(to_right,#DD7DDF,#3BFFFF,#E1CD86,#BBCB92,#71C2EF,#DD7DDF,#E1CD86,#BBCB92,#71C2EF,#3BFFFF)] [background-size:200%] text-transparent bg-clip-text font-medium'
                      >
                        Popular
                      </motion.span>
                    </div>
                  )}
                </div>
                <div className='flex items-baseline gap-1 mt-[30px]'>
                  <span className=' text-4xl font-bold tracking-tighter leading-none'>
                    ${monthlyPrice}
                  </span>
                  <span className=' tracking-tight font-bold text-black/50'>
                    /month
                  </span>
                </div>
                <button
                  className={` btn btn-primary w-full mt-[30px] ${
                    inverse && 'bg-white text-black'
                  }`}
                >
                  {buttonText}
                </button>
                <ul className=' flex flex-col gap-5 mt-8'>
                  {features.map((feature) => (
                    <li
                      key={feature}
                      className=' text-sm flex items-center gap-4'
                    >
                      {inverse ? <CheckWhite /> : <CheckBlack />}
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )
          )}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
