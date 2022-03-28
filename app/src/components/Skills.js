import React from 'react'
import { SKILLS }from '../assets/data.js'

const Skills = () => {
    return (
        <div name='skills' className='w-full h-screen bg-dark-gray text-white'>
            {/* Container */}
                <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
                    <div>
                        <p className='text-4xl font-bold inline border-b-4 border-orange'>Skills</p>
                        <p className='py-4'>//These are the technologies I've worked with</p>
                    </div>
                
                <div className='w-full grid grid-cols-2 sm:grid-cols-3 gap-5 text-center py-8'>
                    {SKILLS && SKILLS.map((skill) =>
                        <div key={skill.id} className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                            <img className='w-20 mx-auto' src={skill.img} alt={skill.name + "_icon"} />
                            <p className='py-4'>{skill.name}</p>
                        </div>
                    )
                    }
                </div>
            </div>
            </div>
    )
};

export default Skills
