'use client'
import React, { useEffect } from 'react'
import CaseTemplate from '../../components/caseTemplate/CaseTemplate'
import ProgressBar from '../../components/caseTemplate/ProgressBar'
import { motion, useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer';
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

const Haparanda = (props: Props) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold: 0.1 });

  useEffect(() => {
    if (inView) {
      controls.start(i => ({
        opacity: 1,
        y: 0,
        transition: { delay: i * 0.2 }
      }));
    }
  }, [controls, inView]);

  const handleMouseEnter = (e: React.MouseEvent<HTMLImageElement>) => {
    e.currentTarget.style.zIndex = '10';
  };

  const handleMouseLeave = (e: React.MouseEvent<HTMLImageElement>) => {
    e.currentTarget.style.zIndex = '1';
  };

  const caseTitle: string[] = ['Haparanda']
  const caseSummary: string = 'A Bold and Disruptive Website for a Game-Changing Brand.'
  const code: string = ''
  const demo: string = 'https://www.haparanda.eu'

  const caseContent: CaseContent[] = [
    { type: "h2", content: "The Background" },
    { type: "p", content: `Haparanda is a brand that redefines what bags and backpacks can be—high-quality, functional, and
        designed for those who value both style and innovation. When founders James and Ania approached me to
        build their website from scratch, they had a clear vision: they wanted something fun, disruptive, colorful,
        and packed with movement. The website had to reflect the essence of their brand—modern, trendy, stylish, and completely unique.`},
    { type: "h2", content: "The Design Process" },
    { type: "p", content: `Before diving into design and development, we started with a deep planning phase to ensure every decision aligned with
        Haparanda's brand identity. We gathered a vision board filled with bold colors, unconventional layouts, and dynamic elements to
        establish the aesthetic direction.
      `},
    { type: "img", content: "/haparanda_vision.png", alt: "Haparanda Vision" },
    { type: "p", content: `From there, we defined a site map, structuring the website's navigation to balance creativity with usability.
      `},
    { type: "p", content: `The design phase was a highly collaborative effort. We used Figma as our main tool, iterating through multiple concepts,
      experimenting with layouts, and pushing boundaries until we reached the perfect balance between aesthetics and usability.
      Every element was carefully placed to enhance the brand's playful yet premium feel. Motion was a key focus, ensuring the site felt
      dynamic and alive, just like Haparanda's products.`},
    { type: "img", content: "/haparanda_mockups.png", alt: "Haparanda Mockups" },
    { type: "h2", content: "The Development" },
    { type: "p", content: `The website was built using WordPress with Elementor Pro, allowing for flexibility and creative freedom. While Elementor provided a strong foundation, we incorporated custom code to fine-tune animations and add extra interactive details that weren't possible with standard tools.`},
    { type: "img", content: "/haparanda3.png", alt: "Haparanda Development" },
    { type: "p", content: `One of the biggest challenges was responsiveness. The design was unconventional, featuring floating elements and out-of-the-box layouts that looked stunning on desktops but required meticulous adjustments for tablets and mobile devices. Achieving a seamless experience across all screen sizes took precision, problem-solving, and countless refinements. `},
    { type: "img", content: "/haparanda2.png", alt: "Haparanda Responsiveness" },
    { type: "p", content: `The final website exceeded everyone's expectations. It is bold, interactive, and visually striking, perfectly capturing the essence of Haparanda. The motion effects bring the brand to life, while the user experience remains smooth and engaging across all devices. Most importantly, James and Ania were thrilled with the outcome—a website that truly represents their brand's spirit of innovation and creativity.`},
    { type: "img", content: "/haparanda1.png", alt: "Haparanda Final" },
    { type: "video", content: "/haparanda.mp4", alt: "Haparanda Video" },
  ]

  const video: string = '/haparanda.mp4'
  const control: Controls = {
    previous: {
      title: '',
      href: ''
    },
    next: {
      title: '3D center',
      href: '/cases/3dcenter'
    }
  }
  const images: Images[] = [
    {
      src: '/haparanda1.png',
      alt: 'Haparanda Hero',
      mobile: false,
    },
    {
      src: '/haparanda2.png',
      alt: 'Haparanda Vision',
      mobile: false,
    },
    {
      src: '/haparanda3.png',
      alt: 'Haparanda Mockup',
      mobile: false,
    },
    {
      src: '/haparanda1.png',
      alt: 'Haparanda Hero',
      mobile: false,
    },
    {
      src: '/haparanda2.png',
      alt: 'Haparanda Vision',
      mobile: false,
    },
  ]

  return (
    <div className={`min-h-screen overflow-scroll bg-almost-white flex flex-col`}>
      <CaseTemplate
        caseContent={caseContent}
        caseTitle={caseTitle}
        caseSummary={caseSummary}
        code={''} demo={demo}
        images={images}
        controls={control}
        href='/#cases'
      />
      <ProgressBar />
    </div>

  )
}

export default Haparanda
