import React from 'react';
import { FaSearch } from 'react-icons/fa';
import { TbWorld } from 'react-icons/tb';
import { AiOutlineMenu } from 'react-icons/ai';
import { RxAvatar } from 'react-icons/rx';

const Navbar = () => {
  return (
    <div className=' fixed py-3 border-b-2 border-gray-200 w-11/12  bg-white z-10 shadow-sm'>
      {/** logo part */}
      <div className='flex flex-row justify-between items-center '>
        <div class="hidden md:flex items-center">
          <img class="h-8 w-8" src="https://i.ibb.co/JBtFs53/favicon.png" alt="airbnb logo" />
          <h3 class="ml-2 text-red-600 font-bold text-2xl">airbnb</h3>
        </div>

        {/** search part */}

        <div className='flex gap-3 justify-center items-center   border-2 border-gray-300 p-3 rounded-full '>
          <h3 className='font-semibold'>anywhere</h3> |
          <h3 className='font-semibold'>any week</h3> |
          <h3>addguests</h3>
          <h3 className=' bg-red-500 border-2 rounded-full p-1 text-white border-red-500'><FaSearch></FaSearch></h3>
        </div>

        {/** munu part */}

        <div className='md:flex items-center justify-center gap-4 hidden '>
          <div><button className='  hover:bg-gray-200 hover:border-2 rounded-3xl p-2 '>airbnb your home</button></div>
          <div className='text-2xl'> <TbWorld></TbWorld></div>
          <div className='flex justify-center items-center text-xl gap-2 border-2 border-gray-400 rounded-full py-2 p-3 '>
            <AiOutlineMenu></AiOutlineMenu>
            <RxAvatar></RxAvatar>
          </div>
        </div>
      </div>
    </div>

  );
};

export default Navbar;