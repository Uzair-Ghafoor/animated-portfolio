import Image from 'next/image';
import Cube1 from '../assets/images/cube-helix-1.png';
import Cube2 from '../assets/images/cube-helix-2.png';
const Value = () => {
  return (
    <div className=' container py-24 flex flex-col'>
      <div className=' flex flex-col items-center justify-center rounded-xl gap-5 max-w-[340px] sm:max-w-[540px] mx-auto'>
        <span className='border-[2px] border-[rgba(34,34,34,0.10)] bg-[linear-gradient(to_right,#DD7DDF,#3BFFFF,#E1CD86,#BBCB92,#71C2EF,#DD7DDF,#E1CD86,#BBCB92,#71C2EF,#3BFFFF)] text-transparent bg-clip-text w-fit px-[7px] py-1 rounded-xl'>
          Everything you need
        </span>
        <h2 className=' text-center text-3xl sm:text-6xl font-semibold sm:font-bold leading-8 sm:leading-[60px] tracking-[-0.32px] sm:tracking-[-3.24px] max-w-72 sm:max-w-[540px] pb-3 bg-gradient-to-b from-black to-[#001E80] text-transparent bg-clip-text'>
          Streamlined for easy management
        </h2>
        <p className=' text-[22px] font-normal leading-8 tracking-[-0.792px] text-center'>
          Enjoy customizable lists, team work tools, and smart tracking all in
          one place. Set tasks, get reminders, and see your progress simply and
          quickly.
        </p>
      </div>
      {/* bottom */}
      <div className=' flex flex-col items-center justify-center lg:flex-row lg:gap-5 mb-5'>
        <div className=' bg-white w-fit h-fit p-10 rounded-xl shadow-xl mt-8'>
          <Image src={Cube2} alt='cube' />
          <h2 className=' text-[26px] text-center font-bold leading-[60px] tracking-[-1.04px]'>
            Integration ecosystem
          </h2>
          <p className=' text-[16px] text-center font-normal max-w-[345px] leading-5 tracking-[-0.16px]'>
            Enhance your productivity by connecting with your favorite tools,
            keeping all your essentials in one place.
          </p>
        </div>
        <div className=' bg-white w-fit h-fit p-10 rounded-xl shadow-xl mt-8'>
          <Image src={Cube1} alt='cube' />
          <h2 className=' text-[26px] text-center font-bold leading-[60px] tracking-[-1.04px]'>
            Goal setting and tracking
          </h2>
          <p className=' text-[16px] text-center font-normal max-w-[345px] leading-5 tracking-[-0.16px]'>
            Define and track your goals, breaking down objectives into
            achievable tasks to keep your targets in sight.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Value;
