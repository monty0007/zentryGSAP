import React from 'react'
import About from './component/About'
import Contact from './component/Contact'
import Features from './component/Features'
import Footer from './component/Footer'
import { Hero } from './component/Hero'
import Navbar from './component/Navbar'
import Story from './component/Story'

const App = () => {
  return (
    <main className='relative min-h-screen w-screen overflow-x-hidden'>
      <Navbar />
      <Hero/>
      <About />
      <Features />
      <Story />
      <Contact />
      <Footer />

      {/* <section className='z-0 min-h-screen bg-blue-500'/> */}
    </main>
  )
}

export default App