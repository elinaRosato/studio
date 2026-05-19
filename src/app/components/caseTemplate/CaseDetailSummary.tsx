import React from 'react'
import ButtonWavy from '../global/ButtonWavy'
import { ExternalArrow } from '../global/IconsSvg'

type Props = {
  text:string,
  code:string,
  demo:string,
}

const CaseDetailSummary = ({text, code, demo}: Props) => {
  return (
  <div className='flex flex-col gap-[4vh] lg:gap-0 lg:flex-row justify-between items-start lg:items-center'>
    <p className='lg:w-[30vw] font-roboto font-medium text-darkest-dark text-[4.3vw] leading-[6vw] lg:text-[1.8vw] lg:leading-[3vw]'>
      {text}
    </p>
    <div className='flex gap-[10vw] lg:gap-[4vw] justify-end'>
      {code ? <ButtonWavy href={code} external={true} reverse={false} text="Read Code" svg={ExternalArrow} /> : ''}
      {demo ? <ButtonWavy href={demo} external={true} reverse={false} text="Live Demo" svg={ExternalArrow} /> : ''}
    </div>
  </div>
  )
}

export default CaseDetailSummary
