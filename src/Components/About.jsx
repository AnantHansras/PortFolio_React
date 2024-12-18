import { useSelector } from 'react-redux'
import React from 'react'
import { FaGraduationCap, FaCode, FaCodeBranch, FaLaptopCode, FaDesktop } from "react-icons/fa";
import { forwardRef } from 'react';
import "../about/about.css"

const About = forwardRef((props, ref) => {
  const darkMode = useSelector((state) => state.darkMode.isDarkMode);

  return (
    <div ref={ref} className="mt-[129px] mb-10 pt-[10px] md:pt-[70px]">
      <div className={`rounded-lg p-8 md:p-12 ${darkMode ? 'bg-[rgba(50,50,50,0.3)]' : 'bg-[#f6656e30]'}`}>
  <div className={`font-bold text-2xl mx-auto text-center ${darkMode ? 'text-white' : 'text-gray-900'}`}>ABOUT</div>

  <div className="flex flex-col md:flex-row justify-between">

    <div className={`w-[100%] md:w-[45%] mb-8 md:mb-0 ${darkMode ? 'text-white' : 'text-gray-700'}`}>
      <div className="flex flex-col gap-y-8">

        {/* Education */}
        <div className={`${darkMode?'hover:bg-dark':'hover:bg-light'} rounded-xl p-4 relative`}>
          <h1 className='text-2xl font-bold text-[#00bcd4]'>
            <FaGraduationCap className="text-4xl" /> Education
          </h1>
          <p className={`${darkMode ? 'text-[#B0BEC5]' : 'text-gray-700'}`}>
            B.Tech(Bachelor of Technology) in Computer Science and Engineering at MNIT Jaipur, focusing on software development and problem-solving skills.
          </p>
        </div>

        {/* Frontend Developer */}
        <div className={`${darkMode?'hover:bg-dark':'hover:bg-light'} rounded-xl p-4 relative`}>
          <h3 className='text-2xl font-bold text-[#E91E63]'>
            <FaCode className="text-4xl" /> Frontend Developer
          </h3>
          <p className={`${darkMode ? 'text-[#B0BEC5]' : 'text-gray-700'}`}>
            Developing responsive, user-friendly web apps with HTML, CSS, JavaScript, and React.js, emphasizing performance and user experience.
          </p>
        </div>

        {/* Backend Developer */}
        <div className={`${darkMode?'hover:bg-dark':'hover:bg-light'} rounded-xl p-4 relative`}>
          <h3 className='text-2xl font-bold text-[#FF5722]'>
            <FaCodeBranch className="text-4xl" /> Backend Developer
          </h3>
          <p className={`${darkMode ? 'text-[#B0BEC5]' : 'text-gray-700'}`}>
            Building scalable, secure server-side apps using Node.js, Express.js, and MongoDB, with a focus on performance and data security.
          </p>
        </div>
      </div>
    </div>

    <div className={`w-[100%] md:w-[45%] ${darkMode ? 'text-white' : 'text-gray-700'}`}>

      <div className="flex flex-col gap-y-8">
        {/* Problems Solved */}
        <div className={`${darkMode?'hover:bg-dark':'hover:bg-light'} rounded-xl p-4 relative`}>
          <h3 className='text-2xl font-bold text-[#F44336]'>
            <FaLaptopCode className="text-4xl" /> Problems Solved
          </h3>
          <p className={`${darkMode ? 'text-[#B0BEC5]' : 'text-gray-700'}`}>
            Solved 250+ problems on LeetCode and 150+ on GeeksforGeeks, focusing on optimizing solutions for complex DSA challenges.
          </p>
        </div>

        {/* Competitive Programming */}
        <div className={`${darkMode?'hover:bg-dark':'hover:bg-light'} rounded-xl p-4 relative`}>
          <h3 className='text-2xl font-bold text-[#3f51b5]'>
            <FaDesktop className="text-4xl" /> Competitive Programming
          </h3>
          <p className={`${darkMode ? 'text-[#B0BEC5]' : 'text-gray-700'}`}>
            3-star CodeChef coder, improving problem-solving skills through contests and optimizing solutions under time pressure.
          </p>
        </div>
      </div>

    </div>

  </div>
</div>

            </div>

          
          

  );
});

export default About;
