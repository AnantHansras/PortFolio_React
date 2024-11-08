import React from 'react'
import { useState,forwardRef } from 'react'
import Languages from '../skills/Languages';
import Frameworks from '../skills/Frameworks';
import Subjects from '../skills/Subjects';
import { useSelector } from 'react-redux'
const Skills = forwardRef((props, ref) =>{

    const [active,setActive] = useState(1);
    const darkMode = useSelector((state) => state.darkMode.isDarkMode);
  return (
    <div ref={ref} className="pt-[129px] mb-12">
      <div
        className={`${
          darkMode ? 'bg-[rgba(50,50,50,0.3)] text-white' : 'bg-[#f6656e30] text-black'
        } rounded-lg p-4 md:p-12`}
      >
        <div
          className={`${
            darkMode ? 'text-white' : 'text-black'
          } font-bold text-2xl overflow-visible mx-auto text-center mb-10`}
        >
          SKILLS
        </div>

        <div
        className='my-4 flex border-b border-b-[#424854] text-sm md:text-base lg:text-lg mb-16'>
          <p
            className={`px-2 sm:px-4 py-1 sm:py-2 cursor-pointer ${
              active === 1
                ? `${darkMode ? 'text-yellow-400 border-b-yellow-400' : 'text-blue-600 border-b-blue-600'} border-b-2`
                : `${darkMode ? 'text-[#C5C7D4]' : 'text-gray-600'}`
            }`}
            onClick={() => setActive(1)}
          >
            Languages
          </p>
          <p
            className={`px-2 sm:px-4 py-1 sm:py-2 cursor-pointer ${
              active === 2
                ? `${darkMode ? 'text-yellow-400 border-b-yellow-400' : 'text-blue-600 border-b-blue-600'} border-b-2`
                : `${darkMode ? 'text-[#C5C7D4]' : 'text-gray-600'}`
            }`}
            onClick={() => setActive(2)}
          >
            Frameworks/Tools
          </p>
          <p
            className={`px-2 sm:px-4 py-1 sm:py-2 cursor-pointer ${
              active === 3
                ? `${darkMode ? 'text-yellow-400 border-b-yellow-400' : 'text-blue-600 border-b-blue-600'} border-b-2`
                : `${darkMode ? 'text-[#C5C7D4]' : 'text-gray-600'}`
            }`}
            onClick={() => setActive(3)}
          >
            Core Subjects
          </p>
        </div>

        {active === 1 && <Languages />}
        {active === 2 && <Frameworks />}
        {active === 3 && <Subjects />}
      </div>
    </div>
  );
});

export default Skills