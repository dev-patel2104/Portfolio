import React from 'react';
import myImage from '../assets/myPhoto.jpg';
import Skill from './skills.js';

function aboutMe() {
    return (
        <div>
            <div className="flex-1 mt-16 pb-8" >
                <div className="flex flex-row h-full items-center justify-evenly">
                    <div className='flex justify-center items-center w-1/3'>
                        <img src={myImage} alt="some profile" className='flex-2 w-10/12 h-10/12'></img>
                    </div>
                    <div className='flex-col w-4/6 ml-40'>
                        <h1 className=' text-5xl text-pampas font-bold mb-4 ml-1'> About Me </h1>
                        <p className='text-lg font-semibold ml-1 text-pampas'> Hello, I'm Dev, and my early fascination with video games sparked my interest in programming. Pursuing a degree in computer science allowed me to dive deeper into the world of software development.</p>
                        <p className="text-lg font-semibold my-4 ml-1 text-pampas"> I've completed two rewarding internships as a game developer, refining my skills and creativity in crafting immersive gaming experiences.</p>
                        <p className="text-lg font-semibold my-4 ml-1 text-pampas"> Additionally, I've excelled as a full-stack developer, contributing to a range of exciting projects. I also bring experience in working with various cloud platforms, having successfully hosted web apps on both GCP and AWS. </p>
                    </div>

                </div>
            </div>

            {/* <div className="pt-36 pb-10">
                <div className="container mx-auto">
                    <h2 className="text-5xl font-bold text-pampas text-center mb-14">My Skills</h2>
                    <div className="grid grid-cols-3 gap-16">
                        {categories.map((category, index) => (
                            <div key={index}>
                                <div className="flex-col p-2 rounded-lg bg-carrara h-80 shadow-md shadow-carrara">
                                    <div>
                                        <h1 className="text-3xl text-darkSkin text-center font-bold mb-4">{category}</h1>
                                    </div>
                                    <div className='flex-col'>
                                        {skills[category].map((skill, skillIndex) => (
                                            <h2 key={skillIndex} className="text-xl text-center font-semibold">
                                                {skill}
                                            </h2>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div> */}

            <Skill/>
        </div>
    );
}


export default aboutMe;