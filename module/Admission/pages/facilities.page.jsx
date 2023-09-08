import React from 'react'
import { RootContainer } from '../common/styles'
import HeaderSection from '../Sections/HeaderSection'
import ComingSoon from '../Sections/ComingSoon'
import data from 'data.config'

const FacilitiesPage = () => {
  return (
    <RootContainer>
    <HeaderSection text={data.admission.facilities.title} />
    <ComingSoon />
  </RootContainer>
  )
}

export default FacilitiesPage