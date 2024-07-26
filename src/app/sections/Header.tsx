import React from 'react';
import ArrowRight from '../assets/icons/Icons.svg';
import Logo from '../assets/images/logosaas.png';
import Image from 'next/image';
const Header = () => {
  return (
    <header className=' sticky top-0 backdrop-blur-sm z-50'>
      {/* uppernav */}
      <div className=' flex justify-center items-center py-3 bg-black  text-sm font-normal'>
        <div className=' inline-flex gap-1 items-center'>
          <p className=' hidden md:inline-flex text-white/60 text-sm font-normal'>
            Streamline your work flow and boost your productivity
          </p>
          <p className=' text-white'>Get started for free</p>
          <ArrowRight className=' text-lg' />
        </div>
      </div>
      {/* logo and hamburger */}
      <div className=' py-5'>
        <div className='px-5'>
          {/* logo */}
          <div className=' flex items-center justify-between'>
            <Image src={Logo} alt='logo' />
            {/* sm: menu */}
            <div className='flex flex-col gap-1 md:hidden pt-[6px]'>
              <div className='w-8 h-1 bg-black rounded-lg'></div>
              <div className='w-8 h-1 bg-black rounded-lg'></div>
              <div className='w-8 h-1 bg-black rounded-lg'></div>
            </div>

            {/* md:menu */}
            <nav className=' hidden md:flex gap-4 items-center justify-center text-[16px] font-normal leading-6 tracking-[-0.16px] text-[rgba(0,0,0,0.60)]'>
              <a href='#'>About</a>
              <a href='#'>Features</a>
              <a href='#'>Customers</a>
              <a href='#'>Updates</a>
              <a href='#'>Help</a>

              <button className=' btn btn-primary'>Get for free</button>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
