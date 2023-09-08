import React from 'react'
import { RootContainer } from '../common/styles'
import HeaderSection from '../Sections/HeaderSection'
import data from 'data.config'
import ContentSection from '../Sections/ContentSection'

const RulesRegulationsPage = () => {
  return (
    <RootContainer>
      <HeaderSection text={data.academics.rules_regulations.title} />
      {data.academics.rules_regulations.content.map((item, index) => (
        <ContentSection key={item.id} title={item.title} contentList={item.content} />
      ))}
    </RootContainer>
  )
}

export default RulesRegulationsPage
