import React from 'react';
import details from '../assets/details.json';
import githubLogo from '../assets/githubLogo.svg';
import newIcon from '../assets/newIcon.svg';

function education() {

    const projects = details.projects;


    return (

        <div className="flex-col bg-custombackground " style={{ height: '100%', minHeight: '92vh' }} >
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
                                                        className="cursor-pointer transform hover:scale-125 transition-transform"
                                                    >
                                                        <img src={githubLogo} alt={`github logo`} className="" />
                                                    </button>
                                                )}
                                            </div>
                                            <div className='flex items-center '>
                                                {project.deployLink && (
                                                    <button
                                                        onClick={() => window.open(project.deployLink, '_blank')}
                                                        className="cursor-pointer pr-4 transform hover:scale-125 transition-transform"
                                                    >
                                                        <img src={newIcon} alt={`open in new tab icon`} className="" />
                                                    </button>
                                                )}
                                            </div>
                                        </div>

                                        <div className='flex  w-full p-4'>
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