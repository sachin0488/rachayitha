import styled from '@emotion/styled'

import { Button, Typography, useMediaQuery } from '@mui/material'
import { useState } from 'react'

const Section = ({ imageSrc, title, text, position, breakPoint }) => {
  const isTablet = useMediaQuery(`(min-width: ${breakPoint}px)`)
  const isTabletSM = useMediaQuery(`(max-width: 850px)`)
  const [isReadMore, setIsReadMore] = useState(true)
  return (
    <Root>
      <Main>
        <HeadingBox>
          <Heading>{title}</Heading>
        </HeadingBox>
        <Body>
          {position === 'left' && isTablet && <Image className={position} src={imageSrc} alt="" />}
          <Text color="secondary" variant="subtitle1" textAlign="justify" className={isReadMore && 'read_more'}>
            {!isTablet && <Image className={position} src={imageSrc} alt="" />}
            {text}
          </Text>
          {position === 'right' && isTablet && <Image className={position} src={imageSrc} alt="" />}
        </Body>
        {isTabletSM && (
          <ReadMoreButton onClick={() => setIsReadMore(preV => !preV)}>
            {isReadMore ? 'Read Less' : 'Read More'}
          </ReadMoreButton>
        )}
      </Main>
    </Root>
  )
}

const Root = styled.div`
  display: flex;
  justify-content: center;
  position: relative;
  margin-top: 10px;
  width: 100%;
`
const ReadMoreButton = styled(Button)`
  align-self: flex-end;
  margin-left: auto;
`
const Text = styled(Typography)`
  --max-lines: 7;
  @media (max-width: 850px) {
    &.read_more {
      display: -webkit-box;
      overflow: hidden;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: var(--max-lines);
    }
  }
`

const Main = styled.div`
  width: 100%;
  max-width: var(--main-max-width);
  display: flex;
  flex-direction: column;
  padding-inline: var(--main-side-spacing);
  padding-block: 40px;
  gap: 10px;
  overflow: hidden;
`

const Body = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  display: flex;
  padding: 1.25rem;
  margin-top: 2rem;
  justify-content: space-between;
  align-items: center;
  border-radius: 15px;
  background-color: #ffffff59;
  box-shadow: 1px 3px 38px 1px #0f012f16;
  @media (max-width: 850px) {
    flex-direction: column;
  }
  @media (max-width: 530px) {
    padding: 0.9rem;
  }
`

const Image = styled.img`
  aspect-ratio: 16/9;
  object-fit: cover;
  border-radius: 10px;
  float: left;
  margin-right: 28px;
  &.right {
    margin-right: 0px;
    margin-left: 20px;
    float: right;
  }
  box-shadow: 2px 2px 30px 0 rgb(0 0 0 / 10%);
  @media (max-width: 850px) {
    width: 100%;
    margin-left: 0px;
    margin-right: 0px;
    float: initial;
    &.right {
      margin-right: 0px;
      margin-left: 0px;
      float: initial;
    }
  }
`

const HeadingBox = styled.div`
  display: flex;
  gap: 8px;
`

const Heading = styled(Typography)`
  font-weight: 600;
  font-size: 28px;
  line-height: 1.4;
  color: ${({ theme }) => theme.palette.secondary.main};
  text-transform: capitalize;

  @media (max-width: 350px) {
    font-size: 25px;
  }
`

export default Section
