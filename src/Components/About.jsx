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
                Currently pursuing a degree of Bachelor of Technology (B.Tech) in Computer Science & Engineering at
                Malaviya National Institute of Technology (MNIT), Jaipur
                </p>
              </div>
              
              {/* Frontend Developer */}
              <div className={`${darkMode?'hover:bg-dark':'hover:bg-light'} rounded-xl p-4 relative`}>
                <h3 className='text-2xl font-bold text-[#E91E63]'>
                  <FaCode className="text-4xl" /> Frontend Developer
                </h3>
                <p className={`${darkMode ? 'text-[#B0BEC5]' : 'text-gray-700'}`}>
                I specialize in creating responsive, user-friendly web applications using HTML, CSS, JavaScript, and React.js. 
                I focus on building visually engaging and responsive websites with attention to performance.
                </p>
              </div>
              
              {/* Backend Developer */}
              <div className={`${darkMode?'hover:bg-dark':'hover:bg-light'} rounded-xl p-4 relative`}>
                <h3 className='text-2xl font-bold text-[#FF5722]'>
                  <FaCodeBranch className="text-4xl" /> Backend Developer
                </h3>
                <p className={`${darkMode ? 'text-[#B0BEC5]' : 'text-gray-700'}`}>
                As a Backend Developer, I specialize in building scalable and secure server-side applications using Node.js, Express.js, and MongoDB
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
                I have solved over 100 problems on LeetCode and 200 problems on GeeksforGeeks, focusing on Data Structures and Algorithms (DSA).
                This experience has helped me write efficient, optimized solutions for complex problems.
                </p>
              </div>
              {/* Competitive Programming */}
              <div className={`${darkMode?'hover:bg-dark':'hover:bg-light'} rounded-xl p-4 relative`}>
                <h3 className='text-2xl font-bold text-[#3f51b5]'>
                  <FaDesktop className="text-4xl" /> Competitive Programming
                </h3>
                <p className={`${darkMode ? 'text-[#B0BEC5]' : 'text-gray-700'}`}>
                I am a 3-star coder on CodeChef, actively participating in contests to improve my skills in algorithms and data structures. Competitive programming has sharpened my problem-solving abilities and taught me how to optimize solutions under time pressure
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
