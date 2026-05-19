import React, {useState} from 'react'
import Heading from '../../global/Heading'
import CaseListItem from './CaseListItem'
import CasesModal from './CasesModal'
import DecryptedText from '../hero/components/DecryptedText'
import SectionTitle from '../../global/SectionTitle'
import SectionHeading from '../../global/SectionHeading'
import ParagraphSmall from '../../global/ParagraphSmall'

interface Case {
  title: string
  subtitle: string
  src: string
  bgColor: string
  href: string
}

type Props = {}

const Cases = (props: Props) => {
  const cases: Case[] = [
    {
      title: 'Haparanda',
      subtitle: 'bold website for a backpack brand',
      src: '/haparanda3.png',
      bgColor: '#202124',
      href: '/cases/haparanda'
    },
    {
      title: '3D Center Website',
      subtitle: 'robust website for a 3d printing hub',
      src: '/3dcenter_partners.png',
      bgColor: '#C6DAE2',
      href: 'cases/3dcenter'
    },
    {
      title: 'OrthoTeam Landing Page',
      subtitle: 'one-page site for an innovative company',
      src: '/orthoteam_hero.png',
      bgColor: '#CF9BF4',
      href: 'cases/orthoteam'
    },
    {
      title: 'Baccello Landing Page',
      subtitle: 'landing page built with wordpress',
      src: '/baccello.png',
      bgColor: '#D566C1',
      href: '/cases/baccello'
    }
  ]

  const [modal, setModal] = useState({active: false, index:0})

  return (
    <section id='cases' className='relative px-[7vw] lg:px-[7vw] py-20 lg:py-36 flex flex-col lg:items-center'>
      <SectionTitle content="case studies" />
      <SectionHeading content="Every brand, every business, every idea has a story to tell—my job is to translate that story into a seamless digital experience." />
      <div className='flex flex-col lg:flex-row lg:pt-20'>
        <div className='lg:w-1/3 lg:pr-14'>
          <ParagraphSmall content={"Whether it's developing custom applications, optimizing existing systems, or crafting high-performance websites,  I work closely with my clients to bring their vision to life."} />
        </div>
        <ul className='lg:w-2/3'>
          {cases.map((caseItem, index) => {
            return(
              <CaseListItem key={index} index={index} caseItem={caseItem} setModal={setModal} />
            )
          })}
        </ul>
      </div>

      <CasesModal modal={modal} cases={cases} />
    </section>
  )
}

export default Cases
