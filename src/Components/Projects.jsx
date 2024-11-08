import React from 'react'
import { forwardRef } from 'react'
import ProjectCard from '../project/projectCard'
import image_portfolio from '../assets/porfolio-image.jpg'
import image_edTech from '../assets/ed-tech-image.jpg'
import { useSelector } from 'react-redux'
const Projects = forwardRef((props, ref) =>{
  const darkMode = useSelector((state) => state.darkMode.isDarkMode);
  return (
    <div>
        
          <div ref={ref} className={`${darkMode ? 'text-white' : 'text-black'} font-bold text-2xl overflow-visible mx-auto mt-20 mb-10 md:mb-20 text-center`}>PROJECTS</div>
        
            <ProjectCard image={image_portfolio} title={"Portfolio Website"} 
            description={"A personal portfolio website showcasing projects,skills and contact information In short, it's an online resume that shows off work, skills, and personality"}
            technologies={["React","Tailwind","Redux"]}
            />
            <ProjectCard image={image_edTech} title={"Ed-Tech Platform"} 
            description={"This is an interactive and user-friendly Ed-Tech platform designed to enhance the learning experience for students and educators"}
            technologies={["React","Express","Redux","Tailwind","Mongoose"]}
            />
            {/* <ProjectCard image={"https://th.bing.com/th/id/OIP.4wsAxVNjaitv8pDEoxdtoAHaFj?rs=1&pid=ImgDetMain"} title={"Portfolio Website"} 
            description={"A personal portfolio website showcasing projects,skills and contact information In short, it's an online resume that shows off work, skills, and personality"}
            technologies={["React","Tailwind"]}
            /> */}
    </div>
  )
});

export default Projects