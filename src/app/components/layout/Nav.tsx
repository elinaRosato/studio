import React from 'react'
import NavItem from './NavItem'

type Props = {}

const Nav = (props: Props) => {
  return (
    <nav className='flex flex-row items-center gap-[4.5vw]'>
      <NavItem link="/#about" text='my story'/>
      <NavItem link="/#cases" text='case studies'/>
      <NavItem link="/#cases" text='cases'/>
      <NavItem link="/#contact" text='contact'/>
    </ nav>
  )
}

export default Nav