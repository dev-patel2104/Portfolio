import React from 'react';
import dalLogo from '../assets/dalLogo.svg';
import lnmLogo from '../assets/lnmLogo.svg';
import udemyLogo from '../assets/udemyLogo.svg';
import awsLogo from '../assets/awsLogo.svg';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

function education() {

    const courses = [
        {
            "link": "https://drive.google.com/file/d/1PVWcAc1O5Zy1eRH55Vf2nfNoi94B5VHE/view?usp=drive_link",
            "logo": awsLogo,
            "courseTitle": "AWS Certified Cloud Practitioner",
            "organization": "Amazon Web Services"
        },
        {
            "link": "https://drive.google.com/file/d/1YodhJ7nvxT9TaXSPeVlyeCGKaTtIvnbT/view?usp=drive_link",
            "logo": udemyLogo,
            "courseTitle": "Complete C# Unity Developer 2D: Learn to Code Making Games"
        },
        {
            "link": "https://drive.google.com/file/d/1JQCgdeAvpuRR6HHERJ7zq6DwJ9UOWR5C/view?usp=drive_link",
            "logo": udemyLogo,
            "courseTitle": "Complete C# Unity Developer 3D: Learn to Code Making Games"
        }
    ];

    const handleLnmClick = (event) => {
        const url = 'https://drive.google.com/file/d/1pvPIporOI9M-lTPuR2wqSCqdcneupHrp/view?usp=drive_link';
        window.open(url, '_blank');
    }
    return (
        // <div className="flex h-90vh bg-gradient-to-b from-blue-300  to-blue-550">
        //     <div className="flex-1 h-screen " >
        //         <div className='flex-col w-full justify-center'>
        //             <div className='flex w-full justify-center my-8'>
        //                 <h1 className="text-5xl font-extrabold "> Degrees </h1>
        //             </div>
        //             <div className="flex justify-center">
        //                 <div className="grid grid-cols-1 gap-4 w-7/12">
        //                     <div className="p-4 rounded-md flex gap-8">
        //                         <div className="rounded-full flex items-center w-32 h-32 justify-center border border-black pt-2">
        //                             <img src={dalLogo} alt="Image 1" className="w-24 h-24  " />
        //                         </div>
        //                         <div className="flex-1 rounded-lg border border-black">
        //                             <h1 className="text-lg font-extrabold">Dalhousie University</h1>
        //                             <h2 className= "font-bold"> Masters in Applied Computer Science </h2>
        //                             <p></p>
        //                         </div>
        //                     </div>
        //                     <div className="p-4 rounded-md flex gap-8">
        //                         <div className="rounded-full flex items-center w-32 h-32 justify-center border border-black ">
        //                             <img src={lnmLogo} alt="Image 1" className="w-24 h-24   " />
        //                         </div>
        //                         <div className="flex-1 rounded-lg border border-black">
        //                             <h2 className="text-lg font-semibold">Card 1</h2>
        //                             <p>Description for Card 1 goes here.</p>
        //                         </div>
        //                     </div>

        //                 </div>
        //             </div>
        //         </div>

        //         <div className='flex-col w-full justify-center'>
        //             <div className='flex w-full justify-center mt-16 mb-8'>
        //                 <h1 className="text-5xl font-extrabold "> Certifications </h1>
        //             </div>
        //             <div className="flex justify-center">
        //                 <div className="grid grid-cols-1 gap-4 w-7/12">
        //                     <div className="p-4 rounded-md flex gap-8">
        //                         <div className="rounded-full flex items-center w-32 h-32 justify-center border border-black">
        //                             <img src={udemyLogo} alt="Image 1" className="w-24 h-24  " />
        //                         </div>
        //                         <div className="flex-1 rounded-lg border border-black">
        //                             <h2 className="text-lg font-semibold">Card 1</h2>
        //                             <p>Description for Card 1 goes here.</p>
        //                         </div>
        //                     </div>
        //                     <div className="p-4 rounded-md flex gap-8">
        //                         <div className="rounded-full flex items-center w-32 h-32 justify-center border border-black">
        //                             <img src={udemyLogo} alt="Image 1" className="w-24 h-24   " />
        //                         </div>
        //                         <div className="flex-1 rounded-lg border border-black">
        //                             <h2 className="text-lg font-semibold">Card 1</h2>
        //                             <p>Description for Card 1 goes here.</p>
        //                         </div>
        //                     </div>

        //                 </div>
        //             </div>
        //         </div>

        //     </div>

        // </div>
        <div className="flex-col h-90vh bg-custombackground bg-fixed">
            <div className='flex w-full justify-center mb-10 pt-8'>
                <h1 className="text-5xl font-bold text-gray-200 "> Education </h1>
            </div>
            <VerticalTimeline>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work "
                    contentStyle={{ background: 'rgb(241,242,227)', color: 'white', fontWeight: 'bold' }}
                    contentArrowStyle={{ borderRight: '7px solid carrara' }}
                    date="2023 - Present"
                    iconStyle={{ background: 'rgb(130, 120, 110)', color: 'rgb(130, 120, 110)' }}
                    style={{}}
                >
                    <div >
                        <img src={dalLogo} alt="Dalhousie University" className="w-24 h-24" />
                    </div>
                    <h3 className="vertical-timeline-element-title text-black ">Dalhousie University</h3>
                    <h4 className="vertical-timeline-element-subtitle text-black">Masters in Applied Computer Science</h4>
                </VerticalTimelineElement>

                <VerticalTimelineElement
                    className="vertical-timeline-element--work "
                    contentStyle={{ background: 'rgb(241,242,227)', color: 'white', fontWeight: 'bold' }}
                    contentArrowStyle={{ borderRight: '7px solid carrara' }}
                    date="2018 - 2022"
                    iconStyle={{ background: 'rgb(130, 120, 110)', color: 'rgb(130, 120, 110)' }}
                    onTimelineElementClick={handleLnmClick}
                    style={{
                        cursor: 'pointer',
                    }}
                >
                    <div>
                        <img src={lnmLogo} alt="Lnm logo" className="w-32 h-32" />
                    </div>
                    <h3 className="vertical-timeline-element-title text-black">The LNM Institute Of Information Technology</h3>
                    <h4 className="vertical-timeline-element-subtitle text-black">B.Tech in Computer Science and Engineering </h4>
                </VerticalTimelineElement>
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