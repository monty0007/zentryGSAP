import React from 'react'
import About from './component/About'
import { Hero } from './component/Hero'

const App = () => {
  return (
    <main className='relative min-h-screen w-screen overflow-x-hidden'>
      <Hero/>
      <About />

      <section className='z-0 min-h-screen bg-blue-500'/>
    </main>
  )
}

export default App