import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import AnimatedTitle from '../../global/AnimatedTitle'
import Marquee from './components/Marquee'

type Props = {}

const Hero = (props: Props) => {

  return (
    <section className='relative landscape:h-screen portrait:h-[95vh] portrait:pt-[10vh] flex flex-col overflow-hidden justify-around lg:justify-evenly' >
      
      <div className='landscape:absolute z-10 w-1/2 landscape:w-1/4 self-end landscape:top-[24vh] portrait:top-[10vh] mr-[6vw]'>
        <p className=' lg:text-[1.1vw] md-portrait:text-xl text-md leading-tight text-left font-sans font-medium text-dark '>
          I help brands and companies build meaningful products and create memorable digital experiences from concept to launch.
        </p>
      </div>
      
      <div className='relative flex flex-col gap-[1.5vh]'>
        <AnimatedTitle text="creative" className='overflow-hidden pl-6 md-portrait:py-5 text-[22vw] lg:text-[14vw] md-portrait:text-12xl landscape:leading-tight -mt-5 -mb-5 landscape:-mt-10 landscape:-mb-10 text-darkest-dark font-medium' />
        <Marquee />
        <AnimatedTitle text="solutions" className='overflow-hidden pr-6 md-portrait:py-5 text-[22vw] lg:text-[14vw] md-portrait:text-12xl landscape:leading-tight -mt-5 -mb-5 landscape:-mt-10 landscape:-mb-10 text-darkest-dark flex justify-end landscape:justify-center font-medium'/>
      </div>

      <div className='landscape:absolute self-end bottom-[15vh] rotate-[-17deg] lg:rotate-[-22deg] mr-[10vw]'>
        <p className=' p-[0.5vw] text-[4vw] leading-[8vw] lg:text-2xl text-center font-semibold text-accent font-handwritten '>based in Malmö</p>
      </div>

      <div className='flex landscape:absolute portrait:self-start landscape:self-end landscape:bottom-[8vh] landscape:ml-[1.75vw] portrait:ml-20 landscape:mr-[6vw]'>
        <svg className="text-darkest-dark h-[14vw] w-[14vw] landscape:h-[6vw] landscape:w-[6vw] transform -rotate-90" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.5" viewBox="0 0 24 24">
          <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
          <circle cx="12" cy="12" r="9" />
          <polyline points="12 8 8 12 12 16" />
          <line x1="16" y1="12" x2="8" y2="12" />
        </svg>
      </div>

      

    </section>

  )
}

export default Hero