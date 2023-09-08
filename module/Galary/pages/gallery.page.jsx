import React from 'react'
import { RootContainer } from '../common/styles'
import HeaderSection from '../Sections/HeaderSection'
import InfoSection from '../Sections/InfoSection'
import GallerySection from '../Sections/GallerySection'

const GalleryPage = () => {
  return (
    <RootContainer>
      <HeaderSection text="Gallery" />
      <GallerySection />
    </RootContainer>
  )
}

export default GalleryPage
