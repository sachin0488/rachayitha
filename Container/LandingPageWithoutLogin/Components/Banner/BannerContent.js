import React from 'react'
import { SubHeading, Heading, Card, LeftSideContent, RightSideContent, Img } from './BannerStyle'
import Image from 'next/image'
const BannerContent = ({ heading, img, subHeading, width, height }) => {
  return (
    <>
      <LeftSideContent>
        <Heading>{heading}</Heading>
        <SubHeading>{subHeading}</SubHeading>
      </LeftSideContent>
      <RightSideContent>
        <Img src={img} />
      </RightSideContent>
    </>
  )
}

export default BannerContent
