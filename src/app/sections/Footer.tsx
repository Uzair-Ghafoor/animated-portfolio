import Image from 'next/image';
import Logo from '../assets/images/logosaas.png';
import XSocial from '../assets/icons/x-social.svg';
import Tiktok from '../assets/icons/tiktok.svg';
import Pinterest from '../assets/icons/pinterest.svg';
import Linkedin from '../assets/icons/linkedin.svg';
import X from '../assets/icons/x-social.svg';
import Youtube from '../assets/icons/youtube.svg';
const Footer = () => {
  return (
    <footer className=' bg-black text-[#BCBCBC] text-sm py-10 text-center'>
      <div className=' container'>
        <Image
          src={Logo}
          alt='saas logo'
          className=' inline-flex justify-center'
        />
        <nav className=' flex flex-col md:flex-row md:justify-center gap-6 mt-6'>
          <a href='#'>About</a>
          <a href='#'>Features</a>
          <a href='#'>Customers</a>
          <a href='#'>Pricing</a>
          <a href='#'>Help</a>
          <a href='#'>Carrers</a>
        </nav>
        <div className=' flex justify-center gap-6 mt-6'>
          <Linkedin />
          <Pinterest />
          <Tiktok />
          <X />
          <XSocial />
          <Youtube />
        </div>
        <p className=' mt-6 '>
          &copy; 2024 Your Company, Inc. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
