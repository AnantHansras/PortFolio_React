import React from 'react'
import {motion} from "framer-motion"
import { useSelector } from 'react-redux'

const ProjectCard = ({image,title,description,technologies}) => {
    const darkMode = useSelector((state) => state.darkMode.isDarkMode);
  return (
   
    <div  className = {`${darkMode ? 'border-neutral-800' : 'border-neutral-300'} mb-7 flex flex-wrap lg:justify-center border-4 md:border-0 rounded-xl p-4 md:p-0`}>
        <motion.div whileInView={{x:0,opacity:1}} initial={{x:-100,opacity:0}} transition={{duration:1,delay:0}} className='w-full lg:w-1/4'>
            <img
                src={image}
                height={200}
                width={200}
                alt={title}
                className='mb-5 rounded-md'
            />
        </motion.div>
        <div className='w-full lg:w-3/4 max-w-xl'> 
            <motion.p whileInView={{x:0,opacity:1}} initial={{x:100,opacity:0}} transition={{duration:1,delay:0.5}} className = {`${darkMode ? 'text-white' : 'text-black'} text-xl font-medium`}>{title}</motion.p>
            <motion.p whileInView={{x:0,opacity:1}} initial={{x:100,opacity:0}} transition={{duration:1,delay:1}} className={`mt-2 mb-4 ${darkMode ? 'text-[#AFB2BF]' : 'text-gray-700'}`}>{description}</motion.p>
            {
                technologies.map((tech,index) => (
                    <motion.span whileInView={{x:0,opacity:1}} initial={{x:100,opacity:0}} transition={{duration:1,delay:1.5}} key={index} className={`mr-2 rounded p-2 text-sm font-normal 
                    ${darkMode ? 'bg-neutral-900 text-cyan-500' : 'bg-gray-200 text-cyan-700'} ${darkMode ? 'hover:bg-cyan-900 hover:text-white' : 'hover:bg-cyan-100 hover:text-cyan-700'}`}>{tech}</motion.span>
                ))
            }
        </div>

    </div>
  )
}

export default ProjectCard