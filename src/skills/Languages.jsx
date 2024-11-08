
// import React from 'react'
// import { TbBrandCpp } from "react-icons/tb";
// import { IoLogoJavascript } from "react-icons/io5";
// import { FaHtml5 } from "react-icons/fa";
// import { FaCss3Alt } from "react-icons/fa";
// import { FaPython } from "react-icons/fa";
// const Languages = () => {
//   return (
    
//     <div className='flex flex-wrap items-center justify-center gap-4 mb-10'>
//         <div className='mt-0 md:mt-4 group'>
//             <div className='flex justify-center rounded-2xl border-4 border-neutral-700 group-hover:border-white transition-all duration-200 p-4'>
//                 <TbBrandCpp className='text-6xl text-[#00599C]'/>
//             </div>
//             <p className='mt-2 text-lg text-center text-neutral-500 font-semibold group-hover:text-white transition-all duration-200'>C++</p>
//         </div>
        
//         <div className='mt-0 md:mt-4 group'>
//             <div className='flex justify-center rounded-2xl border-4 border-neutral-700 group-hover:border-white transition-all duration-200 p-4'>
//                 <FaCss3Alt className='text-6xl text-[#1572B6]'/>
//             </div>
//             <p className='mt-2 text-lg text-center text-neutral-500 font-semibold group-hover:text-white transition-all duration-200'>CSS</p>
//         </div>

//         <div className='mt-0 md:mt-4 group'>
//             <div className='flex justify-center rounded-2xl border-4 border-neutral-700 group-hover:border-white transition-all duration-200 p-4'>
//                 <FaHtml5 className='text-6xl text-[#E44D26]'/>
//             </div>
//             <p className='mt-2 text-lg text-center text-neutral-500 font-semibold group-hover:text-white transition-all duration-200'>HTML</p>
//         </div>

//         <div className='mt-0 md:mt-4 group'>
//             <div className='flex justify-center rounded-2xl border-4 border-neutral-700 group-hover:border-white transition-all duration-200 p-4'>
//                 <IoLogoJavascript className='text-6xl text-[#F7DF1E]'/>
//             </div>
//             <p className='mt-2 text-lg text-center text-neutral-500 font-semibold group-hover:text-white transition-all duration-200'>JavaScript</p>
//         </div>

//         <div className='mt-0 md:mt-4 group'>
//             <div className='flex justify-center rounded-2xl border-4 border-neutral-700 group-hover:border-white transition-all duration-200 p-4'>
//                 <FaPython className='text-6xl text-neutral-400'/>
//             </div>
//             <p className='mt-2 text-lg text-center text-neutral-500 font-semibold group-hover:text-white transition-all duration-200'>Python</p>
//         </div>
//     </div>
    
//   )
// }

// export default Languages

import React from 'react';
import { useSelector } from 'react-redux';
import { TbBrandCpp } from 'react-icons/tb';
import { IoLogoJavascript } from 'react-icons/io5';
import { FaHtml5, FaCss3Alt, FaPython } from 'react-icons/fa';

const Languages = () => {
  const darkMode = useSelector((state) => state.darkMode.isDarkMode);

  return (
    <div className="flex flex-wrap items-center justify-center md:gap-x-8 gap-4 mb-10">
      <div className="mt-0 md:mt-4 group">
        <div
          className={`flex justify-center rounded-2xl border-4 p-4 transition-all duration-200 ${
            darkMode ? 'border-neutral-700 group-hover:border-white' : 'border-neutral-400 group-hover:border-black'
          }`}
        >
          <TbBrandCpp className={`text-6xl ${darkMode ? 'text-[#00599C]' : 'text-[#00599C]'}`} />
        </div>
        <p
          className={`mt-2 text-lg text-center font-semibold transition-all duration-200 ${
            darkMode ? 'text-neutral-500 group-hover:text-white' : 'text-gray-500 group-hover:text-black'
          }`}
        >
          C++
        </p>
      </div>

      <div className="mt-0 md:mt-4 group">
        <div
          className={`flex justify-center rounded-2xl border-4 p-4 transition-all duration-200 ${
            darkMode ? 'border-neutral-700 group-hover:border-white' : 'border-neutral-400 group-hover:border-black'
          }`}
        >
          <FaCss3Alt className={`text-6xl ${darkMode ? 'text-[#1572B6]' : 'text-[#1572B6]'}`} />
        </div>
        <p
          className={`mt-2 text-lg text-center font-semibold transition-all duration-200 ${
            darkMode ? 'text-neutral-500 group-hover:text-white' : 'text-gray-500 group-hover:text-black'
          }`}
        >
          CSS
        </p>
      </div>

      <div className="mt-0 md:mt-4 group">
        <div
          className={`flex justify-center rounded-2xl border-4 p-4 transition-all duration-200 ${
            darkMode ? 'border-neutral-700 group-hover:border-white' : 'border-neutral-400 group-hover:border-black'
          }`}
        >
          <FaHtml5 className={`text-6xl ${darkMode ? 'text-[#E44D26]' : 'text-[#E44D26]'}`} />
        </div>
        <p
          className={`mt-2 text-lg text-center font-semibold transition-all duration-200 ${
            darkMode ? 'text-neutral-500 group-hover:text-white' : 'text-gray-500 group-hover:text-black'
          }`}
        >
          HTML
        </p>
      </div>

      <div className="mt-0 md:mt-4 group">
        <div
          className={`flex justify-center rounded-2xl border-4 p-4 transition-all duration-200 ${
            darkMode ? 'border-neutral-700 group-hover:border-white' : 'border-neutral-400 group-hover:border-black'
          }`}
        >
          <IoLogoJavascript className={`text-6xl ${darkMode ? 'text-[#F7DF1E]' : 'text-[#F7DF1E]'}`} />
        </div>
        <p
          className={`mt-2 text-lg text-center font-semibold transition-all duration-200 ${
            darkMode ? 'text-neutral-500 group-hover:text-white' : 'text-gray-500 group-hover:text-black'
          }`}
        >
          JavaScript
        </p>
      </div>

      <div className="mt-0 md:mt-4 group">
        <div
          className={`flex justify-center rounded-2xl border-4 p-4 transition-all duration-200 ${
            darkMode ? 'border-neutral-700 group-hover:border-white' : 'border-neutral-400 group-hover:border-black'
          }`}
        >
          <FaPython className={`text-6xl ${darkMode ? 'text-neutral-400' : 'text-neutral-400'}`} />
        </div>
        <p
          className={`mt-2 text-lg text-center font-semibold transition-all duration-200 ${
            darkMode ? 'text-neutral-500 group-hover:text-white' : 'text-gray-500 group-hover:text-black'
          }`}
        >
          Python
        </p>
      </div>
    </div>
  );
};

export default Languages;
