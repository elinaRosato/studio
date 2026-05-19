import React from 'react'
import CaseDetailTitle from './CaseDetailTitle'
import CaseDetailSummary from './CaseDetailSummary'
import ImageSliderOnScroll from '../global/ImageSliderOnScroll'
import CaseDetailControls from './CaseDetailControls'
import ButtonBack from './ButtonBack'
import Image from 'next/image'
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

type Props = {
  caseTitle:string[],
  caseSummary:string,
  code:string,
  demo:string,
  images:Images[],
  caseContent:CaseContent[],
  controls:Controls,
  href:string
}

const CaseTemplate = ({caseTitle, caseSummary, code, demo, images, caseContent, controls, href}: Props) => {
  return (
    <main className='overflow-hidden flex flex-col gap-[5vh] lg:gap-[3vw] py-[10vh] px-[10vw] lg:py-[16vh] lg:mx-[1.5vw] lg:border-2 lg:border-x-darkest-dark '>
      <ButtonBack href={href} />
      <CaseDetailTitle title={caseTitle} />
      <CaseDetailSummary text={caseSummary} code={code} demo={demo} />
      {images.length>1 ?
      <ImageSliderOnScroll images={images} /> :
      <Image src={images[0].src} width={0} height={0} layout='responsive' objectFit='cover' alt='Elina Rosato Studio'/>
      }
      <div className='flex flex-col gap-[5vw] lg:gap-[3vw] py-[2vh]'>
        {caseContent.map((element, index) => {
          switch(element.type){
            case 'h2':
              return <h2 key={index} className='font-sans font-bold text-darkest-dark text-[7vw] leading-[9vw] lg:text-[2vw] lg:leading-[5vw]'>{element.content}</h2>
            case 'h3':
              return <h2 key={index} className='font-sans font-bold text-darkest-dark text-[7vw] leading-[9vw] lg:text-[2vw] lg:leading-[5vw]'>{element.content}</h2>
            case 'p':
              return <p key={index} className='font-roboto font-normal text-darkest-dark text-[4vw] leading-[7vw] lg:text-[1.4vw] lg:leading-[2.7vw]'>{element.content}</p>
            case 'img':
              return <img key={index} src={element.content} alt='' className='w-full h-auto py-36' />
            case 'video':
              return(
                <video key={index} autoPlay loop playsInline muted className='object-cover rounded-[1.25vw] w-[100%] self-center '>
                  <source src={element.content} type='video/mp4'/>
                </video>
              )
            default:
              return;
          }
        })}
      </div>
      <CaseDetailControls controls={controls} />
    </main>
  )
}

export default CaseTemplate
