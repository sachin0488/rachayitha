import React from 'react'
import { RootContainer } from '../common/styles'
import HeaderSection from '../Sections/HeaderSection'
import data from 'data.config'
import ContentSection from '../Sections/ContentSection'

const AcademicProgrammePage = () => {
  return (
    <RootContainer>
      <HeaderSection text={data.academics.academic_programme.title} />
      {data.academics.academic_programme.content.map((item, index) => (
        <ContentSection key={item.id} title={item.title} contentList={item.content} />
      ))}
    </RootContainer>
  )
}

export default AcademicProgrammePage
