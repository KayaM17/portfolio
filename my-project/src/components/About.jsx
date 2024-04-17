import React from 'react'

const About = () => {
    return (
        <div
            name="about"
            className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
        >
            <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
                <div className="pb-8">
                    <p className="text-4xl font-bold inline border-b-4 border-gray-500">
                        About
                    </p>
                </div>

                <p className="text-xl mt-20">
                Coming from a background in science, I've always been drawn to the intricate workings of the natural world. 
                However, it was my exploration into coding that truly ignited my passion for problem-solving and innovation. 
                I discovered that coding offers a unique blend of logic and creativity, 
                allowing me to tackle complex challenges in ways I had never imagined. 
                As I delved deeper into coding, I found myself captivated by its endless possibilities 
                and the thrill of bringing ideas to life through lines of code.
                </p>

                <br />

                <p className="text-xl">
                What I love most about coding is the constant challenge it presents. 
                Every project, every line of code is an opportunity to learn something new and push myself further. 
                Whether it's debugging a stubborn piece of code or architecting a complex software solution, 
                I thrive on the exhilarating feeling of overcoming obstacles and finding elegant solutions. 
                Coding has become more than just a skill for me; it's a way of thinking, 
                a mindset that drives me to constantly seek out new challenges and push the boundaries of what's possible. 
                In essence, coding has become a passion that fuels my desire to explore, create, and innovate in the ever-evolving landscape of technology.
                </p>
            </div>
        </div>
    );
};


export default About;
