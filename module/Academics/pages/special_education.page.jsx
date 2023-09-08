import React from 'react'
import { RootContainer } from '../common/styles'
import HeaderSection from '../Sections/HeaderSection'
import data from 'data.config'
import ContentSection from '../Sections/ContentSection'

const SpecialEducationPage = () => {
  return (
    <RootContainer>
      <HeaderSection text={data.academics.special_education.title} />
      {data.academics.special_education.content.map((item, index) => (
        <ContentSection key={item.id} title={item.title} contentList={item.content} />
      ))}
    </RootContainer>
  )
}

export default SpecialEducationPage
