import React, { useState } from 'react'
import { FaBars, FaTimes, FaGithub, FaLinkedin } from 'react-icons/fa'
import { HiOutlineMail } from 'react-icons/hi'
import { BsFillPersonLinesFill } from 'react-icons/bs'
import tailwind from '../assets/images/tailwind.png'
import { Link } from 'react-scroll'
const Navbar = () => {
    const [nav, setNav] = useState(false)
    const handleClick = () => setNav(!nav)
    return (
        <div className="fixed w-full h-[80px] flex justify-between items-center text-gray-300 px-4 bg-[#0a192f]">
            <div>
                <img src={tailwind} alt="Tailwind" style={{ width: "50px" }} />
            </div>

            {/* Menu */}
            <ul className="hidden md:flex">
                <li><Link to="home" smooth={true} offset={50} duration={1000}>
                    Home
                </Link></li>
                <li><Link  to="about" smooth={true} offset={50} duration={1000}>
                    About
                </Link></li>
                <li><Link to="skills" smooth={true} offset={50} duration={1000}>
                    Skills
                </Link></li>
                <li><Link to="projects" smooth={true} offset={50} duration={1000}>
                    Projects
                </Link></li>
                <li><Link to="contact" smooth={true} offset={50} duration={1000}>
                    Contact
                </Link></li>
            </ul>


            {/* Hamburger */}
            <div onClick={handleClick} className="md:hidden z-10">
                {!nav ? <FaBars /> : <FaTimes />}
            </div>

            {/* Mobile Menu */}
            <ul className={!nav ? "hidden" : "absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center"}>
                <li className="py-6 text-4xl"><Link onClick={handleClick} to="home" smooth={true} offset={50} duration={1000}>
                    Home
                </Link></li>
                <li className="py-6 text-4xl"><Link onClick={handleClick} to="about" smooth={true} offset={50} duration={1000}>
                    About
                </Link></li>
                <li className="py-6 text-4xl"><Link onClick={handleClick} to="skills" smooth={true} offset={50} duration={1000}>
                    Skills
                </Link></li>
                <li className="py-6 text-4xl"><Link onClick={handleClick} to="projects" smooth={true} offset={50} duration={1000}>
                    Projects
                </Link></li>
                <li className="py-6 text-4xl"><Link onClick={handleClick} to="contact" smooth={true} offset={50} duration={1000}>
                    Contact
                </Link></li>
            </ul>

            {/* Social Icons */}
            <div className='hidden lg:flex fixed flex-col top-[35%] left-0'>
                <ul>
                    <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px]  duration-700 bg-[#006192] rounded-xl">
                        <a className='flex items-center justify-between w-full text-gray-300' href="https://www.linkedin.com/in/ryan-degroot/">
                            Linkedin <FaLinkedin size={'30px'} />
                        </a>
                    </li>
                    <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px]  duration-700 bg-[#333] rounded-xl">
                        <a className='flex items-center justify-between w-full text-gray-300' href="https://github.com/degrootr253">
                            Github <FaGithub size={'30px'} />
                        </a>
                    </li>
                    <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px]  duration-700 bg-orange-500 rounded-xl">
                        <a className='flex items-center justify-between w-full text-gray-300' href="mailto:degrootr253@gmail.com">
                            Email <HiOutlineMail size={'30px'} />
                        </a>
                    </li>
                    <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px]  duration-700 bg-lime-600 rounded-xl">
                        <a className='flex items-center justify-between w-full text-gray-300' href="https://docs.google.com/document/d/1ueFW0LgsmBbPlKOM3yS5QYcXK1Kgo2xqe1H2CNvV9I8/export?format=pdf">
                            Resume <BsFillPersonLinesFill size={'30px'} />
                        </a>
                    </li>
                </ul>


            </div>
        </div>
    )
}

export default Navbar
