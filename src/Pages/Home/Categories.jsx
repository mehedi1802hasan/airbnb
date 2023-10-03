import React from 'react';
import { GiWoodCabin } from 'react-icons/gi';
import { TbAdjustmentsHorizontal } from 'react-icons/tb';
 import { VscPreview } from 'react-icons/vsc';
import { SiSnowflake } from 'react-icons/si';
 import { TbBeach } from 'react-icons/tb';
 import { RiSailboatFill } from 'react-icons/ri';
  import { GiIsland } from 'react-icons/gi';
import CategoryBox from './CategoryBox';
import { useSearchParams } from 'react-router-dom';
import { categories } from '../CategoriesData';
// import { VscPreview } from 'react-icons/vsc';

const Categories = () => {
    const [params, setParams] = useSearchParams()
    const category = params.get('category')
    return (
<div>
<div className='pt-4 flex flex-row items-center justify-between overflow-x-auto'>
        {categories.map(item => (
          <CategoryBox
            label={item.label}
            icon={item.icon}
            key={item.label}
            selected={category === item.label}
          />
        ))}
      </div>
</div>
        // <div className='grid grid-cols-2  md:grid-cols-8 '>

        //     <div className='flex gap-2 w-3/5 h-14 justify-center items-center border-2  border-gray-500 rounded-xl'><TbAdjustmentsHorizontal></TbAdjustmentsHorizontal> <span>Filter</span></div>
        //     <div className="-ml-10 w-56 h-14   form-control border-2 border-gray-400 rounded-2xl">
        //         <label className="label cursor-pointer">
        //             <span className="label-text ">Display total before taxes</span>
        //             <input type="checkbox" className="toggle " checked />
        //         </label>
        //     </div>
        // </div>

    );
};

export default Categories;