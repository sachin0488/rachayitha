import React from 'react'
import { RootContainer } from '../common/styles'
import HeaderSection from '../Sections/HeaderSection'
import ComingSoon from '../Sections/ComingSoon'
import data from 'data.config'

const StaffOrientationPage = () => {
  return (
    <RootContainer>
      <HeaderSection text={data.admission.staff_orientation.title} />
      <ComingSoon />
    </RootContainer>
  )
}

export default StaffOrientationPage
