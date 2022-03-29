import React from "react";

const About = () => {
    return (
        <div name="about" className="w-full h-screen bg-dark-gray text-white">
            <div className="flex flex-col justify-center items-center w-full h-full">
                <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8">
                    <div className="sm:text-right pb-8 pl-4">
                        <p className="text-4xl font-bold inline border-b-4 border-orange">About</p>
                    </div>
                    <div></div>
                </div>
                <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
                    <div className='sm:text-right text-4xl font-bold'>
                        <p>Hi, my name is Ryan, please take a look around!</p>
                    </div>
                    <div>
                        <p>
                            I am an aspiring FullStack Developer that is continuing to learn and grow in my coding skills. Currently, I live in Seattle, WA working for Seattle Nativity School, a private middle school for at risk students. My hobbies include playing soccer, learning new skills in coding, and having good drinks with family and friends. 
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
