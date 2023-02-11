import styled from '@emotion/styled'
import React from 'react'
import InfoArea from './components/InfoArea'
import TabArea from './components/TabArea'

const DetailsSection = ({ item }) => {
  return (
    <Root>
      <ImageContainer>
        <StyledImage src={item?.cover_img} />
        <StyledImage className="blur" src={item?.cover_img} />
      </ImageContainer>

      <InfoSection>
        <InfoArea item={item} />
        <TabArea item={item} />
      </InfoSection>
    </Root>
  )
}

const Root = styled.div`
  display: flex;
  width: 100%;
  gap: 30px;
  margin-inline: var(--main-side-spacing);
  max-width: var(--main-max-width);
  width: calc(100% - var(--main-side-spacing) * 2);
  align-self: center;
  margin-top: 15px;
  @media (max-width: 800px) {
    flex-direction: column;
    gap: 10px;
  }
`

const ImageContainer = styled.div`
  display: flex;
  height: 100%;
  position: relative;
  align-self: center;
  @media (max-width: 400px) {
    /* margin-top: 15px; */
  }
`

const StyledImage = styled.img`
  z-index: 2;
  &.blur {
    z-index: 1;
    position: absolute;
    /* filter: drop-shadow(8px 15px 20px ${({ theme }) => theme.palette.primary.main}44)  */
    filter: blur(20px) opacity(0.5);
    top: -5px;
    left: 0px;
  }
  max-width: 350px;
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 10px;

  @media (max-width: 700px) {
    margin-bottom: 20px;
  }
`

const InfoSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  flex: 1;
`

export default DetailsSection
