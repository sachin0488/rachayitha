import React from "react";
import HeroStyle from "./HeroStyle";
import { useHero } from "./api/hero.hook";
import Image from "next/image";
import { useHero1 } from "./api/hero.hook1";

const Hero = () => {
  const {
    Wrapper,
    CreateButton,
    ExploreButton,
    ParagraphText,
    SubHeading,
    Heading,
    HeroLeftSideSection,
    ButtonContainer,
    HeroRightSideSection,
    BannerImgContainer,
    ImgContainer,
  } = HeroStyle();
  const { data, isLoading, isError, error, isFetching } = useHero();
  const { data: data1 } = useHero1();
  return (
    <>
      <Wrapper>
        <HeroLeftSideSection>
          <SubHeading>Online Book Reading Platform</SubHeading>
          <Heading>Expand your Vision of Knowledge Here</Heading>
          <ParagraphText>India’s Largest online Reading Platform</ParagraphText>
          <ButtonContainer>
            <ExploreButton>Explore</ExploreButton>
            <CreateButton>Create</CreateButton>
          </ButtonContainer>
        </HeroLeftSideSection>
        <HeroRightSideSection>
          <BannerImgContainer sx={{ margin: "0px 0px -57px 0px" }}>
            {data?.map((bannerImg) => (
              <ImgContainer>
                <Image src={bannerImg.img} width="218px" height="253px" />
              </ImgContainer>
            ))}
          </BannerImgContainer>
          <BannerImgContainer sx={{ margin: "-37px 0px 0px 0px" }}>
            {data?.map((bannerImg) => (
              <ImgContainer>
                <Image src={bannerImg.img} width="218px" height="253px" />
              </ImgContainer>
            ))}
          </BannerImgContainer>
          <BannerImgContainer sx={{ margin: "-237px 0px 0px 0px" }}>
            {data1?.map((bannerImg) => (
              <ImgContainer>
                <Image src={bannerImg.img} width="218px" height="253px" />
              </ImgContainer>
            ))}
          </BannerImgContainer>
          <BannerImgContainer sx={{ margin: "-67px 0px 0px 0px" }}>
            {data?.map((bannerImg) => (
              <ImgContainer>
                <Image src={bannerImg.img} width="218px" height="253px" />
              </ImgContainer>
            ))}
          </BannerImgContainer>
        </HeroRightSideSection>
      </Wrapper>
    </>
  );
};

export default Hero;
