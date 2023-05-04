import React from 'react'

import { SiInstagram } from 'react-icons/si';
import heroImg from "../assets/hero.jpg";

const Hero = () => {
  return (
    <section id='hero' className='xl:max-w-[1280px] xl:m-auto w-full sm:px-16 px-6 flex flex-col justify-around items-center m-auto h-full'>
      <div className='grid grid-cols-1 md:grid-cols-2 '>
        <div className='col-span-1 flex flex-col gap-14 md:gap-16 justify-start items-start mt-10'>
          <h1 className='uppercase sm:text-6xl text-4xl font-bold'>Take your fitness to the next level</h1>
          <p className='uppercase sm:text-xl'>Primium online and individual personal training in Munich with <span className='font-bold'>Kodjovi Koussou</span></p>
          <div className='flex gap-6 items-center uppercase'>
            <a href="#GetStarted" className='border-2 border-black bg-black text-white hover:bg-white hover:text-black px-6 py-2 rounded-md uppercase'>Start now</a>
          </div>
        </div>
      </div>

      
      <a href="https://www.instagram.com/nonokoussoufans" target="_blank" className=' bg-black hover:bg-white p-5 rounded-full text-white hover:text-black'>
          <SiInstagram className="text-4xl"/>
      </a>
      
      {/* <div className='absolute top-0 h-screen w-screen -z-10 bg-primaryOverlay'> */}
      <div className='absolute top-0 h-screen w-full -z-20 bg-dimWhite'>
      </div>
      <div className='absolute top-0 h-screen w-full -z-30 overflow-hidden'>
        <img src={heroImg} alt="heroImg" className='object-cover object-left h-full w-full'/>
      </div>
    </section>
  )
}

export default Hero