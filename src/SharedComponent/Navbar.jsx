import React, { useState, useEffect, useRef } from 'react';
import { FaSearch } from 'react-icons/fa';
import { TbWorld } from 'react-icons/tb';
import { AiOutlineMenu } from 'react-icons/ai';
import { RxAvatar } from 'react-icons/rx';

const Navbar = () => {
  const [isLorem300Open, setIsLorem300Open] = useState(false);
  const lorem300Ref = useRef(null);

  const toggleLorem300 = () => {
    setIsLorem300Open(!isLorem300Open);
  };

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (lorem300Ref.current && !lorem300Ref.current.contains(event.target)) {
        setIsLorem300Open(false);
      }
    };

    if (isLorem300Open) {
      document.addEventListener('mousedown', handleOutsideClick);
    } else {
      document.removeEventListener('mousedown', handleOutsideClick);
    }

    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, [isLorem300Open]);

  return (
    <div className={`fixed py-3 border-b-2 border-gray-200 w-11/12 bg-white z-10 shadow-sm ${isLorem300Open ? 'h-44' : ''}`}>
      <div className='flex flex-row justify-between items-center'>
        <div className={`hidden md:flex  items-center ${isLorem300Open ? 'hidden' : ''}`}>
          <img className='h-8 w-8' src='https://i.ibb.co/JBtFs53/favicon.png' alt='airbnb logo' />
          <h3 className='ml-2  text-red-600 font-bold text-2xl'>airbnb</h3>
        </div>

        <div className={`flex gap-3 justify-center items-center border-2 border-gray-300 p-3 rounded-full ${isLorem300Open ? 'hidden' : ''}`}>
          <h3 className='font-semibold'>anywhere</h3> |
          <h3 className='font-semibold' onClick={toggleLorem300}>any week</h3> |
          <h3>add guests</h3>
          <h3 className='bg-red-500 border-2 rounded-full p-1 text-white border-red-500'>
            <FaSearch></FaSearch>
          </h3>
        </div>
        {/* Display the Lorem300 text when "any week" is clicked */}
        {isLorem300Open && (
          <div className='  text-black'>
            <div className='flex gap-3 justify-center items-center p-3 rounded-full'>
              <h3 className='font-semibold'>stay</h3> |
              <h3 className='font-semibold'>experience</h3> |
              <h3 className='bg-red-500 border-2 rounded-full p-1 text-white border-red-500'>
            <FaSearch></FaSearch>
          </h3>

       
            </div>
    
            <div className='flex'>
          <div>
            <h3>Where</h3>
            <input type="text" placeholder='search destination' />
          </div>
          <div>
            <button>checkIn</button>
          </div>
          <div>
            CheckOUt
          </div>
          <div>
            <button>Who</button>
            <button>search</button>
          </div>
        </div>
          </div>
        )}
        <div className={`md:flex items-center justify-center gap-4 ${isLorem300Open ? '' : 'hidden'}`} ref={lorem300Ref}>
          <div><button className='hover:bg-gray-200 hover:border-2 rounded-3xl p-2'>airbnb your home</button></div>
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
