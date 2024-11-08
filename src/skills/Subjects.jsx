import React from 'react'
import { useSelector } from 'react-redux';
import { FaNetworkWired, FaDatabase, FaProjectDiagram, FaLock } from 'react-icons/fa';
import { GiProcessor } from 'react-icons/gi';

const Subjects = () => {
  const darkMode = useSelector((state) => state.darkMode.isDarkMode);

  return (
    <div className="flex flex-wrap items-center justify-center md:gap-x-8 gap-4 mb-10">
      <div className="mt-0 md:mt-4 group">
        <div
          className={`rounded-2xl flex justify-center border-4 p-4 transition-all duration-200 ${
            darkMode ? 'border-neutral-700 group-hover:border-white' : 'border-neutral-400 group-hover:border-black'
          }`}
        >
          <FaNetworkWired className={`text-6xl ${darkMode ? 'text-cyan-700' : 'text-cyan-500'}`} />
        </div>
        <p
          className={`mt-2 text-lg text-center font-semibold transition-all duration-200 ${
            darkMode ? 'text-neutral-500 group-hover:text-white' : 'text-gray-500 group-hover:text-black'
          }`}
        >
          DSA
        </p>
      </div>

      <div className="mt-0 md:mt-4 group">
        <div
          className={`rounded-2xl flex justify-center border-4 p-4 transition-all duration-200 ${
            darkMode ? 'border-neutral-700 group-hover:border-white' : 'border-neutral-400 group-hover:border-black'
          }`}
        >
          <GiProcessor className={`text-6xl ${darkMode ? 'text-purple-700' : 'text-purple-700'}`} />
        </div>
        <p
          className={`mt-2 text-lg text-center font-semibold transition-all duration-200 ${
            darkMode ? 'text-neutral-500 group-hover:text-white' : 'text-gray-500 group-hover:text-black'
          }`}
        >
          Architecture
        </p>
      </div>

      <div className="mt-0 md:mt-4 group">
        <div
          className={`rounded-2xl flex justify-center border-4 p-4 transition-all duration-200 ${
            darkMode ? 'border-neutral-700 group-hover:border-white' : 'border-neutral-400 group-hover:border-black'
          }`}
        >
          <FaDatabase className={`text-6xl ${darkMode ? 'text-yellow-400' : 'text-yellow-400'}`} />
        </div>
        <p
          className={`mt-2 text-lg text-center font-semibold transition-all duration-200 ${
            darkMode ? 'text-neutral-500 group-hover:text-white' : 'text-gray-500 group-hover:text-black'
          }`}
        >
          DBMS
        </p>
      </div>

      <div className="mt-0 md:mt-4 group">
        <div
          className={`rounded-2xl flex justify-center border-4 p-4 transition-all duration-200 ${
            darkMode ? 'border-neutral-700 group-hover:border-white' : 'border-neutral-400 group-hover:border-black'
          }`}
        >
          <FaProjectDiagram className={`text-6xl ${darkMode ? 'text-green-500' : 'text-green-500'}`} />
        </div>
        <p
          className={`mt-2 text-lg text-center font-semibold transition-all duration-200 ${
            darkMode ? 'text-neutral-500 group-hover:text-white' : 'text-gray-500 group-hover:text-black'
          }`}
        >
          OOPS
        </p>
      </div>

      <div className="mt-0 md:mt-4 group">
        <div
          className={`rounded-2xl flex justify-center border-4 p-4 transition-all duration-200 ${
            darkMode ? 'border-neutral-700 group-hover:border-white' : 'border-neutral-400 group-hover:border-black'
          }`}
        >
          <FaLock className={`text-6xl ${darkMode ? 'text-red-500' : 'text-red-500'}`} />
        </div>
        <p
          className={`mt-2 text-lg text-center font-semibold transition-all duration-200 ${
            darkMode ? 'text-neutral-500 group-hover:text-white' : 'text-gray-500 group-hover:text-black'
          }`}
        >
          Cybersecurity
        </p>
      </div>
    </div>
  );
};

export default Subjects;

// import React from 'react'
// import { FaNetworkWired, FaDatabase, FaProjectDiagram, FaLock } from 'react-icons/fa';
// import { GiProcessor } from 'react-icons/gi';


// const Subjects = () => {
//   return (
//     <div className='flex flex-wrap items-center justify-center gap-4 mb-10'>
//         <div className='mt-0 md:mt-4 group'>
//             <div className='rounded-2xl flex justify-center border-4 border-neutral-700 group-hover:border-white transition-all duration-200 p-4'>
//                 <FaNetworkWired className='text-6xl text-cyan-700'/>
//             </div>
//             <p className='mt-2 text-lg text-center text-neutral-500 font-semibold group-hover:text-white transition-all duration-200'>DSA</p>
//         </div>

//         <div className='mt-0 md:mt-4 group'>
//             <div className='rounded-2xl flex justify-center border-4 border-neutral-700 group-hover:border-white transition-all duration-200 p-4'>
//                 <GiProcessor className='text-6xl text-purple-700'/>
//             </div>
//             <p className='mt-2 text-lg text-center text-neutral-500 font-semibold group-hover:text-white transition-all duration-200'>Architecture</p>
//         </div>
        
//         <div className='mt-0 md:mt-4 group'>
//             <div className='rounded-2xl flex justify-center border-4 border-neutral-700 group-hover:border-white transition-all duration-200 p-4'>
//                 <FaDatabase className='text-6xl text-yellow-400'/>
//             </div>
//             <p className='mt-2 text-lg text-center text-neutral-500 font-semibold group-hover:text-white transition-all duration-200'>DBMS</p>
//         </div>

//         <div className='mt-0 md:mt-4 group'>
//             <div className='rounded-2xl flex justify-center border-4 border-neutral-700 group-hover:border-white transition-all duration-200 p-4'>
//                 <FaProjectDiagram className='text-6xl text-green-500'/>
//             </div>
//             <p className='mt-2 text-lg text-center text-neutral-500 font-semibold group-hover:text-white transition-all duration-200'>OOPS</p>
//         </div>

//         <div className='mt-0 md:mt-4 group'>
//             <div className='rounded-2xl flex justify-center border-4 border-neutral-700 group-hover:border-white transition-all duration-200 p-4'>
//             <FaLock className='text-6xl text-red-500'/>
//             </div>
//             <p className='mt-2 text-lg text-center text-neutral-500 font-semibold group-hover:text-white transition-all duration-200'>Cybersecurity</p>
//         </div>
//     </div>
//   )
// }

// export default Subjects