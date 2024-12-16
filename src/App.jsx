import React from 'react'
import About from './component/About'
import Features from './component/Features'
import { Hero } from './component/Hero'
import Navbar from './component/Navbar'

const App = () => {
  return (
    <main className='relative min-h-screen w-screen overflow-x-hidden'>
      <Navbar />
      <Hero/>
      <About />
      <Features />

      {/* <section className='z-0 min-h-screen bg-blue-500'/> */}
    </main>
  )
}

export default App