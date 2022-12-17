import React from 'react'
import { SubHeading, Heading, Card, LeftSideContent, RightSideContent, Img } from './BannerStyle'
const BannerContent = ({ heading, img, subHeading, width, height, selectMargin }) => {
  return (
    <>
      <LeftSideContent>
        <Heading>{heading}</Heading>
        <SubHeading>{subHeading}</SubHeading>
      </LeftSideContent>
      <RightSideContent>
        <Img selectMargin={selectMargin} imgWidth={width} imgHeight={height} src={img} />
      </RightSideContent>
    </>
  )
}

export default BannerContent
