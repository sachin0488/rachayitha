import React from 'react'
import { RootContainer } from '../common/styles'
import HeaderSection from '../Sections/HeaderSection'
import ComingSoon from '../Sections/ComingSoon'
import data from 'data.config'

const ExamSchedulePage = () => {
  return (
    <RootContainer>
      <HeaderSection text={data.admission.exam_schedule.title} />
      <ComingSoon />
    </RootContainer>
  )
}

export default ExamSchedulePage
