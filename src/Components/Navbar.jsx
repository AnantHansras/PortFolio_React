// import React from 'react'
// import DarkModeToggler from '../navbar/DarkModeToggler';
// import { useState } from 'react';
// import { MdCancel } from 'react-icons/md';
// import { GiHamburgerMenu } from "react-icons/gi";
// import { useSelector } from 'react-redux'
// const Navbar = ({section1Ref,section2Ref,section3Ref,section4Ref,scrollToSection}) => {
//   const [isOpen, setIsOpen] = useState(false);

//   const toggleMenu = () => {
//     setIsOpen(!isOpen);
//   };
//   const darkMode = useSelector((state) => state.darkMode.isDarkMode);
//   return (
//     <div className='flex flex-row items-center justify-between mt-4 py-6 mb-10 lg:mb-20'>
//       <h1 className='font-extrabold text-3xl md:text-4xl lg:text-5xl mb-4 md:mb-0 overflow-visible bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text tracking-tight text-transparent'>Portfolio</h1>

//       {/* Desktop Menu */}
//       <div className='hidden md:flex flex-row gap-x-12 text-white text-xl overflow-y-visible'>
//         <button onClick={() => scrollToSection(section1Ref)} className='cursor-pointer overflow-visible hover:text-cyan-300 transition-all duration-200'>About</button>
//         <button onClick={() => scrollToSection(section4Ref)} className='cursor-pointer overflow-visible hover:text-cyan-300 transition-all duration-200'>Experience</button>
//         <button onClick={() => scrollToSection(section2Ref)} className='cursor-pointer overflow-visible hover:text-cyan-300 transition-all duration-200'>Skills</button>
//         <button onClick={() => scrollToSection(section3Ref)} className='cursor-pointer overflow-visible hover:text-cyan-300 transition-all duration-200'>Projects</button>
//         <DarkModeToggler/>
//       </div>

//       {/* Hamburger Icon for Mobile */}
//       <div className='md:hidden flex gap-x-2'>
//       <button  onClick={toggleMenu}>
//         <GiHamburgerMenu className={`text-white text-xl block ${isOpen ? 'opacity-0' : ''}`}/>
//       </button>
//       <DarkModeToggler/>
//       </div>
      

//       {/* Mobile Menu */}
//       {isOpen && (
//         <div className='inset-0 absolute top-0 right-0 z-[1000] !mt-0 w-full h-full  md:hidden overflow-auto bg-white bg-opacity-10 backdrop-blur-sm '>
//         <div className='absolute flex flex-col right-0 mt-2 gap-y-4 w-11/12 max-w-[150px] rounded-lg border border-[#6E727F] bg-[#161D29] p-6'>
//         <button onClick={() => { scrollToSection(section1Ref); toggleMenu(); }} className='hover:text-cyan-300 text-white transition-all duration-200'>About</button>
//           <button onClick={() => { scrollToSection(section4Ref); toggleMenu(); }} className='hover:text-cyan-300 text-white transition-all duration-200'>Experience</button>
//           <button onClick={() => { scrollToSection(section2Ref); toggleMenu(); }} className='hover:text-cyan-300 text-white transition-all duration-200'>Skills</button>
//           <button onClick={() => { scrollToSection(section3Ref); toggleMenu(); }} className='hover:text-cyan-300 text-white transition-all duration-200'>Projects</button>
//           <button
//                     className="absolute top-1 right-1 text-xl cursor-pointer rounded-md transition-all duration-200 text-[rgb(200,50,50)] hover:text-[rgb(255,0,0)]"
//                     onClick={()=>{toggleMenu()}}
//                 >
//                 <MdCancel/>
//                 </button>
//         </div>
//         </div>
//       )}
//     </div>
//   );
// }

// export default Navbar

import React from 'react'
import DarkModeToggler from '../navbar/DarkModeToggler';
import { useState } from 'react';
import { MdCancel } from 'react-icons/md';
import { GiHamburgerMenu } from "react-icons/gi";
import { useSelector } from 'react-redux';

const Navbar = ({ section1Ref, section2Ref, section3Ref, section4Ref, scrollToSection }) => {
  const [isOpen, setIsOpen] = useState(false);
  const darkMode = useSelector((state) => state.darkMode.isDarkMode);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`flex flex-row items-center justify-between mt-4 py-6 mb-10 lg:mb-20 ${darkMode ? 'text-white' : ' text-gray-900'}`}>
      <h1 className={`font-extrabold text-3xl md:text-4xl lg:text-5xl mb-4 md:mb-0 overflow-visible tracking-tight text-transparent bg-clip-text ${darkMode ? 'bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500' : 'bg-gradient-to-r from-blue-500 via-purple-400 to-pink-300'}`}>
        Portfolio
      </h1>

      {/* Desktop Menu */}
      <div className='hidden md:flex flex-row gap-x-12 text-xl overflow-y-visible font-bold'>
        <button onClick={() => scrollToSection(section1Ref)} className='cursor-pointer overflow-visible hover:text-cyan-300 transition-all duration-200'>About</button>
        <button onClick={() => scrollToSection(section4Ref)} className='cursor-pointer overflow-visible hover:text-cyan-300 transition-all duration-200'>Experience</button>
        <button onClick={() => scrollToSection(section2Ref)} className='cursor-pointer overflow-visible hover:text-cyan-300 transition-all duration-200'>Skills</button>
        <button onClick={() => scrollToSection(section3Ref)} className='cursor-pointer overflow-visible hover:text-cyan-300 transition-all duration-200'>Projects</button>
        <DarkModeToggler />
      </div>

      {/* Hamburger Icon for Mobile */}
      <div className='md:hidden flex gap-x-2'>
        <DarkModeToggler />
        <button onClick={toggleMenu}>
          <GiHamburgerMenu className={`text-xl block ${isOpen ? 'opacity-0' : ''}`} />
        </button>
      </div>

      {/* Mobile Menu */} 
      {isOpen && (
        <div className={`inset-0 absolute top-0 right-0 z-[1000] w-full h-full md:hidden overflow-auto bg-opacity-10 backdrop-blur-sm ${darkMode ? 'bg-opacity-50' : 'bg-opacity-50'}`}>
          <div className={`absolute flex flex-col right-0 mt-2 gap-y-4 w-11/12 max-w-[150px] rounded-lg border p-6 ${darkMode ? 'border-[#6E727F] bg-[#161D29] text-white' : 'border-gray-300 bg-white text-gray-900'}`}>
            <button onClick={() => { scrollToSection(section1Ref); toggleMenu(); }} className='hover:text-cyan-300 transition-all duration-200'>About</button>
            <button onClick={() => { scrollToSection(section4Ref); toggleMenu(); }} className='hover:text-cyan-300 transition-all duration-200'>Experience</button>
            <button onClick={() => { scrollToSection(section2Ref); toggleMenu(); }} className='hover:text-cyan-300 transition-all duration-200'>Skills</button>
            <button onClick={() => { scrollToSection(section3Ref); toggleMenu(); }} className='hover:text-cyan-300 transition-all duration-200'>Projects</button>
            <button
              className="absolute top-1 right-1 text-xl cursor-pointer rounded-md transition-all duration-200 text-[rgb(200,50,50)] hover:text-[rgb(255,0,0)]"
              onClick={toggleMenu}
            >
              <MdCancel />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
