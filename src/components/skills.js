import React from 'react';
import details from '../assets/details.json';

const Skills = () => {

    const skills = details.skills;
    return (
        <div id="skills" className="flex flex-col justify-center items-center relative z-10 pb-10 pt-36">
            <div className="flex flex-col justify-between items-center flex-wrap w-full max-w-5xl gap-12">
                <div className="text-5xl font-bold text-pampas text-center text-primary-dark ">
                    Skills
                </div>
                <div className="text-xl text-pampas text-center max-w-xl text-secondary-dark ">
                    Here are some of my skills on which I have been working on for the past 2 years.
                </div>
                <div className="w-full flex flex-wrap mt-4 gap-14 justify-center">
                    {skills.map((skill, index) => (
                        <div key={index} className="w-full max-w-2xl bg-card bg-carrara border shadow-md shadow-carrara rounded-lg p-4 md:max-w-md md:p-2">
                            <div className="text-2xl font-semibold text-secondary-dark text-center mb-4">
                                {skill.title}
                            </div>
                            <div className="flex flex-wrap justify-center gap-4 ">
                                {skill.skills.map((item, subIndex) => (
                                    <div key={subIndex} className="text-base font-normal bg-custombackground text-primary-light border border-primary-light rounded-lg p-2 flex items-center gap-2">
                                        <img src={item.image} alt={item.name} className="w-6 h-6" />
                                        <div className='text-pampas'>
                                        {item.name}
                                        </div>
                                        
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Skills;