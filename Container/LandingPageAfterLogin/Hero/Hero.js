import React from 'react'
import HeroStyle from './HeroStyle'
import { useHero } from './api/hero.hook'
import Image from 'next/image'
import { useHero1 } from './api/hero.hook1'
import {
  Wrapper,
  ParagraphText,
  SubHeading,
  Heading,
  HeroLeftSideSection,
  ButtonContainer,
  HeroRightSideSection,
  BannerImgContainer,
  ImgContainer,
  StyledButton,
  TextSection,
} from './HeroStyle'
import { cloudinary } from 'Container/Landing/Sections/NewArrivalsCards/components/ContentCard'

const Hero = () => {
  const { data, isLoading, isError, error, isFetching } = useHero()
  const { data: data1 } = useHero1()
  return (
    <Wrapper>
      <HeroLeftSideSection>
        <TextSection>
          <SubHeading>Online Book Reading Platform</SubHeading>
          <Heading>Expand your Vision of Knowledge Here</Heading>
          <ParagraphText>India’s Largest online Reading Platform</ParagraphText>
        </TextSection>
        <ButtonContainer>
          <StyledButton variant="contained">Explore</StyledButton>
          <StyledButton variant="outlined">Create</StyledButton>
        </ButtonContainer>
      </HeroLeftSideSection>
      <HeroRightSideSection>
        <BannerImgContainer sx={{ margin: '0px 0px -57px 0px' }}>
          {data?.map(bannerImg => (
            <ImgContainer>
              <Image src={bannerImg.img} width="218px" height="253px" />
            </ImgContainer>
          ))}
        </BannerImgContainer>
        <BannerImgContainer sx={{ margin: '-37px 0px 0px 0px' }}>
          {data?.map(bannerImg => (
            <ImgContainer>
              <Image src={bannerImg.img} width="218px" height="253px" />
            </ImgContainer>
          ))}
        </BannerImgContainer>
        <BannerImgContainer sx={{ margin: '-237px 0px 0px 0px' }}>
          {data1?.map(bannerImg => (
            <ImgContainer>
              <Image src={bannerImg.img} width="218px" height="253px" />
            </ImgContainer>
          ))}
        </BannerImgContainer>
        <BannerImgContainer sx={{ margin: '-67px 0px 0px 0px' }}>
          {data?.map(bannerImg => (
            <ImgContainer>
              <Image src={bannerImg.img} width="218px" height="253px" />
            </ImgContainer>
          ))}
        </BannerImgContainer>
      </HeroRightSideSection>
    </Wrapper>
  )
}

export default Hero
