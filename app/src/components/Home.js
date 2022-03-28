import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";
import { Link } from "react-scroll";

const Home = () => {
    return (
        <div name="home" className=" w-full h-screen bg-dark-gray">
            {/* Container */}
            <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
                <p className="text-orange">Hi, my name is</p>
                <h1 className="text-4xl sm:text-7xl font-bold text-white">
                    Ryan DeGroot
                </h1>
                <h2 className="text-4xl sm:text-4xl font-bold text-light-blue">
                    I am a FullStack Developer
                </h2>
                <p className="text-light-blue py-4 max-w-[700px]">
                    Adaptable | Good Communicator | Love to Learn
                </p>
                <div>
                    <Link to="projects" smooth={true} offset={50} duration={1000}>
                        <button className="text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-orange hover:border-orange">
                            View Work
                            <span className='group-hover:rotate-90 duration-300'>
                                <HiArrowNarrowRight className='ml-3' />
                            </span>
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Home;
