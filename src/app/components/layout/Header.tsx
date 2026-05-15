'use client'

import React, { useState } from 'react'
import { AnimatePresence, motion } from "framer-motion"
import Link from 'next/link'
import NavMobile from './NavMobile'
import ButtonDownload from './ButtonDownload'
import Nav from './Nav'


type Props = {}

function Header({}: Props) {
const [isActive, setIsActive] = useState(false)

	return (
		<motion.header initial={{y: -100, opacity: 0}} animate={{y: 0, opacity: 1}} transition={{duration: 1.5}}>
			<div className='hidden lg:flex fixed w-full bg-almost-white top-0 items-center justify-between px-[3vw] mx-auto z-20 border-2 border-y-darkest-dark text-darkest-dark'>
				<Link href="/" className='hidden md:inline-flex px-[1vw] py-[0.625vw] font-sans font-extrabold text-[1.25vw]'>Elina Rosato Studio.</Link>
				<ButtonDownload />
			</div>
			<div className='fixed right-0 m-5 z-30 flex flex-row w-full items-center justify-end cursor-pointer lg:hidden'>
				<div id='hamb-menu' onClick={() => setIsActive(!isActive)} className={`relative w-14 h-14 rounded-full bg-accent flex flex-col justify-center items-center ${isActive ? 'gap-0' : ' gap-[6px]'}`}>
					<div className={`w-2/5 bg-almost-white h-[1px] transition-all duration-200 ${isActive ? ' bg-transparent' : ''}`} />
					<div className={`w-2/5 bg-almost-white h-[1px] transition-all duration-200 ${isActive ? ' -rotate-45' : ''}`} />
					<div className={`w-2/5 bg-almost-white h-[1px] transition-all duration-200 ${isActive ? 'rotate-45' : ''}`} />
				</div>
			</div>
			<AnimatePresence mode="wait">
				{isActive && <NavMobile setIsActive={setIsActive} isActive={isActive} />}
			</AnimatePresence>
		</motion.header>
  )
}

export default Header