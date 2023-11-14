import React from "react";

function Contact(props) {
    return (
        <div className="flex-col bg-custombackground px-32 items-center" style={{ height: '92vh' }}>
            <div className="flex-1 h-full">
                <div className="flex flex-row h-full items-center justify-evenly">
                    <div className='flex-col w-4/6 items-center'>
                        <h1 className="text-5xl font-bold mb-8 text-pampas text-center"> Contact Me</h1>
                        <p className="ml-1 text-xl text-pampas text-center"> Seeking summer 2024 full-time/co-op opportunities in Canada. My inbox is open for exciting ideas or projects—let's connect and explore possibilities!</p>
                        <div className="flex-row flex justify-center">
                            <a href="mailto:Dev.Patel@dal.ca" target="_blank" rel="noreferrer">
                                <button className="text-pampas font-normal mt-8 rounded-full border-2 border-carrara pl-8 pr-8 pt-2 pb-2
            hover:bg-carrara hover:text-black  active:bg-darkSkin active:border-darkSkin transition duration-300">
                                    Ping Me
                                </button>
                            </a>
                        </div>

                    </div>
                </div>
            </div>
        </div>

    );
}

export default Contact;
