import React from 'react';
import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

import { MdDone } from 'react-icons/md'
import { SiInstagram } from 'react-icons/si'
import getStarted from '../assets/lets-get-started.jpg';

const GetStarted = () => {
  const form = useRef();
  const [submitted, setSubmitted] = useState(false)
  
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(import.meta.env.VITE_EMAILJS_SERVICE_ID, import.meta.env.VITE_EMAILJS_ADMIN_TEMPLATE_ID, form.current, 'Ehti-LHCaxse-Td2b')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });

    emailjs.sendForm(import.meta.env.VITE_EMAILJS_SERVICE_ID, import.meta.env.VITE_EMAILJS_USER_TEMPLATE_ID, form.current, 'Ehti-LHCaxse-Td2b')
    .then((result) => {
        console.log(result.text);
    }, (error) => {
        console.log(error.text);
    });
  };

  return (
    <section id='GetStarted' className='md:h-screen grid grid-cols-1 md:grid-cols-2'>
      <div className={`${submitted ? 'hidden' : ''} my-auto p-6 py-16 md:p-16 order-last md:order-1`}>
        <h3 className='text-3xl font-bold uppercase mb-10'>Get started now</h3>
        <form ref={form} id='ContactForm' onSubmit={sendEmail} className='grid sm:grid-cols-2 grid-cols-1 gap-4'>
          <input type='text' name='firstname' id='firstname' placeholder='First Name' className='p-4 bg-gray-100 rounded-md'/>
          <input type='text' name='lastname' id='lastname' placeholder='Last Name' className='p-4 bg-gray-100 rounded-md'/>
          <input type='email' name='email' id='email' placeholder='Email' className='sm:col-span-2 p-4 bg-gray-100 rounded-md'/>
          <textarea name='message' id='message' rows={10} placeholder='Your message' className='resize-none sm:col-span-2 p-4 bg-gray-100 rounded-md'/>
          <input type='submit' value='SEND'
          className='mt-4 border-2 cursor-pointer border-black bg-black text-white hover:bg-white hover:text-black py-3 px-14 rounded-md uppercase flex flex-row justify-center items-center gap-3 w-full md:w-auto'
          onClick={() => setSubmitted(prev => !prev)}
          />
          
        </form>

      </div>

      <div id='contacted' className={submitted ? 'flex flex-col justify-center items-center py-32 md:px-16 px-6 order-last md:order-1' : 'hidden'}>
        <div className='bg-green-500 p-4 rounded-full text-white mb-16'>
          <MdDone size={40}/>
        </div>
        <div>
          <div className='mb-1 text-xl'>Thank you for your message.</div>
          <div className='text-xl'>I will get in touch with you soon.</div>
        </div>
        
          <p className='mt-36 mb-4 uppercase'>follow me</p>
          <a href="https://www.instagram.com/nonokoussoufans" target="_blank" className='bg-black hover:bg-white p-5 rounded-full text-white hover:text-black'>
            <SiInstagram className="text-4xl"/>
          </a>
        
      </div>

      <img src={getStarted} alt='lets-get-started' className='order-1 md:order-last object-contain md:object-cover object-center md:overflow-hidden h-full w-full'/>
    </section>
  )
}

export default GetStarted