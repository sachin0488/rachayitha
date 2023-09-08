import React from 'react'
import { RootContainer } from '../common/styles'
import HeaderSection from '../Sections/HeaderSection'
import ComingSoon from '../Sections/ComingSoon'
import data from 'data.config'

const FeePage = () => {
  return (
    <RootContainer>
    <HeaderSection text={data.admission.fee.title} />
    <ComingSoon />
  </RootContainer>
  )
}

export default FeePage