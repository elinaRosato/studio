import React, {useState, useEffect} from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { useRef } from 'react';

interface Case {
  title: string
  subtitle: string
  src: string
  bgColor: string
  href: string
}

type Props = {
  modal: { active: boolean, index: number },
  cases: Case[]
}

const CasesModal = ({modal, cases}: Props) => {
  const { active, index } = modal

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

  const scaleAnimation = {
        initial: {scale: 0, x: mousePosition.x-192, y:mousePosition.y-104 },
        enter: {scale: 1, x: mousePosition.x-192, y:mousePosition.y-104, transition: {type:'tween', duration: 0.4, ease: 'backOut'}},
        closed: {scale: 0, x: mousePosition.x-192, transition: { duration: 0.4, ease: [0.32, 0, 0.67, 0]}}
    }
  const btnAnimation = {
        initial: {scale: 0, x: mousePosition.x-60, y:mousePosition.y-40 },
        enter: {scale: 1, x: mousePosition.x-60, y:mousePosition.y-40, transition: {type:'tween', duration: 0.6, ease: 'backOut'}},
        closed: {scale: 0, x: mousePosition.x-60, transition: { duration: 0.6, ease: [0.32, 0, 0.67, 0]}}
    }

  return (
    <>
      <motion.div variants={scaleAnimation} initial='initial' animate={active ? "enter" : "closed"} className={`hidden lg:flex lg:flex-col lg:absolute top-0 left-0 w-[330px] h-[220px] items-center justify-center overflow-hidden pointer-events-none`}>
        <div style={{top: index * -100 + "%"}} className={`absolute w-full h-full transition-all duration-500 ease-in-out`}>
            {cases.map((caseItem, index) => {
              const {title, src, bgColor} = caseItem
              return(
                <div key={index} style={{backgroundColor: bgColor}} className={`relative h-full w-full flex items-center justify-center`} >
                  <Image src={src} width={300} height={0}  objectFit='cover' alt={title} className=' h-auto'/>
                </div>
              )}
            )}
        </div>
      </motion.div>
      <motion.div className='absolute top-0 left-0 h-[80px] w-[80px] bg-accent rounded-full pointer-events-none z-2 flex items-center justify-center ' variants={btnAnimation} initial="initial" animate={active ? "enter" : "closed"}>
        <p className='text-almost-white font-roboto font-normal text-[1vw]'>Open</p>
      </motion.div>
    </>
  )
}

export default CasesModal
