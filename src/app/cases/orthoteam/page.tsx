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

const OrthoTeam = (props: Props) => {
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

  const caseTitle: string[] = ['OrthoTeam']
  const caseSummary: string = 'A Bold and Disruptive Website for a Game-Changing Brand.'
  const code: string = ''
  const demo: string = 'https://www.orthoteam.se'

  const caseContent: CaseContent[] = [
    { type: "h2", content: "The Background" },
    { type: "p", content: `OrthoTeam is a platform dedicated to providing high-quality resources, insights, and products for professionals and enthusiasts
        in the orthopedic industry. When the team at OrthoTeam approached me, they had a website that lacked strong brand identity and visual
        cohesion. The existing logo was poorly designed, and the overall aesthetic didn't reflect the cutting-edge nature of their industry.
        They needed a complete overhaul — something modern, structured, and visually appealing. The goal was to create a website that not only
        looked professional but also made navigating its vast content easy and intuitive.`},
    { type: "h2", content: "The Design Process" },
    { type: "p", content: `Before diving into design and development, we started with a deep planning phase to ensure every decision aligned with
        OrthoTeam's brand identity. We gathered a vision board filled with bold colors, unconventional layouts, and dynamic elements to
        establish the aesthetic direction.
      `},
  ]
  const control: Controls = {
    previous: {
      title: '3D Center',
      href: '/cases/3dcenter'
    },
    next: {
      title: 'Baccello Landing Page',
      href: '/cases/baccello'
    }
  }
  const images: Images[] = [
    {
      src: '/orthoteam_hero.png',
      alt: 'OrthoTeam Hero',
      mobile: false,
    },
    {
      src: '/haparanda2.png',
      alt: 'OrthoTeam Vision',
      mobile: false,
    },
    {
      src: '/haparanda3.png',
      alt: 'OrthoTeam Mockup',
      mobile: false,
    },
    {
      src: '/orthoteam_hero.png',
      alt: 'OrthoTeam Hero',
      mobile: false,
    },
    {
      src: '/haparanda2.png',
      alt: 'OrthoTeam Vision',
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

export default OrthoTeam
