import React from 'react'
import About from './component/About'
import { Hero } from './component/Hero'

const App = () => {
  return (
    <main className='relative min-h-screen w-screen overflow-x-hidden'>
      <Hero/>
      <About />
    </main>
  )
}

export default App