import React from 'react'
import styled from '@emotion/styled'

import { Typography } from '@mui/material'
import DividerBar from 'modules/ReaderSection/components/DividerBar'
import { useContentDetailsService } from 'modules/ContentDetail/services/ContentDetails.service'

const DetailsSection = ({ contentType, contentId, slug }) => {
  const { Data, isLoading, isError, error } = useContentDetailsService({ contentType, contentId, slug })

  return (
    <Root>
      <Main>
        <ImageContainer>
          <StyledImage alt="Cover Image" src={Data?.coverImage && Data?.coverImage.includes('http') ? Data?.coverImage : '/alt-img.svg'} />
          <StyledImage
            className="blur"
            alt="Cover Image"
            src={Data?.coverImage && Data?.coverImage.includes('http') ? Data?.coverImage : '/alt-img.svg'}
          />
        </ImageContainer>

        <InfoSection>
          <ContentName variant="h3" component="h1">
            {Data?.contentName}
            <AuthorName variant="h6" component="small">
              by <span className="name"> {Data?.authorName} </span>
            </AuthorName>
          </ContentName>
        </InfoSection>
        <Copyright>
          <span className="symbol">©</span> rachayitha Pvt.Ltd
        </Copyright>
      </Main>
      <BottomReachedView>
        <DividerBar />
      </BottomReachedView>
    </Root>
  )
}

const Root = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  gap: 20px;
  @media (min-width: 670px) {
    padding-top: 20px;
  }
  padding-bottom: 20px;
  overflow: hidden;
`
const Main = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;
  padding: 38px 15px;
  border-radius: 12px;
  border-radius: 12px;
  @media (max-width: 670px) {
    border-top-left-radius: 0px;
    border-top-right-radius: 0px;
    padding: 38px 15px;
  }
  @media (max-width: 480px) {
    padding: 38px 12px;
  }
  width: 100%;
  background-color: ${({ theme }) => theme.palette.background.paper};
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
    filter: blur(25px) opacity(0.45);
    top: -5px;
    left: 0px;
    scale: 1.15;
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
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
`

const ContentName = styled(Typography)`
  text-align: center;
  font-weight: 600;
  color: ${({ theme }) => theme.palette.secondary.main};
`

const AuthorName = styled(Typography)`
  display: block;
  text-align: right;
  font-weight: 500;
  color: ${({ theme }) => theme.palette.secondary.light};
  .name {
    /* color: ${({ theme }) => theme.palette.primary.main}; */
  }
  font-style: italic;
  margin-left: auto;
  /* margin-right: -30%; */
`

const Copyright = styled(Typography)`
  position: absolute;
  bottom: 10px;
  right: 10px;
  text-align: center;
  font-weight: 600;
  color: ${({ theme }) => theme.palette.secondary.main}61;
  font-size: 16px;
  display: flex;
  align-items: center;
  gap: 5px;
  /* font-style: italic; */

  font-family: 'Noto Sans', sans-serif;
  /* letter-spacing: 0.55px; */
  .symbol {
    font-weight: 600;
    font-family: 'Noto Display Sans', sans-serif;
    margin-bottom: -3px;
    font-size: 17.5px;
  }
  @media (max-width: 400px) {
    .symbol {
      margin-bottom: 0px;
      font-size: 18px;
    }
  }
`

const BottomReachedView = styled.div`
  width: 100%;
  margin-top: auto;
  padding: 10px 18px;
`

export default DetailsSection
