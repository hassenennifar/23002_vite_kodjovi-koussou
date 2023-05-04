import React from 'react'

const Footer = () => {
  return (
    <section className='flex p-5 bg-slate-50 justify-around'>
      <a href='#home'>
        <div className='uppercase'>2023 <span className='font-bold'>Kodjovi Koussou</span> - Insert your motto here.</div>
      </a>
       <div className='uppercase'>All Rights Reserved. <a href='' className='hover:underline'>Terms and Conditions</a> | <a href='' className='hover:underline'>Privacy Policy</a></div>
    </section>
  )
}

export default Footer