import GenreMenuBarComp from 'Components/GenreMenuBarComp/GenreMenuBarComp'
import {
  BannerContainer,
  BannerHeading,
  BannerImageContainer,
  BannerImg,
} from 'Container/FeatureSection/Common/Common.styles'
import { ExploreLinkList } from 'Container/FeatureSection/Common/Config'
import React from 'react'

const Banner = () => {
  const bannerImg = 'https://res.cloudinary.com/dk6twrko6/image/upload/v1667379183/Rectangle_219_ulz5td.png'
  return (
    <>
      <BannerContainer>
        <BannerImageContainer>
          <BannerImg src={bannerImg} alt="bannerImg" />
          <BannerHeading>Explore</BannerHeading>
        </BannerImageContainer>
        <GenreMenuBarComp sectionName={ExploreLinkList} />
      </BannerContainer>
    </>
  )
}

export default Banner
