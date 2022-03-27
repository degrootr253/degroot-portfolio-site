import React from 'react'

const ContactForm = () => {
    return (
        <div name='contact' className='w-full h-screen bg-[#0a192f] flex justify-center p-4 items-center'>
            <form action="" className="flex flex-col max-w-[600px] w-full">
                <div className='pb-8 '>
                    <p className='text-4xl font-bold text-gray-300 inline border-b-4 border-pink-600'>Contact</p>
                    <p className='text-gray-300 py-4'>//Shoot me an email!</p>
                </div>
                <input className='bg-[#ccd6f6] p-2' type='text' placeholder='Name' name='name' />
                <input className='my-4 p-2 bg-[#ccd6f6]' type='email' placeholder='Email' name='email' />
                <textarea className='bg-[#ccd6f6] p-2' name='message' rows='10' placeholder='Message' />
                <div className='flex justify-end'>
                    <button className='text-white border-2 hover:bg-pink-600 hover:border-pink-600 rounded-full my-8 px-7 py-4'>Submit</button>
                </div>


            </form>


        </div>
    )
}

export default ContactForm
