import Link from 'next/link'
import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { usePathname } from 'next/navigation';
import Curve from '../global/Curve'
type Props = {
  setIsActive: (isActive: boolean) => void;
  isActive: boolean
}

const Nav = ({setIsActive, isActive}: Props) => {

  const pathname = usePathname()
  const [selectedIndicator, setSelectedIndicator] = useState(pathname)

  const menuSlide = {
    initial: {
      x: "calc(100% + 100px)",
    },
    animate: {
      x: '0%',
      transition: {
        duration: 1.2,
        ease: [0.76, 0.01, 0.24, 1]
      }
    },
    exit: {
      x: "calc(100% + 100px)",
      transition: {
        duration: 1.2,
        ease: [0.76, 0.01, 0.24, 1]
      }
    }
  }

  const linkContainer = {
    initial: {
      opacity: 0,
    },
    animate: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
      }
    },
    exit: {
      transition: {
        staggerChildren: 0.05,
      }
    }
  }

  const linkVariants = {
    initial: {
      x: '80px',
    },
    animate: {
      x: '0px',
      transition: {
        duration: 1.2,
        ease: [0.76, 0.01, 0.24, 1]
      }
    },
    exit: {
      x: '80px',
      transition: {
        duration: 1.2,
        ease: [0.76, 0.01, 0.24, 1]
      }
    }
  }

  return (
  
  <motion.div  variants={menuSlide} initial="initial" animate="animate" exit="exit"  className=' h-full fixed right-0 bg-darkest-dark flex items-start justify-between px-10 mx-auto z-20 border-2 border-x-darkest-dark lg:hidden'>
    <motion.div onMouseLeave={() => {setSelectedIndicator(pathname)}} variants={linkContainer} initial="initial" animate="animate" exit="exit" className='flex flex-col justify-between items-start gap-8 pt-16'>
      <motion.p variants={linkVariants} initial="initial" animate="animate" exit="exit" className="text-xl text-almost-white font-sans border-b-almost-white border-b-2 w-full">Menu</motion.p>
      <motion.div variants={linkVariants} onClick={() => {setIsActive(false)}}>
        <Link href="/#about"  onMouseEnter={() => {setSelectedIndicator("#about")}}><button className={`text-4xl text-almost-white font-roboto w-full ${selectedIndicator === "#about" ? 'text-accent' : ''}`} >My story</button></Link>
      </motion.div>
      <motion.div variants={linkVariants} onClick={() => {setIsActive(false)}}>
        <Link href="/#cases"  onMouseEnter={() => {setSelectedIndicator("#cases")}}><button className={`text-4xl text-almost-white font-roboto w-full ${selectedIndicator === "#cases" ? 'text-accent' : ''}`} >Case studies</button></Link>
      </motion.div>
      <motion.div variants={linkVariants} onClick={() => {setIsActive(false)}}>
        <Link href="/#cases"  onMouseEnter={() => {setSelectedIndicator("#cases")}}><button className={`text-4xl text-almost-white font-roboto w-full ${selectedIndicator === "#cases" ? 'text-accent' : ''}`} >Cases</button></Link>
      </motion.div>
      <motion.div variants={linkVariants} onClick={() => {setIsActive(false)}}>
        <Link href="/#services"  onMouseEnter={() => {setSelectedIndicator("#services")}}><button className={`text-4xl text-almost-white font-roboto w-full ${selectedIndicator === "#services" ? 'text-accent' : ''}`} >My jam</button></Link>
      </motion.div>
      <motion.div variants={linkVariants} onClick={() => {setIsActive(false)}}>
        <Link href="/#contact"  onMouseEnter={() => {setSelectedIndicator("#contact")}}><button className={`text-4xl text-almost-white font-roboto w-full ${selectedIndicator === "#contact" ? 'text-accent' : ''}`} >Let&rsquo;s connect</button></Link>
      </motion.div>
      
    </motion.div>
    <Curve />
  </motion.div>
  )
}

export default Nav