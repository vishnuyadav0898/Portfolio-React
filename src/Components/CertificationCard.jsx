import React from 'react'

function CertificationCard({image, title, date}) {
  return (
    <div className='flex  w-96 h-56 items-center justify-center   2xl:h-56  bg-gradient-to-bl from-purple-950 via-[#10061f] to-purple-950  mt-3  rounded-2xl'>
        <div ><img src={image} alt="card1" /></div>
        <div className='ml-3'>
            <h1 className=' 2xl:text-xl'>{title}</h1>
            <p className='  2xl:ml-16 mt-5 border-purple-400 border-2 border-solid  w-fit p-2 rounded-xl 2xl:text-xl'>{date}</p>
        </div>
    </div>
  )
}

export default CertificationCard