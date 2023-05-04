import React from 'react'
import { useState } from 'react'
import { RxHamburgerMenu, RxCross1 } from 'react-icons/rx'
import { SiInstagram } from 'react-icons/si'

const Navbar = () => {
  const [active, setActive] = useState(false)

  return (
    <nav className={`sm:p-16 p-6 xl:max-w-[1280px] w-full xl:m-auto  ${active? 'bg-white absolute top-0 left-0 h-screen' : ''}`}>
      <div className='flex justify-between items-center'>
        <a href="#home" className='font-semibold uppercase text-xl'>Kodjovi Koussou</a>
        <div className='hidden md:flex md:gap-6 md:items-center md:uppercase'>
          <ul className='flex gap-6'>
            <a href="./"><li className='border-b-2 border-transparent hover:border-b-2 hover:border-black py-2 px-2'>Home</li></a>
            <a href="#AboutMe"><li className='border-b-2 border-transparent hover:border-b-2 hover:border-black py-2 px-2'>About me</li></a>
            <a href="#Contact"><li className='border-b-2 border-transparent hover:border-b-2 hover:border-black py-2 px-2'>Contact</li></a>
          </ul>
          <a href="#GetStarted" className='border-2 border-black bg-black text-white hover:bg-white hover:text-black px-6 py-2 rounded-md'>Start now</a>
        </div>
        <div className='md:hidden' onClick={() => setActive(prev => !prev)}>
          <RxHamburgerMenu size={30} className={active? 'hidden' : 'cursor-pointer'}/>
          <RxCross1 size={30} className={active? 'cursor-pointer' : 'hidden'}/>
        </div>
      </div>
      <div onClick={() => setActive(prev => !prev)} className={active? 'h-full w-full p-6 md:p-16 py-16 bg-white rounded-md flex flex-col gap-6 justify-between items-center uppercase' : 'hidden'}>
            <ul className='flex flex-col items-center justify-around gap-6 w-full'>
              <a href="./"><li className='border-b-2 border-transparent hover:border-b-2 hover:border-black py-2 px-2'>Home</li></a>
              <a href="#AboutMe"><li className='border-b-2 border-transparent hover:border-b-2 hover:border-black py-2 px-2'>About me</li></a>
              <a href="#Contact"><li className='border-b-2 border-transparent hover:border-b-2 hover:border-black py-2 px-2'>Contact</li></a>
              <a href="#GetStarted" className='border-2 border-black bg-black text-white hover:bg-white hover:text-black px-6 py-2 rounded-md w-full text-center'>Start now</a>
            </ul>
            <div className='flex flex-col items-center gap-2'>
              <p>follow me</p>
              <a href="https://www.instagram.com/nonokoussoufans" target="_blank" >
                <div className=' bg-black hover:bg-white p-5 rounded-full text-white hover:text-black'>
                  <SiInstagram className="text-4xl"/>
                </div>
              </a>
            </div>
          </div>
    </nav>
  )
}

export default Navbar