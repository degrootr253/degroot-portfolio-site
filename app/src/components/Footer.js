import React from 'react'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { HiOutlineMail } from 'react-icons/hi'
import { BsFillPersonLinesFill } from 'react-icons/bs'

const Footer = () => {
    return (
        <div name='footer' className='bg-dark-gray w-full h-full flex justify-center items-center flex-wrap'>
            <ul className=' visible lg:invisible sm:flex flex-wrap flex-col md:flex-row'>
                <li className="flex justify-between items-center bg-[#006192] rounded-full m-3">
                    <a className='flex items-center justify-between w-full text-white' href="https://www.linkedin.com/in/ryan-degroot/">
                        <FaLinkedin size={'30px'} /><p className='ml-3'>Linkedin</p>
                    </a>
                </li>
                <li className="flex justify-between items-center bg-[#333] rounded-full m-3">
                    <a className='flex items-center justify-between w-full text-white' href="https://github.com/degrootr253">
                       <FaGithub size={'30px'}/> <p className='ml-3'>Github</p>
                    </a>
                </li>
                <li className="flex justify-between items-center bg-peach rounded-full m-3">
                    <a className='flex items-center justify-between w-full text-white' href="mailto:degrootr253@gmail.com">
                    <HiOutlineMail size={'30px'} /><p className='ml-3'>Email</p>
                    </a>
                </li>
                <li className="flex justify-between items-center bg-dark-blue rounded-full m-3">
                    <a className='flex items-center justify-between w-full text-white' href="https://docs.google.com/document/d/1ueFW0LgsmBbPlKOM3yS5QYcXK1Kgo2xqe1H2CNvV9I8/export?format=pdf">
                        <BsFillPersonLinesFill size={'30px'} /><p className='ml-3'>Resume</p>
                    </a>
                </li>
            </ul>

        </div>
    )
}

export default Footer
