import React from 'react'
import { RootContainer } from '../common/styles'
import HeaderSection from '../Sections/HeaderSection'
import data from 'data.config'
import ContentSection from '../Sections/ContentSection'

const HealthCarePage = () => {
  return (
    <RootContainer>
      <HeaderSection text={data.academics.health_care.title} />
      {data.academics.health_care.content.map((item, index) => (
        <ContentSection key={item.id} title={item.title} contentList={item.content} />
      ))}
    </RootContainer>
  )
}

export default HealthCarePage
