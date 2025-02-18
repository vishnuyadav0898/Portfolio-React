import React from 'react'

function SideIcons() {
  const phoneNumber = '6350078340';

  const handleWhatsAppClick = () => {
    window.open(`https://wa.me/${phoneNumber}`, '_blank');
  };

  const handlePhoneClick = () => {
    window.location.href = `tel:${phoneNumber}`;
  };

  return (
    <div className='flex flex-col h-40 w-full fixed bottom-28 left-[80%] 2xl:left-[90%] p-5 gap-3'>
      <div
        className='bg-purple-700 rounded-full h-14 w-14 p-5 flex justify-center items-center cursor-pointer'
        onClick={handleWhatsAppClick}
      >
        <i className="fa-brands fa-whatsapp text-3xl rounded-full"></i>
      </div>
      <div
        className='bg-purple-700 rounded-full h-14 w-14 p-5 flex justify-center items-center cursor-pointer'
        onClick={handlePhoneClick}
      >
        <i className="fa-solid fa-phone text-3xl rounded-full"></i>
      </div>
    </div>
  )
}

export default SideIcons