import React from 'react'
import { RootContainer } from '../common/styles'
import HeaderSection from '../Sections/HeaderSection'
import data from 'data.config'
import ContentSection from '../Sections/ContentSection'

const CreativityPerformancePage = () => {
  return (
    <RootContainer>
      <HeaderSection text={data.academics.creativity_performance.title} />
      {data.academics.creativity_performance.content.map((item, index) => (
        <ContentSection key={item.id} title={item.title} contentList={item.content} />
      ))}
    </RootContainer>
  )
}

export default CreativityPerformancePage
