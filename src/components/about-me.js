import React from 'react';
import myImage from '../assets/myPhoto.jpg';
import Skill from './skills.js';
import details from '../assets/details.json';

function aboutMe() {

    const myInfo = details.about_me;
    return (
        <div>
            <div className="flex-1 mt-16 pb-8" >
                <div className="flex flex-row h-full items-center justify-evenly">
                    <div className='flex justify-center items-center w-1/3'>
                        <img src={myImage} alt="some profile" className='flex-2 w-10/12 h-10/12'></img>
                    </div>
                    <div className='flex-col w-4/6 ml-40'>
                        <h1 className=' text-5xl text-pampas font-bold mb-4 ml-1'> About Me </h1>
                        {myInfo.para1 && (
                            <p className='text-lg font-semibold ml-1 text-pampas'>{myInfo.para1}</p>
                        )}
                        {myInfo.para2 && (
                            <p className="text-lg font-semibold my-4 ml-1 text-pampas">{myInfo.para2}</p>
                        )}
                        {myInfo.para3 && (
                            <p className="text-lg font-semibold my-4 ml-1 text-pampas">{myInfo.para3}</p>
                        )}
                    </div>

                </div>
            </div>
            <Skill />
        </div>
    );
}


export default aboutMe;