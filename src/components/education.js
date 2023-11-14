import React from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import details from '../assets/details.json';

function education() {

    const courses = details.certifications;
    const education = details.education;
    return (
        <div className="flex-col h-90vh bg-custombackground bg-fixed">
            <div className='flex w-full justify-center mb-10 pt-8'>
                <h1 className="text-5xl font-bold text-gray-200 "> Education </h1>
            </div>
            <VerticalTimeline>
                {education.map((item, index) => (
                    <VerticalTimelineElement
                        key={index}
                        className="vertical-timeline-element--work "
                        contentStyle={{ background: 'rgb(241,242,227)', color: 'white', fontWeight: 'bold' }}
                        contentArrowStyle={{ borderRight: '7px solid carrara' }}
                        date={item.date}
                        iconStyle={{ background: 'rgb(130, 120, 110)', color: 'rgb(130, 120, 110)' }}
                    >
                        <div>
                            <img src={item.logo} alt={item.institution} className="w-24 h-24" />
                        </div>
                        <h3 className="vertical-timeline-element-title text-black ">{item.institution}</h3>
                        <h4 className="vertical-timeline-element-subtitle text-black">{item.degree}</h4>
                    </VerticalTimelineElement>
                ))}
            </VerticalTimeline>

            <div className='flex-col w-full justify-center'>
                <div className='flex w-full justify-center mt-24 mb-4 '>
                    <h1 className="text-5xl font-bold text-gray-200"> Certifications </h1>
                </div>
                <div className="flex justify-center">
                    <div className="grid grid-cols-3 gap-20 w-full p-12">
                        {courses.map((course, index) => (
                            <a key={index} href={course.link} target='_blank' rel='noreferrer' className='cursor-pointer'>
                                <div className=" rounded-md flex gap-8 border border-black justify-center bg-carrara shadow-md shadow-white 
                            hover:shadow-lg hover:shadow-white transition duration-300">
                                    <div className='flex-col flex items-center w-full '>
                                        <div className='flex justify-center w-full h-32'>
                                            <img src={course.logo} alt={`Logo ${index + 1}`} className="w-32 h-32" />
                                        </div>
                                        <div className='basis-20 bg-darkSkin p-4 rounded-b-md w-full'>
                                            <h1 className='text-pampas text-center'>{course.courseTitle}</h1>
                                            {course.organization && <h2 className='text-pampas text-center'>{course.organization}</h2>}
                                        </div>
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