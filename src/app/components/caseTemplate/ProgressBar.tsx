import React from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'


type Props = {}

const ProgressBar = (props: Props) => {
  const { scrollYProgress } = useScroll() 

  return (
    <motion.div style={{ scaleX: scrollYProgress }} className='h-[1vh] lg:h-[2.5vh] bg-accent fixed top-0 lg:top-[6vh] left-0 right-0 transform origin-left z-2' />
  )
}

export default ProgressBar