import React from 'react'
import { SiPostman } from "react-icons/si";
import { SiMongodb } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { SiMongoose } from "react-icons/si";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiRedux } from "react-icons/si";
import { useSelector } from 'react-redux'
const Frameworks = () => {
    const darkMode = useSelector((state) => state.darkMode.isDarkMode);
  return (
    // <div className='flex flex-wrap items-center justify-center gap-4 mb-10'>
    //     <div className='mt-0 md:mt-4 group'>
    //         <div
    //   className={`rounded-2xl flex justify-center border-4 ${
    //     darkMode ? 'border-neutral-700 group-hover:border-white' : 'border-white group-hover:border-black'
    //   } transition-all duration-200 p-4`}
    // >
    //   <RiTailwindCssFill className={`${darkMode ? 'text-cyan-700' : 'text-cyan-500'} text-6xl`} />
    // </div>
    // <p
    //   className={`mt-2 text-lg text-center font-semibold transition-all duration-200 ${
    //     darkMode ? 'text-neutral-500 group-hover:text-white' : 'text-gray-600 group-hover:text-black'
    //   }`}
    // >
    //   Tailwind
    // </p>
    //     </div>

    //     <div className='mt-0 md:mt-4 group'>
    //         <div className='rounded-2xl flex justify-center border-4 border-neutral-700 group-hover:border-white transition-all duration-200 p-4'>
    //             <SiRedux className='text-6xl text-purple-700'/>
    //         </div>
    //         <p className='mt-2 text-lg text-center text-neutral-500 font-semibold group-hover:text-white transition-all duration-200'>Redux</p>
    //     </div>
        
    //     <div className='mt-0 md:mt-4 group'>
    //         <div className='rounded-2xl flex justify-center border-4 border-neutral-700 group-hover:border-white transition-all duration-200 p-4'>
    //             <FaNode className='text-6xl text-yellow-400'/>
    //         </div>
    //         <p className='mt-2 text-lg text-center text-neutral-500 font-semibold group-hover:text-white transition-all duration-200'>NodeJS</p>
    //     </div>

    //     <div className='mt-0 md:mt-4 group'>
    //         <div className='rounded-2xl flex justify-center border-4 border-neutral-700 group-hover:border-white transition-all duration-200 p-4'>
    //             <FaReact className='text-6xl text-cyan-400'/>
    //         </div>
    //         <p className='mt-2 text-lg text-center text-neutral-500 font-semibold group-hover:text-white transition-all duration-200'>React</p>
    //     </div>

    //     <div className='mt-0 md:mt-4 group'>
    //         <div className='rounded-2xl flex justify-center border-4 border-neutral-700 group-hover:border-white transition-all duration-200 p-4'>
    //             <SiMongodb className='text-6xl text-green-500'/>
    //         </div>
    //         <p className='mt-2 text-lg text-center text-neutral-500 font-semibold group-hover:text-white transition-all duration-200'>MongoDB</p>
    //     </div>

    //     <div className='mt-0 md:mt-4 group'>
    //         <div className='rounded-2xl flex justify-center border-4 border-neutral-700 group-hover:border-white transition-all duration-200 p-4'>
    //         <SiPostman className='text-6xl text-red-500'/>
    //         </div>
    //         <p className='mt-2 text-lg text-center text-neutral-500 font-semibold group-hover:text-white transition-all duration-200'>Postman</p>
    //     </div>
    // </div>
<div className="flex flex-wrap items-center justify-center gap-4 md:gap-x-8  mb-10">
      <div className="mt-0 md:mt-4 group">
        <div
          className={`rounded-2xl flex justify-center border-4 p-4 transition-all duration-200 ${
            darkMode ? 'border-neutral-700 group-hover:border-white' : 'border-neutral-400 group-hover:border-black'
          }`}
        >
          <RiTailwindCssFill className={`${darkMode ? 'text-cyan-700' : 'text-cyan-500'} text-6xl`} />
        </div>
        <p
          className={`mt-2 text-lg text-center font-semibold transition-all duration-200 ${
            darkMode ? 'text-neutral-500 group-hover:text-white' : 'text-gray-500 group-hover:text-black'
          }`}
        >
          Tailwind
        </p>
      </div>

      <div className="mt-0 md:mt-4 group">
        <div
          className={`rounded-2xl flex justify-center border-4 p-4 transition-all duration-200 ${
            darkMode ? 'border-neutral-700 group-hover:border-white' : 'border-neutral-400 group-hover:border-black'
          }`}
        >
          <SiRedux className="text-6xl text-purple-700" />
        </div>
        <p
          className={`mt-2 text-lg text-center font-semibold transition-all duration-200 ${
            darkMode ? 'text-neutral-500 group-hover:text-white' : 'text-gray-500 group-hover:text-black'
          }`}
        >
          Redux
        </p>
      </div>

      <div className="mt-0 md:mt-4 group">
        <div
          className={`rounded-2xl flex justify-center border-4 p-4 transition-all duration-200 ${
            darkMode ? 'border-neutral-700 group-hover:border-white' : 'border-neutral-400 group-hover:border-black'
          }`}
        >
          <SiMongoose className="text-6xl text-red-800" />
        </div>
        <p
          className={`mt-2 text-lg text-center font-semibold transition-all duration-200 ${
            darkMode ? 'text-neutral-500 group-hover:text-white' : 'text-gray-500 group-hover:text-black'
          }`}
        >
          Mongoose
        </p>
      </div>

      <div className="mt-0 md:mt-4 group">
        <div
          className={`rounded-2xl flex justify-center border-4 p-4 transition-all duration-200 ${
            darkMode ? 'border-neutral-700 group-hover:border-white' : 'border-neutral-400 group-hover:border-black'
          }`}
        >
          <FaReact className="text-6xl text-cyan-400" />
        </div>
        <p
          className={`mt-2 text-lg text-center font-semibold transition-all duration-200 ${
            darkMode ? 'text-neutral-500 group-hover:text-white' : 'text-gray-500 group-hover:text-black'
          }`}
        >
          React
        </p>
      </div>

      <div className="mt-0 md:mt-4 group">
        <div
          className={`rounded-2xl flex justify-center border-4 p-4 transition-all duration-200 ${
            darkMode ? 'border-neutral-700 group-hover:border-white' : 'border-neutral-400 group-hover:border-black'
          }`}
        >
          <SiMongodb className="text-6xl text-green-500" />
        </div>
        <p
          className={`mt-2 text-lg text-center font-semibold transition-all duration-200 ${
            darkMode ? 'text-neutral-500 group-hover:text-white' : 'text-gray-500 group-hover:text-black'
          }`}
        >
          MongoDB
        </p>
      </div>

      <div className="mt-0 md:mt-4 group">
        <div
          className={`rounded-2xl flex justify-center border-4 p-4 transition-all duration-200 ${
            darkMode ? 'border-neutral-700 group-hover:border-white' : 'border-neutral-400 group-hover:border-black'
          }`}
        >
          <SiPostman className="text-6xl text-red-500" />
        </div>
        <p
          className={`mt-2 text-lg text-center font-semibold transition-all duration-200 ${
            darkMode ? 'text-neutral-500 group-hover:text-white' : 'text-gray-500 group-hover:text-black'
          }`}
        >
          Postman
        </p>
      </div>
    </div>
  )
}

export default Frameworks