
import Certification from './Components/Certification'
import Contact from './Components/Contact'
import Footer from './Components/Footer'
import Header from './Components/Header'
import Heroone from './Components/Heroone'
import Projects from './Components/Projects'
import SideIcons from './Components/SideIcons'
import Skills from './Components/Skills'
function App() {
  
  return (
    <>
    <div className='flex flex-col justify-center items-center    2xl:px-[20%]'> 
      <Header/>
      <Heroone/>
      <Skills/>
      <Projects/>
      <Certification/>
      <Contact/>
      <SideIcons/>
      <Footer/>
     </div>
   
    </>
  )
}

export default App
