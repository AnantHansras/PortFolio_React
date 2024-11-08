import { useSelector } from 'react-redux'
import React from 'react'
import { FaGithub } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";
import { FaEnvelope } from "react-icons/fa";
const Footer = () => {
    const darkMode = useSelector((state) => state.darkMode.isDarkMode);
return (
    <div
      className={`${
        darkMode ? 'bg-[#111111] text-white' : 'bg-[#e0cdd3] text-black'
      } flex justify-evenly items-center p-10 px-2 md:p-14 md:px-14 mt-16 md:mt-20`}
    >
      <div>
        <p
          className={`${
            darkMode ? 'text-white' : 'text-black'
          } text-4xl md:text-5xl font-bold mb-2 overflow-visible`}
        >
          Contact
        </p>
        <p
          className={`${
            darkMode ? 'text-gray-300' : 'text-gray-700'
          } text-xl md:text-2xl font-semibold mb-2`}
        >
          Feel free to reach out!
        </p>
      </div>
      <div className={`${darkMode ? 'text-[#1E90FF]' : 'text-blue-600'}`}>
        <p className='flex gap-1 md:gap-4 mb-4'>
          <FaGithub className={`translate-y-1 text-xl ${darkMode ? 'text-white' : 'text-black'}`} />
          <a target='_blank' href='https://github.com/AnantHansras' className='hover:text-[#6C63FF] cursor-pointer underline'>
          github.com/AnantHansras
          </a>
        </p>
        <p className='flex gap-1 md:gap-4 mb-4'>
          <FaLinkedin className={`translate-y-1 text-xl ${darkMode ? 'text-white' : 'text-black'}`} />
          <a target='_blank' href='https://github.com/AnantHansras' className='hover:text-[#6C63FF] cursor-pointer underline'>
          https://in.linkedin.com/
          </a>
        </p>
        <p className='flex gap-1 md:gap-4 mb-4'>
          <FaEnvelope className={`translate-y-1 text-xl ${darkMode ? 'text-white' : 'text-black'}`} />
          <a
            target='_blank'
            href='https://mail.google.com/mail/?view=cm&fs=1&to=ananthansras.16@gmail.com'
            className='hover:text-[#6C63FF] cursor-pointer underline'
          >
            ananthansras.16@gmail.com
          </a>
        </p>
      </div>
    </div>
  );
}

export default Footer