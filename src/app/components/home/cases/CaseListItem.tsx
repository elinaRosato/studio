import React, {useState} from 'react'
import Image from 'next/image'
import Link from 'next/link'
import ParagraphSmall from '../../global/ParagraphSmall'

interface Case {
  title: string,
  subtitle: string,
  src: string,
  bgColor: string,
  href: string
}

type Props = {
  index: number,
  caseItem: Case,
  setModal: (modal: { active: boolean, index: number }) => void,
}

const CaseListItem = ({index, caseItem, setModal}: Props) => {
  const {title, subtitle, src, href} = caseItem;
  return (
    <Link
      href={href}
      onMouseEnter={() => {setModal({active: true, index:index})}}
      onMouseLeave={() => {setModal({active: false, index:index})}}
      className={`flex flex-col gap-[0.5vw] justify-between w-full py-[1vw] lg:px-[1.5vw] hover:px-0 border-t border-slate-600 border-solid ${index==0 ? 'border-none' : ''} hover:cursor-pointer transition-all duration-200 `}>
        <div className='p-[10vw] lg:p-0 flex flex-col gap-[2.3vw] lg:flex-row justify-start lg:items-center'>
          <div className='flex flex-col lg:flex-row justify-between w-full items-center lg:items-center'>
            <ParagraphSmall content={title} />
            <p className='text-sm leading-tight text-left font-handwritten font-bold text-accent'>{subtitle}</p>
          </div>
          <Image src={src}  height={208} width={384}  objectFit='cover' alt={title} className='lg:hidden w-[80vw]'/>
        </div>
    </Link>
  )
}

export default CaseListItem
