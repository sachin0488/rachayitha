import React from 'react'
import { RootContainer } from '../common/styles'
import HeaderSection from '../Sections/HeaderSection'
import data from 'data.config'
import ContentSection from '../Sections/ContentSection'

const AdmissionAndTransportPage = () => {
  return (
    <RootContainer>
      <HeaderSection text={data.admission.admission_and_transport.title} />
      {data.admission.admission_and_transport.content.map((item, index) => (
        <ContentSection key={item.id} title={item.title} contentList={item.content} />
      ))}
    </RootContainer>
  )
}

export default AdmissionAndTransportPage
