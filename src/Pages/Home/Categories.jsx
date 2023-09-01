import React from 'react';
import { GiWoodCabin } from 'react-icons/gi';
import { TbAdjustmentsHorizontal } from 'react-icons/tb';
 import { VscPreview } from 'react-icons/vsc';
import { SiSnowflake } from 'react-icons/si';
 import { TbBeach } from 'react-icons/tb';
 import { RiSailboatFill } from 'react-icons/ri';
  import { GiIsland } from 'react-icons/gi';
// import { VscPreview } from 'react-icons/vsc';

const Categories = () => {
    return (
        <div className='grid grid-cols-2  md:grid-cols-8 '>

            <div className='flex flex-col justify-center items-center  '><GiWoodCabin className='text-2xl'></GiWoodCabin> <h4>cabin</h4></div>

            <div className='flex flex-col justify-center items-center  '><VscPreview className='text-2xl'></VscPreview> <h4>Amazing views</h4></div>

            <div className='flex flex-col justify-center items-center '><SiSnowflake className='text-2xl'></SiSnowflake> <h4>Lake</h4></div>

            <div className='flex flex-col justify-center items-center '><TbBeach className='text-2xl'></TbBeach> <h4>Beach</h4></div>

            <div className='flex flex-col justify-center items-center '><RiSailboatFill className='text-2xl'></RiSailboatFill> <h4>Boats</h4></div>

            <div className='flex flex-col justify-center items-center '><GiIsland className='text-2xl'></GiIsland> <h4>Islands</h4></div>

            <div className='flex gap-2 w-3/5 h-14 justify-center items-center border-2  border-gray-500 rounded-xl'><TbAdjustmentsHorizontal></TbAdjustmentsHorizontal> <span>Filter</span></div>
            <div className="-ml-10 w-56 h-14   form-control border-2 border-gray-400 rounded-2xl">
                <label className="label cursor-pointer">
                    <span className="label-text ">Display total before taxes</span>
                    <input type="checkbox" className="toggle " checked />
                </label>
            </div>
        </div>

    );
};

export default Categories;