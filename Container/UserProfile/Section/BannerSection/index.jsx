import styled from '@emotion/styled'
import React from 'react'

const bannerImgUrl = 'https://i.pinimg.com/originals/ae/3a/8c/ae3a8c3479dc10058f5556ac6cd0a5f0.jpg'

const BannerSection = ({ text }) => {

  return <StyledImage src={bannerImgUrl} alt="Profile Art" />
}

const StyledImage = styled.img`
  position: relative;
  height: 271px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 15px;
  overflow: hidden;

  margin-top: calc(var(--main-side-spacing));
  margin-inline: var(--main-side-spacing);
  max-width: var(--main-max-width);
  width: calc(100% - var(--main-side-spacing) * 2);
  align-self: center;
  object-fit: cover;

  @media (max-width: 500px) {
    height: 220px;
  }

  @media (max-width: 400px) {
    height: 170px;
    /* width: calc(100%); */
    border-radius: 15px;
    /* margin-top: 0px; */
  }
`

export default BannerSection
