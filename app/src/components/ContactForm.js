import React from 'react'
import { useState } from "react";


const ContactForm = () => {

    const[mailerState, setMailerState] = useState({
        name: "",
        email: "",
        message: "",
    });

    function handleStateChange(e) {
    setMailerState((prevState) => ({
        ...prevState,
        [e.target.name]: e.target.value,
    }));
};


// Send Message
const submitEmail = async (e) => {
    e.preventDefault();
    console.log({ mailerState });
    const response = await fetch("http://localhost:3001/send", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({ mailerState }),
    })
      .then((res) => res.json())
      .then(async (res) => {
        const resData = await res;
        console.log(resData);
        if (resData.status === "success") {
          alert("Message Sent");
        } else if (resData.status === "fail") {
          alert("Message failed to send");
        }
      })
      .then(() => {
        setMailerState({
          email: "",
          name: "",
          message: "",
        });
      });
  };

    return (
        <div name='contact' className='w-full h-screen bg-[#0a192f] flex justify-center p-4 items-center'>
            <form onSubmit={submitEmail} method="POST" className="flex flex-col max-w-[600px] w-full">
                <div className='pb-8 '>
                    <p className='text-4xl font-bold text-gray-300 inline border-b-4 border-pink-600'>Contact</p>
                    <p className='text-gray-300 py-4'>//Shoot me an email!</p>
                </div>
                <input onChange={handleStateChange} className='bg-[#ccd6f6] p-2' type='text' placeholder='Name' name='name' required value={mailerState.name} />
                <input onChange={handleStateChange} className='my-4 p-2 bg-[#ccd6f6]' type='email' placeholder='Email' name='email' required value={mailerState.email} />
                <textarea onChange={handleStateChange} className='bg-[#ccd6f6] p-2' name='message' rows='10' placeholder='Message' required value={mailerState.message} />
                <div className='flex justify-end'>
                    <button className='text-white border-2 hover:bg-pink-600 hover:border-pink-600 rounded-full my-8 px-7 py-4'>Submit</button>
                </div>


            </form>


        </div>
    )
};

export default ContactForm
