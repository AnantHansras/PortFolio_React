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
      <div className="w-full md:w-[60%] text-center md:text-left">
        <motion.h1
          className="font-bold text-3xl sm:text-5xl md:text-7xl overflow-visible"
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          Hi, I'm
        </motion.h1>
        <motion.h1
          className="font-bold text-3xl sm:text-5xl md:text-7xl overflow-visible mb-10"
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <ReactTyped
            strings={["Anant Hansras", "Software Engineer"]}
            backSpeed={50}
            typeSpeed={50}
            loop
          />
        </motion.h1>

        <motion.p
          className={`text-base sm:text-lg md:text-xl mb-10 ${
            darkMode ? 'text-[#B0BEC5]' : 'text-gray-700'
          }`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          I am a passionate web developer with a keen interest in building modern, user-friendly websites and web applications.
          I thrive on creating intuitive, responsive web experiences that have a real-world impact.
        </motion.p>

        <motion.div
          className="flex justify-center md:justify-start items-center mx-auto text-xl"
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.6 }}
        >
          <button
            onClick={() => setShowModal(true)}
            className={`flex items-center font-semibold py-2 px-6 border rounded-2xl transition-transform transform duration-200 hover:scale-105 shadow-lg ${
              darkMode
                ? 'bg-transparent hover:bg-blue-500 text-blue-700 hover:text-white border-blue-500'
                : 'bg-transparent hover:bg-purple-500 text-purple-700 hover:text-white border-purple-500'
            }`}
          >
            <span className="p-2">Let's Connect</span>
            <span className="p-3">
              <FaRegArrowAltCircleRight />
            </span>
          </button>
        </motion.div>

      </div>

      <motion.div 
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
        className="flex justify-center md:justify-end w-full mb-7 md:w-auto overflow-visible md:mr-7 lg:mr-10"
      >
      {/* <img src={image} className="overflow-hidden object-cover w-72 h-72 md:h-96 md:w-96 rounded-full border" />  */}

      {
        darkMode ? <img src={image} className="overflow-hidden object-cover w-72 h-72 md:h-96 md:w-96 rounded-full border" /> :
        <img src={image2} className="overflow-hidden object-cover w-72 h-72 md:h-96 md:w-96 rounded-full border" />
      }
        
      </motion.div>
      
      {showModal && <Modal setShowModal={setShowModal} />}
    </div>
  )
}

export default Hero;
