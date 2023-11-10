import React from 'react';
import profileImage from '../assets/profile.svg';
import AboutMe from './about-me.js';

function about() {
    return (
        <div className="flex-col h-90vh bg-custombackground px-32">
            <div className="flex-1 h-screen" >
                <div className="flex flex-row h-full items-center justify-evenly">
                    <div className='flex-col w-4/6'>
                        <h1 className='text-xl font-semibold ml-1 text-pampas'> Hi, I'm </h1>
                        <h1 className="  text-5xl font-bold mb-2 text-pampas"> Dev Patel</h1>
                        <p className="ml-1 text-xl text-pampas"> I'm a passionate full-stack developer with a deep-rooted interest in game development. Currently, I am pursuing my Master of Applied Computer Science at Dalhousie University. </p>
                        <a href="https://drive.google.com/file/d/1xqXKCwOraqra4Ctvjienpq0zg1oZm_ao/view?usp=drive_link" target="_blank" rel="noreferrer">
                            <button className=" text-pampas font-normal mt-8 rounded-full border-2 border-carrara pl-8 pr-8 pt-2 pb-2
                            hover:bg-carrara hover:text-black  active:bg-darkSkin active:border-darkSkin transition duration-300">
                                Resume
                            </button>
                        </a>
                    </div>
                    <div className='flex justify-center items-center'>
                        <img src={profileImage} alt = "some profile" className='flex-2 w-1/2 h-1/2'></img>
                    </div>
                </div>
            </div>
            <AboutMe />
        </div>
    );
}

export default about;