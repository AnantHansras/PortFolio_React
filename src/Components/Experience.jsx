import { useSelector } from 'react-redux'
import React, { forwardRef } from 'react'
import ExpCard from '../experience/ExpCard';
const Experience = forwardRef((props, ref) =>{
    const darkMode = useSelector((state) => state.darkMode.isDarkMode);
    return (
        
        <div>
    <div ref={ref} className={`${darkMode ? 'text-white' : 'text-black'} font-bold text-2xl overflow-visible mx-auto mt-20 mb-10 md:mb-20 text-center`}>
        Experience
    </div>

    <ExpCard 
        period="Oct '24 - Present" 
        title="Technical Executive at Blitz" 
        description="Currently serving as Technical Executive at BlitzSCLAG, one of Rajasthan's largest cultural festivals. Responsible for managing technical operations and supporting event technology infrastructure."
        technologies={["React", "Tailwind"]}
    />
</div>

      )
});

export default Experience