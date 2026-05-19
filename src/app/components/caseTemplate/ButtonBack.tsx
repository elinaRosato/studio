import React from 'react'
import ButtonWavy from '../global/ButtonWavy'
import { BackArrow } from '../global/IconsSvg'

type Props = {
  href: string
}

const ButtonBack = ({ href }: Props) => {
  return (
    <ButtonWavy href={href} external={false} reverse={true} text='Back to Cases' svg={BackArrow} />
  )
}

export default ButtonBack