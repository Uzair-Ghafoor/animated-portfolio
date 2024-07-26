'use client';
import { motion } from 'framer-motion';
import AcmeLogo from '../assets/images/acme.png';
import ApexLogo from '../assets/images/apex.png';
import CelestialLogo from '../assets/images/celestial.png';
import EchoLogo from '../assets/images/echo.png';
import PulseLogo from '../assets/images/pulse.png';
import QuantumLogo from '../assets/images/quantum.png';
import Image from 'next/image';

const items = [
  {
    id: 1,
    logo: AcmeLogo,
  },
  {
    id: 2,
    logo: ApexLogo,
  },
  {
    id: 3,
    logo: CelestialLogo,
  },
  {
    id: 4,
    logo: EchoLogo,
  },
  {
    id: 5,
    logo: PulseLogo,
  },
  {
    id: 6,
    logo: QuantumLogo,
  },
];

const LogoTicker = () => {
  return (
    <div className=' md:py-12 py-8 bg-white overflow-hidden '>
      <div className=' container [mask-image:linear-gradient(to_right,transparent,black_25%,black_70%,transparent)]'>
        <motion.div
          className=' flex h-10 w-auto flex-none gap-14 pr-14'
          animate={{ translateX: '-50%' }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: 'linear',
            repeatType: 'loop',
          }}
        >
          {items.map((item) => {
            return <Image src={item.logo} key={item.id} alt='logo' />;
          })}
          {/* second set for animations */}
          {items.map((item) => {
            return <Image src={item.logo} key={item.id} alt='logo' />;
          })}
        </motion.div>
      </div>
    </div>
  );
};

export default LogoTicker;
