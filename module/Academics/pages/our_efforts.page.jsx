import React from 'react'
import { RootContainer } from '../common/styles'
import HeaderSection from '../Sections/HeaderSection'
import data from 'data.config'
import ContentSection from '../Sections/ContentSection'

const OurEffortsPage = () => {
  return (
    <RootContainer>
      <HeaderSection text={data.academics.our_efforts.title} />
      {data.academics.our_efforts.content.map((item, index) => (
        <ContentSection key={item.id} title={item.title} contentList={item.content} />
      ))}
    </RootContainer>
  )
}

export default OurEffortsPage
