import React from 'react'

function Skills() {
  return (
    <> <div className='text-white  mt-5 mx-2 text-center ml-10 2xl:ml-0 '>
        <h1 className='text-xl  w-[80vw] mt-10 2xl:text-2xl'>I'm currently looking to join a <span className='text-purple-800'>cross-functional</span> team</h1>
        <p className='mt-3 text-xl 2xl:mt-2 2xl:text-2xl'>that values improving people's lives through accessible development</p>
        <img src="./public/images/skillsView.png" alt="skillView"  className='mt-5 object-cover 2xl:ml-[20%] xl:ml-[7%] '/>
    </div>
    <div className='flex justify-center items-center gap-2 p-2 w-full mt-5'>
         <span className='bg-purple-950 font-semibold 2xl:text-xl p-2 text-center text-sm rounded-xl'>HTML</span>
         <span className='bg-purple-950 font-semibold 2xl:text-xl p-2 text-center text-sm rounded-xl'>CSS</span>
         <span className='bg-purple-950 font-semibold 2xl:text-xl p-2 text-center text-sm rounded-xl'> TAILWIND </span>
         <span className='bg-purple-950 font-semibold 2xl:text-xl p-2 text-center text-sm rounded-xl'>JAVASCRIPT</span>
         <span className='bg-purple-950 font-semibold 2xl:text-xl p-2 text-center text-sm rounded-xl'>REACTJS</span>

        
    </div>
   
    </>
   
  )
}

export default Skills