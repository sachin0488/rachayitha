import React from 'react'
import GenreMenuBarComp from './Comp/GenreMenuBarComp'
import {
  BannerContainer,
  BannerHeading,
  BannerImageContainer,
  BannerImg,
} from 'container/FeatureSection/Common/common.styles'

const Banner = () => {
  const bannerImg = 'https://res.cloudinary.com/dk6twrko6/image/upload/v1667379183/Rectangle_219_ulz5td.png'
  return (
    <>
      <BannerContainer>
        <BannerImageContainer>
          <BannerImg src={bannerImg} alt="bannerImg" />
          <BannerHeading>Explore</BannerHeading>
        </BannerImageContainer>
        <GenreMenuBarComp />
      </BannerContainer>
    </>
  )
}

export default Banner
