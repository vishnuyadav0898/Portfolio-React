import React, { useState } from "react";

function Footer() {
  const [showSmallImage, setShowSmallImage] = useState(false);
  const [showFullImage, setShowFullImage] = useState(false);

  const scrollToProjects = () => {
    document.getElementById("projects").scrollIntoView({ behavior: "smooth" });
  };

  const handleResumeClick = () => {
    setShowSmallImage(true);
  };

  const handleCloseClick = () => {
    setShowSmallImage(false);
    setShowFullImage(false);
  };

  const handleImageClick = () => {
    setShowFullImage(true);
  };

  return (
    <>
      <footer className="fixed bottom-0  left-0 2xl:left-[35%] w-full rounded-t-4xl 2xl:w-[30%] 2xl:rounded-4xl border-2 flex justify-around items-center h-20 bg-gradient-to-r from-[#3b1d4f] via-purple-800 to-[#3b1d4f]">
        <button onClick={scrollToProjects} className="text-white text-xl">
          Projects
        </button>
        <button onClick={handleResumeClick} className="text-white text-xl">
          Resume
        </button>
      </footer>

      {/* Small Image Popup */}
      {showSmallImage && !showFullImage && (
        <div
          className="fixed bottom-20  left-0 flex items-center w-full justify-center 2xl:left-[35%] 2xl:w-[30%] 2xl:rounded-4xl transition-all duration-500 transform scale-90 opacity-0 animate-fade-in"
        >
          <img
            src="/images/resume.png"
            alt="Resume"
            className="w-full h-64 cursor-pointer rounded-xl  bg-purple-800 p-2 object-fit transition-transform duration-300 hover:scale-105"
            onClick={handleImageClick}
          />
          <button
            onClick={handleCloseClick}
            className="absolute -top-2 right-0 h-10 w-10 ml-2 text-white bg-purple-500 rounded-full p-1 flex justify-center items-center"
          >
            X
          </button>
        </div>
      )}

      {/* Full Image Popup */}
      {showFullImage && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-75 transition-opacity duration-500 animate-fade-in">
          <img
            src="/images/resume.png"
            alt="Resume"
            className="max-w-full max-h-full transition-transform duration-500 transform scale-90 hover:scale-100"
          />
          <button
            onClick={handleCloseClick}
            className="absolute top-10 right-5 text-white bg-purple-500 rounded-full p-2 h-10 w-10"
          >
            X
          </button>
        </div>
      )}

      {/* Add animations using Tailwind */}
      <style>
        {`
          @keyframes fade-in {
            from {
              opacity: 0;
              transform: scale(0.9);
            }
            to {
              opacity: 1;
              transform: scale(1);
            }
          }
          .animate-fade-in {
            animation: fade-in 0.3s ease-out forwards;
          }
        `}
      </style>
    </>
  );
}

export default Footer;

