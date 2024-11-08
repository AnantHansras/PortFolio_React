import { useSelector } from 'react-redux'
import React from 'react'
import { ReactTyped } from "react-typed"
import { FaRegArrowAltCircleRight } from "react-icons/fa"
import image from "../assets/COLOR_POP.jpg"
import image2 from "../assets/light_theme.jpg"
import Modal from '../navbar/Modal'
import { useState } from 'react'
import { motion } from "framer-motion"

const Hero = () => {
  const [showModal, setShowModal] = useState(false);
  const darkMode = useSelector((state) => state.darkMode.isDarkMode);

  return (
    <div className={`mb-20 flex flex-col-reverse md:flex-row items-center justify-between gap-y-8 md:gap-x-4 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
      <div className="w-full md:w-[55%] text-center md:text-left">
        <h1 className="font-bold text-4xl sm:text-5xl md:text-7xl overflow-visible">Hi I'm</h1>
        <h1 className="font-bold text-4xl sm:text-5xl md:text-7xl overflow-visible mb-10">
          <ReactTyped strings={["Anant Hansras", "Software Engineer"]} backSpeed={5} typeSpeed={50} loop />
        </h1>
        <p className={`text-base sm:text-lg md:text-xl mb-10 ${darkMode ? 'text-[#B0BEC5]' : 'text-gray-700'}`}>
        I am a passionate web developer with a keen interest in building modern, user-friendly websites and web applications. 
        I love creating intuitive and responsive web experiences using the latest technologies. 
        Whether it's front-end design or back-end architecture, I thrive on solving problems and building solutions that have a real-world impact.
        </p>

        <div className="flex justify-center md:justify-start lg:justify-start items-center mx-auto text-xl">
          <button
            onClick={() => { setShowModal(true) }}
            className={`flex items-center font-semibold py-2 px-4 border rounded-2xl transition-all duration-200 ${
              darkMode 
                ? 'bg-transparent hover:bg-blue-500 text-blue-700 hover:text-white border-blue-500 hover:border-transparent' 
                : 'bg-transparent hover:bg-purple-500 text-purple-700 hover:text-white border-purple-500 hover:border-transparent'
            }`}
          >
            <span className="p-2">Let's Connect</span>
            <span className="p-3">
              <FaRegArrowAltCircleRight />
            </span>
          </button>
        </div>
      </div>

      <motion.div 
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
        className="flex justify-center md:justify-end w-full mb-7 md:w-auto overflow-visible md:mr-7 lg:mr-10"
      >
      <img src={image} className="overflow-hidden object-cover w-72 h-72 md:h-96 md:w-96 rounded-full border" /> 

      {/* {
        darkMode ? <img src={image} className="overflow-hidden object-cover w-72 h-72 md:h-96 md:w-96 rounded-full border" /> :
        <img src={image2} className="overflow-hidden object-cover w-72 h-72 md:h-96 md:w-96 rounded-full border" />
      } */}
        
      </motion.div>
      
      {showModal && <Modal setShowModal={setShowModal} />}
    </div>
  )
}

export default Hero;
