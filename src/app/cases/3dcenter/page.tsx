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

const Case3DCenter = (props: Props) => {
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

  const caseTitle: string[] = ['3D Center']
  const caseSummary: string = 'A Bold and Disruptive Website for a Game-Changing Brand.'
  const code: string = ''
  const demo: string = 'https://www.3dcenter.se'

  const caseContent: CaseContent[] = [
    { type: "h2", content: "The Background" },
    { type: "p", content: `3D Center is a platform dedicated to providing high-quality resources, insights, and products for professionals and enthusiasts
        in the 3D printing industry. When the team at 3D Center approached me, they had a website that lacked strong brand identity and visual
        cohesion. The existing logo was poorly designed, and the overall aesthetic didn't reflect the cutting-edge nature of their industry.
        They needed a complete overhaul — something modern, structured, and visually appealing. The goal was to create a website that not only
        looked professional but also made navigating its vast content easy and intuitive.`},
    { type: "h2", content: "The Design Process" },
    { type: "p", content: `Before starting the development, I needed to establish a strong brand foundation. The first step was redesigning the logo to create
        something more refined and representative of 3D Center's vision. I also defined a consistent color palette, ensuring the brand had a
        recognizable identity. Every icon and illustration used throughout the site was custom-designed to maintain visual consistency and
        reinforce the brand's professionalism.`},
    { type: "img", content: '/3dcenter_illustrations.png' },
    { type: "p", content: `We teamed up with Mattias, an expereinced copywriter, to structure the website content, carefully organizing each page to ensure user experience and engagement.
        Once the vision board was approved, I moved on to prototyping, focusing on usability, clarity, and an engaging design. Every component was refined
        until we had a layout that balanced functionality and aesthetics perfectly.`},
    { type: "h2", content: "The Development" },
    { type: "p", content: `For the development phase, I built the website using WordPress, leveraging the Divi theme and website builder for flexibility and customization. The website is complex and feature-rich, yet remains user-friendly. It includes multiple pages structured for easy navigation, two contact forms, a dynamic search bar, a robust blog section, and custom author pages to showcase contributors. Special attention was given to optimizing the user experience, ensuring that visitors could effortlessly explore the site and find the information they needed.`},
    { type: "img", content: '/3dcenter_membership.png' },
    { type: "p", content: `One of the main challenges was ensuring that such a content-heavy site remained fast, responsive, and visually appealing across all devices. With many custom elements and interactive features, performance optimization was a key focus.`},
    { type: "img", content: '/3dcenter_partners.png' },
    { type: "h2", content: "The Outcome" },
    { type: "p", content: `The final product is a sleek, professional, and highly functional website that perfectly encapsulates 3D Center's brand identity. It is intuitive, engaging, and fully equipped to support their mission in the 3D printing industry. The transformation was well-received, and the website now serves as a strong digital presence for 3D Center, positioning them as a leader in their field.`},
    { type: "img", content: '/3dcenter_contact.png' },
  ]

  const control: Controls = {
    previous: {
      title: 'Haparanda',
      href: '/cases/haparanda'
    },
    next: {
      title: 'OrthoTeam',
      href: '/cases/orthoteam'
    }
  }
  const images: Images[] = [
    {
      src: '/3dcenter_contact.png',
      alt: '3dcenter Hero',
      mobile: false,
    },
    {
      src: '/3dcenter_partners.png',
      alt: '3dcenter Vision',
      mobile: false,
    },
    {
      src: '/3dcenter_membership.png',
      alt: '3dcenter Mockup',
      mobile: false,
    },
    {
      src: '/3dcenter_contact.png',
      alt: '3dcenter Hero',
      mobile: false,
    },
    {
      src: '/3dcenter_partners.png',
      alt: '3dcenter Vision',
      mobile: false,
    },
  ]

  return (
    <div className={` min-h-screen overflow-scroll bg-almost-white flex flex-col`}>
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

export default Case3DCenter
