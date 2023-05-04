import React from 'react'

import { Navbar, Hero, AboutMe, GetStarted, Contact, Footer } from './components' 

const App = () => {
  return (
    <div className='overflow-hidden'>
      <div id='home' className=''>
        <div className='h-screen flex flex-col'>
          <Navbar />
          <Hero />
        </div>
      </div>
      <AboutMe />
      <GetStarted />
      <div className='md:h-screen flex flex-col'>
        <Contact />
        <Footer />
      </div>
    </div>
  )
}

export default App