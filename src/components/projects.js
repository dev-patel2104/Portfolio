import React from 'react';
import githubLogo from '../assets/githubLogo.svg';
import newIcon from '../assets/newIcon.svg';

import 'react-vertical-timeline-component/style.min.css';

function education() {

    const projects = [
        {
            "gitLink": "https://github.com/dev-patel2104/TuneHub",
            "deployLink": "https://tune-hub.netlify.app/",
            "projectTitle": "TuneHub: IMDb for music",
            "description": "TuneHub is an immersive music platform that seamlessly integrates with Spotify, offering users an interactive space to discover, curate favorites, and engage with a vibrant community."
        },
        {
            "gitLink": "https://github.com/dev-patel2104/Vendor_Valley",
            "deployLink": "https://release--glowing-ganache-35b6af.netlify.app/",
            "projectTitle": "Vendor Valley",
            "description": "Vendor Valley, a web application, revolutionizes vendor selection by seamlessly connecting customers with vendors. Deployment is done using Netlify for frontend and Render for backend."

        },
        {
            "gitLink": "https://github.com/dev-patel2104/ServerlessSDP8",
            "deployLink": "https://main--serverless-sdp8-production.netlify.app/",
            "projectTitle": "FoodVaganza",
            "description": "Developed customer, partner and admin apps as a part of table reservation app tailored for restaurants in Halifax, Nova Scotia. The project is entirely built on a serverless architecture."

        },
        {
            "gitLink": "https://github.com/dev-patel2104/Portfolio",
            "deployLink": "https://release--glowing-ganache-35b6af.netlify.app/",
            "projectTitle": "Portfolio",
            "description": "(This) A clean and editable portfolio website with a simplistic design."

        },
        {
            "gitLink": "https://github.com/dev-patel2104/Glitch_Garden_Repo",
            "deployLink": "https://drive.google.com/file/d/1P41k4eDyAlJ5tUwVKBqihDxohMyFB8-Q/view?usp=drive_link",
            "projectTitle": "Glitch Garden Replica",
            "description": "Crafted from scratch, a functional replica of the beloved Glitch Garden game offers a customizable single level with adjustable difficulty settings."
        },
        {
            "gitLink": "https://github.com/dev-patel2104/platformer_repo",
            "deployLink": "https://drive.google.com/file/d/17nmEpaE0ITZs5XF8sHZRjKC-A7N3Ku5E/view?usp=drive_link",
            "projectTitle": "Platformer 2D",
            "description": "An engaging 2D platformer game, featuring diverse levels adorned with traps, enemies, and power-ups. Leveraged Unity tilemap for seamless level creation."
        },
        {
            "gitLink": "https://github.com/dev-patel2104/project_Boost_repo",
            "deployLink": "https://drive.google.com/file/d/1fU3CDOTNMeCbbDSuQDfuQVB4_aIbADVR/view?usp=drive_link",
            "projectTitle": "Project boost",
            "description": "Dive into an immersive rocket steering game where players navigate through dynamic levels, overcoming a myriad of obstacles that test precision and skill."
        }
    ];


    return (

        <div className="flex-col style={{ height: '92vh' }} bg-custombackground ">
            <div className='flex w-full justify-center mb-8 pt-16'>
                <h1 className="text-5xl font-bold text-pampas "> Projects </h1>
            </div>
            <div className='flex w-full justify-center'>
                <h2 className='text-lg w-1/2 font-semibold text-center text-pampas'> I have a diverse portfolio, having contributed to projects spanning
                    web applications and mobile games. Here are some of my projects.
                </h2>
            </div>

            <div className='flex-col w-full justify-center'>
                <div className="flex justify-center">
                    <div className="grid grid-cols-3 gap-16 w-full p-12">
                        {projects.map((project, index) => (
                            <a key={index} href={project.link} target='_blank' rel='noreferrer' className='cursor-pointer'>
                                <div className=" rounded-md flex flex-col h-44 gap-8 justify-center bg-carrara shadow-md shadow-white 
                            hover:shadow-lg hover:shadow-white transition duration-300 ">
                                    <div className='flex-col flex items-center w-full h-full'>
                                        <div className='flex flex-row justify-between items-center mt-4 w-full pl-4'>
                                            <h1 className='text-2xl font-bold text-custombackground w-3/4'>{project.projectTitle}</h1>
                                            <div className='flex items-center '>
                                                {project.gitLink && (
                                                    <button
                                                        onClick={() => window.open(project.gitLink, '_blank')}
                                                        className="cursor-pointer transform hover:scale-110 transition-transform"
                                                    >
                                                        <img src={githubLogo} alt={`github logo`} className="" />
                                                    </button>
                                                )}
                                            </div>
                                            <div className='flex items-center '>
                                                {project.deployLink && (
                                                    <button
                                                        onClick={() => window.open(project.deployLink, '_blank')}
                                                        className="cursor-pointer pr-4 transform hover:scale-110 transition-transform"
                                                    >
                                                        <img src={newIcon} alt={`open in new tab icon`} className="" />
                                                    </button>
                                                )}
                                            </div>
                                        </div>

                                        <div className='flex justify-center p-4'>
                                            {project.description && <h2 className='text-custombackground'>{project.description}</h2>}
                                        </div>
                                        {/* <div className=' bg-darkSkin p-4 rounded-b-md w-full'>


                                        </div> */}
                                    </div>
                                </div>
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default education;