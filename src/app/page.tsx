'use client'

import type { NextPage } from 'next'
import { useEffect, useState } from 'react'
import Hero from './components/home/hero/Hero'
import About from './components/home/about/About'
import Cases from './components/home/cases/Cases'
import Contact from './components/home/contact/Contact'
import Services from './components/home/services/Services';
import Magazine from './components/Magazine';


type Props = {}

const Home: NextPage = () => {

  const [mousePosition, setMousePosition] = useState ({x:0, y:0})

  useEffect(() => {
    const mouseMove = (e: MouseEvent) => {
      setMousePosition({x:e.clientX, y:e.clientY})
    }

    window.addEventListener("mousemove", mouseMove)

    return () => {
      window.removeEventListener('mousemove', mouseMove);
    };
  }, [])

  
  return (
    <main className='overflow-hidden lg:mx-[1.5vw] lg:border-x-2 lg:border-x-darkest-dark'>
      <Hero/>
      <Magazine />
      <About />
      <Cases />
      <Services />
      <Contact />
    </main>
  )
}

export default Home
