import React from 'react'
import CertificationCard from './CertificationCard'

function Certification() {
  return (
    <> 
    <div className='p-5 ml-14 2xl:mt-10'>
        <h1 className='text-xl 2xl:text-4xl  '>Certification</h1>
        <div className='md:flex   md:gap-[4vw] md:mt-5 '>
          <CertificationCard image={"/images/card1.png"} title={"The MERN stack & FSD From Infosys Springboard"} date={"July 2023"}/>
        <CertificationCard image={"/images/card2.png"} title={"MERN : Advanced MERN Development From Infosys Springboard"} date={"August 2023"}/>
</div>
        
    </div></>
   
  )
}

export default Certification