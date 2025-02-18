import React from "react";

function ProjectCard({
  projectname,
  projectdescription,
  projectimage,
  projectlink,
  isImageLeft,
}) {
  return (
    <div
      className={`flex flex-col lg:flex-row  w-[90vw] 2xl:w-[65vw] ${
        isImageLeft ? "lg:flex-row-reverse" : ""
      } items-center lg:items-start gap-10`}
    >
        <div className="w-full lg:w-1/2 lg:ml-8">
        <h1 className="text-purple-400 text-lg font-medium mb-2">
          Featured Project
        </h1>
        <h2 className="text-3xl font-semibold text-white mb-4">{projectname}</h2>
        <div className=" bg-purple-800 p-5 h-56 rounded-lg ">
          <p className="text-white text-2xl text-center">{projectdescription}</p>
        </div>
        <div className="flex mt-3 ml-5">
          <img
            src="/images/flowerIcon.png"
            alt="Flower Icon"
            className="w-10 h-10"
          />
          <img
            src="/images/flowerIcon.png"
            alt="Flower Icon"
            className="w-10 h-10 object-cover"
          />
        </div>
      </div>
      {/* Image Section */}
      <div className="relative  bg-purple-950 rounded-lg overflow-hidden group w-[25rem] 2xl:w-[30rem] lg:w-1/2 h-[20rem] lg:h-[25rem]">
        {/* Image with Hover Blur */}
        <img
          src={projectimage}
          alt={projectname}
          className="w-full h-full p-5 object-cover transition-transform duration-300 ease-in-out   2xl:blur-none 2xl:group-hover:blur-sm blur-xs lg:group-hover:scale-105"
        />

        {/* Button Overlay */}
        <div className="absolute inset-0 flex items-center justify-center  2xl:opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <a
            href={projectlink}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-purple-700 text-white px-4 py-2 rounded-lg font-semibold"
          >
            Visit Website
          </a>
        </div>
      </div>

     
    </div>
  );
}

export default ProjectCard;

