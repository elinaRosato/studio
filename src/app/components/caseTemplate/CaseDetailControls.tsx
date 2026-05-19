import React from 'react'
import WavyButton from '../global/ButtonWavy'
import { ForwardArrow, BackArrow, ExternalArrow } from '../global/IconsSvg'

interface Control {
  title: string,
  href: string,
}
interface Controls {
  previous: Control,
  next: Control,
}

type Props = {
  controls: Controls
}

const CaseControls = ({controls}: Props) => {
  const {previous, next} = controls
  return (
    <div  className='flex justify-between gap-[10vw] py-[5vh]'>
      {previous.title==='' ? <div /> : <WavyButton href={previous.href} external={false} reverse={true} text={`Previous Case: ${previous.title}`} svg={BackArrow} /> }
      {next.title==='' ? <div /> : <WavyButton href={next.href} external={false} reverse={false} text={`Next Case: ${next.title}`} svg={ForwardArrow} /> }
    </div>
  )
}

export default CaseControls
