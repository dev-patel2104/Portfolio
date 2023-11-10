import React from 'react';
import Tricerialogo from '../assets/Tricerialogo.svg';
import KhatrijiLogo from '../assets/Khatriji_logo.svg';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

function work() {

    return (
        <div className="flex-col bg-custombackground  h-auto">
            <div className='flex w-full justify-center pt-16'>
                <h1 className="text-5xl font-bold text-gray-200 "> Experience </h1>
            </div>
            <div className='flex w-full justify-center mb-16 pt-6'>
                <h1 className="text-2xl font-semibold text-gray-200 "> My work experience as a software engineer and working on different companies and projects. </h1>
            </div>
            <VerticalTimeline>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work "
                    contentStyle={{ background: 'rgb(241,242,227)', color: 'white' }}
                    contentArrowStyle={{ borderRight: '7px solid carrara' }}
                    date="Jun 2021 - Jul 2021"
                    iconStyle={{ background: 'rgb(130, 120, 110)', color: 'rgb(130, 120, 110)' }}
                    style={{}}
                >
                    <div >
                        <img src={KhatrijiLogo} alt="Khatriji Gaming" className="w-32 h-32" />
                    </div>
                    <h3 className="text-2xl font-extrabold vertical-timeline-element-title text-black ">Game Devloper intern</h3>
                    <h4 className="text-xl font-semibold vertical-timeline-element-subtitle text-black">Khatriji Gaming</h4>
                    <p className="text-lg vertical-timeline-element-subtitle text-black">
                        <ul class="gap-4">
                            <li> &bull; Participated in prototyping of 2 game ideas under my mentor.</li>
                            <li> &bull; Worked on a patch update for an already existing game to enhance the graphics and improved the overall efficiency of the game by almost 50%.</li>
                        </ul>
                    </p>

                </VerticalTimelineElement>

                <VerticalTimelineElement
                    className="vertical-timeline-element--work "
                    contentStyle={{ background: 'rgb(241,242,227)', color: 'white' }}
                    contentArrowStyle={{ borderRight: '7px solid carrara' }}
                    date="Apr 2020 - Aug 2020"
                    iconStyle={{ background: 'rgb(130, 120, 110)', color: 'rgb(130, 120, 110)' }}
                    style={{}}
                >
                    <div >
                        <img src={Tricerialogo} alt="Triceria Solutions logo" className="w-32 h-32" />
                    </div>
                    <h3 className="text-2xl font-extrabold vertical-timeline-element-title text-black ">Game Devloper intern</h3>
                    <h4 className="text-xl font-semibold vertical-timeline-element-subtitle text-black">Triceria Solutions</h4>
                    <p className="text-lg vertical-timeline-element-subtitle text-black">
                        <ul class="gap-4">
                            <li> &bull; Developed a multiplayer game where two players cooperate with each other to cross obstacles and solve puzzles.</li>
                            <li> &bull; Designed the game with a dynamic rope mechanic connecting players and challenging puzzles, emphasizing collaboration and teamwork.</li>
                            <li> &bull; Created and tested multiple working prototypes to fine-tune gameplay mechanics and user interface, enhancing engagement.</li>
                        </ul>
                    </p>

                </VerticalTimelineElement>
            </VerticalTimeline>
        </div>
    );
}

export default work;