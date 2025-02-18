import React from 'react'

function Header() {
  return (
    <div className='text-white flex justify-center items-center  mt-10 p-2 relative  ml-10 2xl:ml-40 '>
        <div className=' h-40 w-40 2xl:h-72 2xl:w-72  absolute  2xl:top-12 top-10  2xl:left-5 left-10'style={{ backgroundImage: "url('./images/Gradient.png", backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundPosition: 'center', opacity: '0.9'}}>
        <img src="./images/profileIcon.png" alt="profileIcon" className=' object-cover p-2 h-full w-full '/>
        </div>
        <div className='ml-44 flex flex-col ' >
          <p className='  absolute  top-8 right-[30%] text-lg font-semibold 2xl:text-2xl 2xl:right-[50%]' >Hello! I Am <span className='text-purple-800 text-md font-semibold'>Vishnu Yadav </span></p>
           
          <div className=' mt-16 2xl:mt-28 2xl:ml-28 w-full mr-14  '>
            <p className='font-medium mr-   w-64  2xl:w-2/3 px-6'>A Developer who  <br /> <span className='text-2xl font-medium 2xl:text-6xl '>Builds a website by its <span className='text-purple-800 '>Functionality</span>...</span> <br /> <span className='text-xs'>Because if it doesn’t work, what else will?</span></p>
          </div>
        </div>
    </div>
  )
}

export default Header