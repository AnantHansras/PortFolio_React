import './App.css'
import Navbar from './Components/Navbar'
import Hero from './Components/Hero'
import About from './Components/About'
import Skills from './Components/Skills'
import Projects from './Components/Projects'
import Footer from './Components/Footer'
import { useRef } from 'react'
import Experience from './Components/Experience'
import { useSelector } from 'react-redux'
function App() {
  const section1Ref = useRef(null);
  const section2Ref = useRef(null);
  const section3Ref = useRef(null);
  const section4Ref = useRef(null);
  const scrollToSection = (ref) => {
    if (ref.current) {
        ref.current.scrollIntoView({ behavior: 'smooth' });
    }
};
const darkMode = useSelector((state) => state.darkMode.isDarkMode);
  return (
    
    <div className='fixed top-0 w-full h-full overflow-y-scroll'>
        <div className={`${darkMode ? 'bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]':
        'transform bg-white bg-[radial-gradient(60%_120%_at_50%_50%,hsla(0,0%,100%,0)_0,rgba(252,205,238,.5)_100%)]'} absolute top-0 z-[-2] h-screen w-screen`} >
      
          <div className='container px-8 mx-auto'>
            <Navbar section1Ref={section1Ref} section2Ref={section2Ref} section3Ref={section3Ref} section4Ref={section4Ref} scrollToSection={scrollToSection}/>
            <Hero/>
            <About ref={section1Ref}/>
            <Experience ref={section4Ref}/>
            <Skills ref={section2Ref}/>
            <Projects ref={section3Ref}/>
            
          </div>
          <Footer/>
        </div>
    </div>

  )
}

export default App
