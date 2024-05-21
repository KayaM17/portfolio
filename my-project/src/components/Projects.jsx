import React from "react";
import portfolioCss from "../assets/portfolio/portfolioCss.jpg";
import consoleJs from "../assets/portfolio/consoleJs.png";
import laptopWander from "../assets/portfolio/wandaWeather.jpg";
import passwordGenerator from "../assets/portfolio/passwordGenerator.jpg";
import quiz from "../assets/portfolio/quiz.jpg";
import workPlanner from "../assets/portfolio/workPlanner.jpg";




const Projects = () => {
    const projects = [
        {
            id: 1,
            src: portfolioCss, 
            demoLink: "https://kayam17.github.io/02-css-portfolio/",
            liveCodeLink: "https://github.com/KayaM17/02-css-portfolio"
        },
        {
            id: 2,
            src: consoleJs,
            demoLink: "https://kayam17.github.io/04-Console-Finances/",
            liveCodeLink: "https://github.com/KayaM17/04-Console-Finances"
        },
        {
            id: 3,
            src: laptopWander,
            demoLink: "https://kayam17.github.io/wandaweather/",
            liveCodeLink: "https://github.com/KayaM17/wandaweather"
            
        },
        {
            id: 4,
            src: passwordGenerator,
            demoLink: "https://kayam17.github.io/05-password-generator/",
            liveCodeLink: "https://github.com/KayaM17/05-password-generator"
        },
        {
            id: 5,
            src: quiz,
            demoLink: "https://kayam17.github.io/06-Web-APIs-Quiz/",
            liveCodeLink: "https://github.com/KayaM17/06-Web-APIs-Quiz"
        },
        {
            id: 6,
            src: workPlanner,
            demoLink: "https://kayam17.github.io/07-daily-planner-app/",
            liveCodeLink: "https://github.com/KayaM17/07-daily-planner-app"
        },
    ];

    return (
        <div
        name="projects"
            className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen"
        >
            <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
                <div className="pb-8">
                    <p className="text-4xl font-bold inline border-b-4 border-gray-500">
                        Projects
                        </p>
                    <p className="py-6">Check out some of my work right here</p>
                </div>

                <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
                {projects.map(({ id, src, demoLink, liveCodeLink }) => (
                    <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
                        <img 
                        src={src} 
                        alt="" 
                        className="rounded-md duration-200 hover:scale-105"
                        />
                        <div className="flex items-center justify-center">
                            <a href={demoLink} className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                                Demo
                            </a>
                            <a href={liveCodeLink} className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                                Code
                            </a>
                        </div>
                    </div>
                ))}
                </div>
            </div>
        </div>
    );
};

            export default Projects;
