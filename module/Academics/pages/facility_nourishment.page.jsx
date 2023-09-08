import React from 'react'
import { RootContainer } from '../common/styles'
import HeaderSection from '../Sections/HeaderSection'
import data from 'data.config'
import ContentSection from '../Sections/ContentSection'

const FacilityNourishmentPage = () => {
  return (
    <RootContainer>
      <HeaderSection text={data.academics.facility_nourishment.title} />
      {data.academics.facility_nourishment.content.map((item, index) => (
        <ContentSection key={item.id} title={item.title} contentList={item.content} />
      ))}
    </RootContainer>
  )
}

export default FacilityNourishmentPage
