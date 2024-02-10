import styled from '@emotion/styled'
import Link from 'next/link'
import React from 'react'
import { ButtonContainer, Heading, ParagraphText, StyledButton, SubHeading, TextSection } from './styles'

const LeftSection = () => {
  return (
    <Root>
      <TextSection>
        {/* <SubHeading>Online Book Reading Platform</SubHeading> */}
        <Heading>
          Expand your Vision of <span>Literature Here</span>
        </Heading>
        <ParagraphText>India’s own online Reading Platform</ParagraphText>
      </TextSection>
      <ButtonContainer>
        <Link href={`/explore?content_type=book&category=0&sort_by=Hot`}>
          <StyledButton disableElevation variant="contained">
            Explore
          </StyledButton>
        </Link>
        <a href={process.env.NEXT_PUBLIC_DASHBOARD_URL} target="_blank" rel="noreferrer">
          <StyledButton variant="outlined">Create</StyledButton>
        </a>
      </ButtonContainer>
      <BackBlob src="/hero_m_bc.svg" alt="" />
    </Root>
  )
}

const Root = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-self: center;
  justify-content: center;
  align-items: start;
  gap: 23px;
  width: 50%;
  padding-left: var(--main-side-spacing);
  isolation: isolate;
  @media (max-width: 1310px) {
    width: 55%;
  }
  @media (max-width: 1260px) {
    width: 60%;
  }
  margin-top: -70px;
  @media (max-width: 900px) {
    width: fit-content;
    height: fit-content;
    align-items: center;
    padding: 20px 35px 35px;
    margin-inline: 10px;
    /* background: #fff; */
    border-radius: 17px;
    position: absolute;
  }
  @media (max-width: 500px) {
    margin-top: 30%;
    background: transparent;
  }
  @media (max-width: 522px) {
    padding: 10px 25px 25px;
  }
  @media (max-width: 500px) {
    padding: 10px 25px 25px;
  }
  @media (max-width: 440px) {
    padding: 10px 20px 25px;
  }
  @media (max-width: 432px) {
    padding: 5px 0px 25px;
  }
`

const BackBlob = styled.img`
  position: absolute;
  z-index: -1;
  /* top: 0px; */
  right: 50%;
  transform: translate(50%);
  /* left: 0; */
  width: 180%;
  height: 180%;
  /* object-fit: cover; */
  display: block;
  @media (max-width: 900px) {
    /* display: none; */
  }
  @media (max-width: 500px) {
    display: block;
  }
  display: block;
  filter: drop-shadow(0px 0px 8px #ffffff);
  /* background: transparent; */
`

export default LeftSection
