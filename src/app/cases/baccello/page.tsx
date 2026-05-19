'use client'
import React from 'react'
import CaseTemplate from '../../components/caseTemplate/CaseTemplate'
import ProgressBar from '../../components/caseTemplate/ProgressBar'
import { CaseContent } from '../../../types/types'

interface Images {
  src: string,
  alt: string,
  mobile: boolean,
}
interface Control {
  title: string,
  href: string,
}
interface Controls {
  previous: Control,
  next: Control,
}

type Props = {}

const Baccello = (props: Props) => {

  const caseTitle: string[] = ['Baccello']
  const caseSummary: string = 'A landing page built with WordPress.'
  const code: string = ''
  const demo: string = ''
  const images: Images[] = [
    {
      src: '/baccello_mockup_sections.png',
      alt: 'Baccello Mockup Sections',
      mobile: true,
    },
    {
      src: '/baccello_mockup_checkout.png',
      alt: 'Baccello Mockup Checkout',
      mobile: true,
    },
    {
      src: '/baccello_mockup_full.png',
      alt: 'Baccello Mockup Full',
      mobile: false,
    },
    {
      src: '/baccello_mockup_hero.png',
      alt: 'Baccello Mockup Hero',
      mobile: true,
    },
    {
      src: '/baccello_mockup_mix.png',
      alt: 'Baccello Mockup Mix',
      mobile: false,
    },
  ]
  const caseContent: CaseContent[] = [
    { type: "h2", content: "The Background" },
    { type: "p", content: `Baccello.io came into being as a result of minds coming together. Guided by the CEO's vision and
        complemented by the web designer's artistry, I joined the mix to infuse my development expertise. The goal?
        Weaving a landing page that captured the essence of blockchain technology while celebrating the beauty of art.` },
    { type: "h2", content: "The Stack" },
    { type: "p", content: `WordPress ensured easy maintainability and editing for the client. Astra Theme,
        a bunch of usefull plugins and some CSS magic added unique elements that brought our page to life.
      ` },
    { type: "p", content: `Now, let's talk teamwork. This case wasn't just lines of code; it was all about collaboration.
        We relied on each other's strengths, each member lending their expertise to the collective vision.
      ` },
    { type: "h2", content: "The Challenge" },
    { type: "p", content: `Our journey with Baccello.io taught me the power of embracing challenges as oportunities for innovation.
        Let's be real, it's not all smooth sailing in the land of plugins and themes. As the design dreams collided with
        WordPress's limitations, I dived into a world of creative coding, crafting custom solutions to bring unique
        functionalities to life` },
    { type: "p", content: `While Baccello's landing page is no longer live due to the company's discontinuation,
        the echoes of the journey remain. This case underlined the importance of finding innovative solutions
        within a team context. From challenges, creativity and collaboration emerged a web page that briefly
        encapsulated the essence of NFTs, even if just for a virtual moment.
      ` },
  ]
  const controls: Controls = {
    previous: {
      title: 'OrthoTeam Website Redesign',
      href: '/cases/orthoteam'
    },
    next: {
      title: '',
      href: ''
    }
  }

  return (
    <div className={`min-h-screen overflow-scroll bg-almost-white flex flex-col`}>
      <CaseTemplate
        caseTitle={caseTitle}
        caseSummary={caseSummary}
        code={code}
        demo={demo}
        images={images}
        caseContent={caseContent}
        controls={controls}
        href='/#cases'
      />
      <ProgressBar />
    </div>

  )
}

export default Baccello
