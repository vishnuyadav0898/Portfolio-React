// import React from "react";
// import ProjectCard from "./ProjectCard";

// const projects = [
//   {
//     projectname: "EVO WHEELS",
//     projectdescription:
//       "Developed a responsive app showcasing EV bikes and scooters with booking features, product comparisons, and dynamic sections using React and Tailwind CSS.",
//     projectimage: "/images/project01.webp",
//     projectlink: "https://evowheels.netlify.app/",
//   },
//   {
//     projectname: "CRYPTO MARKETPLACE",
//     projectdescription:
//       "Built a React app to track cryptocurrency prices with 24-hour changes,interactive charts, and multi-currency support using Context API and React Router DOM.",
//     projectimage: "/images/Crypto-project-image.jpg",
//     projectlink: "-- https://cryptoexchangehub.netlify.app",
//   },
//   {
//     projectname: "FLORA MARKET",
//     projectdescription:
//       "A simple, responsive e-commerce site for buying plants online.Features include a cart system, login/logout, and social media integration, optimized for both mobile and laptop.",
//     projectimage: "/images/footer-image.jpg",
//     projectlink: "https://flora-market-e-commerce.netlify.app/",
//   },
//   {
//     projectname: "QUIZ APP",
//     projectdescription:
//       "Built a React quiz app fetching questions dynamically from a Quiz API,featuring interactive scoring and responsive design.",
//     projectimage: "/images/Quiz-project-image.jpg",
//     projectlink: "https://quizappq.netlify.app/",
//   },
// ];

// function Projects() {
//   return (
//     <div id="projects" className="mt-10 p-2">
//       {projects.map((project, index) => (
//         <ProjectCard
//           key={index}
//           projectname={project.projectname}
//           projectdescription={project.projectdescription}
//           projectimage={project.projectimage}
//           projectlink={project.projectlink}
//         />
//       ))}
//     </div>
//   );
// }

// export default Projects;
// import React from "react";
// import ProjectCard from "./ProjectCard";

// const projects = [
//   {
//     projectname: "EVO WHEELS",
//     projectdescription:
//       "Developed a responsive app showcasing EV bikes and scooters with booking features, product comparisons, and dynamic sections using React and Tailwind CSS.",
//     projectimage: "/images/project01.webp",
//     projectlink: "https://evowheels.netlify.app/",
//   },
//   {
//     projectname: "CRYPTO MARKETPLACE",
//     projectdescription:
//       "Built a React app to track cryptocurrency prices with 24-hour changes,interactive charts, and multi-currency support using Context API and React Router DOM.",
//     projectimage: "/images/Crypto-project-image.jpg",
//     projectlink: "https://cryptoexchangehub.netlify.app",
//   },
//   {
//     projectname: "FLORA MARKET",
//     projectdescription:
//       "A simple, responsive e-commerce site for buying plants online. Features include a cart system, login/logout, and social media integration, optimized for both mobile and laptop.",
//     projectimage: "/images/footer-image.jpg",
//     projectlink: "https://flora-market-e-commerce.netlify.app/",
//   },
//   {
//     projectname: "QUIZ APP",
//     projectdescription:
//       "Built a React quiz app fetching questions dynamically from a Quiz API, featuring interactive scoring and responsive design.",
//     projectimage: "/images/Quiz-project-image.jpg",
//     projectlink: "https://quizappq.netlify.app/",
//   },
// ];

// function Projects() {
//   return (
//     <div id="projects" className="mt-10 p-5">
//       <h1 className="text-4xl font-bold text-center mb-10 text-purple-700">
//         My Projects
//       </h1>
//       <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
//         {projects.map((project, index) => (
//           <ProjectCard
//             key={index}
//             projectname={project.projectname}
//             projectdescription={project.projectdescription}
//             projectimage={project.projectimage}
//             projectlink={project.projectlink}
//           />
//         ))}
//       </div>
//     </div>
//   );
// }

// export default Projects;
import React from "react";
import ProjectCard from "./ProjectCard";

const projects = [
  {
    projectname: "EVO WHEELS",
    projectdescription:
      "Developed a responsive app showcasing EV bikes and scooters with booking features, product comparisons, and dynamic sections using React and Tailwind CSS.",
    projectimage: "/images/project01.webp",
    projectlink: "https://evowheels.netlify.app/",
  },
  {
        projectname: "CRYPTO MARKETPLACE",
        projectdescription:
          "Built a React app to track cryptocurrency prices with 24-hour changes,interactive charts, and multi-currency support using Context API and React Router DOM.",
        projectimage: "/images/Crypto-project-image.jpg",
        projectlink: "https://cryptoexchangehub.netlify.app",
      },
      {
         projectname: "FLORA MARKET",
         projectdescription:
           "A simple, responsive e-commerce site for buying plants online. Features include a cart system, login/logout, and social media integration, optimized for both mobile and laptop.",
         projectimage: "/images/footer-image.jpg",
         projectlink: "https://flora-market-e-commerce.netlify.app/",
       },
       {
         projectname: "QUIZ APP",
         projectdescription:
           "Built a React quiz app fetching questions dynamically from a Quiz API, featuring interactive scoring and responsive design.", 
         projectimage: "/images/Quiz-project-image.jpg",
         projectlink: "https://quizappq.netlify.app/",
       },
];

function Projects() {
  return (
    <div id="projects" className="mt-10 p-5 ml-12" style={{ backgroundImage: "url('./images/Gradient.png", backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundPosition: 'center', opacity: '0.7'}}>
      <h1 className="text-4xl font-bold text-center mb-10 text-purple-700">
        My Projects
      </h1>
      <div className="flex flex-col gap-16 ">
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            projectname={project.projectname}
            projectdescription={project.projectdescription}
            projectimage={project.projectimage}
            projectlink={project.projectlink}
            isImageLeft={index % 2 !== 0} // Alternate layout
          />
        ))}
      </div>
    </div>
  );
}

export default Projects;
