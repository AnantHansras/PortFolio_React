import { useSelector } from 'react-redux'
import React, { forwardRef } from 'react'
import ExpCard from '../experience/ExpCard';
const Experience = forwardRef((props, ref) =>{
    const darkMode = useSelector((state) => state.darkMode.isDarkMode);
    return (
        //
        <div >
            <div ref={ref} className={`${darkMode ? 'text-white' : 'text-black'} font-bold text-2xl overflow-visible mx-auto mt-20 mb-10 md:mb-20 text-center`}>Experience</div>
            
                <ExpCard period="2023-present" title={"lorem ipsum"} 
                description={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua"}
                technologies={["React","Tailwind"]}
                />
        </div>
      )
});

export default Experience