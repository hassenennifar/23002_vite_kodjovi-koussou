import React from 'react';

import { SiWhatsapp, SiInstagram, SiMaildotru, SiTiktok } from 'react-icons/si';

const Contact = () => {
  return (
    <section id='Contact' className='flex-1 h-full bg-gray-400'>
        <div className=' bg-slate-100 flex flex-col justify-center items-center h-full md:px-48 gap-48 px-6 py-16'>
            
                <h3 className='text-3xl font-bold uppercase'>Contact</h3>
                <ul className='flex flex-wrap gap-16 justify-center items-center w-full'>
                    <a href='https://wa.me/4917681376910' target='_blank' className=''>
                        <li className='flex flex-col justify-center items-center gap-4 w-[250px] py-6 hover:text-white hover:bg-black rounded-lg'>
                            <SiWhatsapp className='text-5xl'/>
                            <p className='text-2xl font-semibold'>WhatsApp</p>
                            <p>+49 176 123456</p>
                        </li>
                    </a>
                    <a href='https://www.instagram.com/nkoussou31/' target='_blank'>
                        <li className='flex flex-col justify-center items-center gap-4 w-[250px] py-6 hover:text-white hover:bg-black rounded-lg'>
                            <SiInstagram className='text-5xl'/>
                            <p className='text-2xl font-semibold'>Instagram</p>
                            <p>@nkoussou31</p>
                        </li>
                    </a>
                    <a href='mailto:kodjovi-koussou@gmail.com' target='_blank'>
                        <li className='flex flex-col justify-center items-center gap-4 w-[250px] py-6 hover:text-white hover:bg-black rounded-lg'>
                            <SiMaildotru className='text-5xl'/>
                            <p className='text-2xl font-semibold'>Email</p>
                            <p>kodjovi-koussou@gmail.com</p>
                        </li>
                    </a>
                    <a href='https://www.tiktok.com/nkoussou31/' target='_blank'>
                        <li className='flex flex-col justify-center items-center gap-4 w-[250px] py-6 hover:text-white hover:bg-black rounded-lg'>
                            <SiTiktok className='text-5xl' />
                            <p className='text-2xl font-semibold'>TikTok</p>
                            <p>@nkoussou31</p>
                        </li>
                    </a>
                </ul>
            
        </div>
    </section>
  )
}

export default Contact