import React from 'react'
import { useSelector } from 'react-redux'
import { FaGithub } from "react-icons/fa6";
import { RiInstagramFill } from "react-icons/ri";
import { FaLinkedin } from "react-icons/fa6";
import { FaEnvelope } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { MdCancel } from "react-icons/md";
// 5: "#F1F2FF",
// 25: "#DBDDEA",
// 50: "#C5C7D4",
// 100: "#AFB2BF",
// 200: "#999DAA",
// 300: "#838894",
// 400: "#6E727F",
// 500: "#585D69",
// 600: "#424854",
// 700: "#2C333F",
// 800: "#161D29",
// 900: "#000814",
const Modal = ({setShowModal}) => {
  const darkMode = useSelector((state) => state.darkMode.isDarkMode);
    return (
        <div className="fixed inset-0 z-[1000] !mt-0 grid place-items-center overflow-auto bg-white bg-opacity-10 backdrop-blur-sm ">
          <div className = {`${darkMode ? 'bg-[#161D29]' : 'bg-[#f6656e90]'} relative w-11/12 max-w-[350px] rounded-lg border border-[#6E727F] p-6`}>
          
            <p className={`${darkMode ? 'text-[#F1F2FF]' : 'text-neutral-900'} text-2xl font-semibold `}>
              You can reach out to me through any of these links
            </p>
            <p className={`${darkMode ? 'text-white' : 'text-black'} mt-3 mb-5 leading-6 flex gap-x-4`} >
                <a target='_blank' href='https://github.com/AnantHansras'>
                <FaGithub className='cursor-pointer text-3xl hover:text-cyan-300 transition-all duration-200' />
                </a>
                <a href="https://github.com/AnantHansras" target="_blank">
                <FaLinkedin className='cursor-pointer text-3xl hover:text-cyan-300 transition-all duration-200'/>
                </a>
                <a href="https://github.com/AnantHansras" target="_blank">
                <RiInstagramFill className='cursor-pointer text-3xl hover:text-cyan-300 transition-all duration-200'/>
                </a>
                <a href="https://github.com/AnantHansras" target="_blank">
                <FaSquareXTwitter className='cursor-pointer text-3xl hover:text-cyan-300 transition-all duration-200'/>
                </a>
                <a href="https://mail.google.com/mail/?view=cm&fs=1&to=ananthansras.16@gmail.com" target="_blank">
                <FaEnvelope className='cursor-pointer text-3xl hover:text-cyan-300 transition-all duration-200'/></a>
                <button
                    className="absolute top-1 right-1 text-xl cursor-pointer rounded-md transition-all duration-200 text-[rgb(200,50,50)] hover:text-[rgb(255,0,0)]"
                    onClick={()=>{setShowModal(false)}}
                >
                <MdCancel/>
                </button>
            </p>
          </div>
        </div>
      )
}

export default Modal