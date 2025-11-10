import React from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import details from '../assets/details.json';

function work() {

    const workInfo = details.work;
    return (
        <div className="flex-col bg-custombackground  h-auto">
            <div className='flex w-full justify-center pt-16'>
                <h1 className="text-4xl font-bold text-gray-200 "> Experience </h1>
            </div>
            <div className='flex w-full justify-center mb-16 pt-6'>
                {/* <h1 className="text-2xl font-semibold text-gray-200 "> Professional Experience Across Companies and Projects </h1> */}
            </div>
            <VerticalTimeline>
                {workInfo.map((item, index) => (
                    <VerticalTimelineElement
                        key={index}
                        className="vertical-timeline-element--work "
                        contentStyle={{ background: 'rgb(241,242,227)', color: 'white' }}
                        contentArrowStyle={{ borderRight: '7px solid carrara' }}
                        date={item.date}
                        iconStyle={{ background: 'rgb(130, 120, 110)', color: 'rgb(130, 120, 110)' }}
                    >
                        <div>
                            <img src={item.logo} alt={item.company} className="w-32 h-32" />
                        </div>
                        <h3 className="text-2xl font-extrabold vertical-timeline-element-title text-black ">{item.title}</h3>
                        <h4 className="text-xl font-semibold vertical-timeline-element-subtitle text-black">{item.company}</h4>
                        <p className="text-lg vertical-timeline-element-subtitle text-black">
                            <ul className="gap-4">
                                {item.points.map((point, i) => (
                                    <li key={i}> &bull; {point}</li>
                                ))}
                            </ul>
                        </p>
                    </VerticalTimelineElement>
                ))}
            </VerticalTimeline>
        </div>
    );
}

export default work;