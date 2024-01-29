import styled from '@emotion/styled'
import { Skeleton } from '@mui/material'
import React from 'react'
import InfoArea from './components/InfoArea'
import TabArea from './components/TabArea'
import { usePoemDetailsService } from 'modules/PoemDetail/services/PoemDetails.service'
import { useRouter } from 'next/router'

const DetailsSection = () => {
  const { query } = useRouter()
  const { Data, isLoading } = usePoemDetailsService({ poemId: query?.poemId })

  if (isLoading)
    return (
      <Root>
        <StyledSkeletonCover variant="rounded" />
        <LoadingInfo>
          <StyledSkeletonInfo variant="rounded" />
          <StyledSkeletonInfo variant="rounded" />
          <StyledSkeletonInfo variant="rounded" />
          <StyledSkeletonInfo variant="rounded" />
          <StyledSkeletonInfo variant="rounded" />
        </LoadingInfo>
      </Root>
    )

  return (
    <Root>
      <ImageContainer>
        <StyledImage alt="Cover Image" src={Data?.coverImage && Data?.coverImage.includes('http') ? Data?.coverImage : '/alt-img.svg'} />
        <StyledImage
          className="blur"
          alt="Cover Image"
          src={Data?.coverImage && Data?.coverImage.includes('http') ? Data?.coverImage : '/alt-img.svg'}
        />
      </ImageContainer>

      <InfoSection>
        <InfoArea />
        <TabArea />
      </InfoSection>
    </Root>
  )
}

const LoadingInfo = styled.div`
  display: flex;
  gap: 20px 20px;
  width: 100%;
  flex-direction: column;
`

const StyledSkeletonCover = styled(Skeleton)`
  height: 380px;
  max-width: 350px;
  aspect-ratio: 3/4;
  align-self: center;
  @media (max-width: 480px) {
    max-width: calc(100vw - 30px);
  }
`

const StyledSkeletonInfo = styled(Skeleton)`
  min-height: 50px;
  max-width: 100%;
`

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
    gap: 20px;
  }
`

const ImageContainer = styled.div`
  display: flex;
  height: 100%;
  position: relative;
  margin-top: 20px;
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
