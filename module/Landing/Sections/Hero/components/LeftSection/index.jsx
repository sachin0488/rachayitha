import styled from '@emotion/styled'
import Link from 'next/link'
import React from 'react'
import { ButtonContainer, Heading, ParagraphText, StyledButton, SubHeading, TextSection } from './styles'
import ArrowRightAltRoundedIcon from '@mui/icons-material/ArrowRightAltRounded'

const LeftSection = () => {
  return (
    <Root>
      <TextSection>
        <SubHeading>Unlock Your Potential</SubHeading>
        <Heading>
          {`Discover the Joy of Learning at `}
          <span style={{ whiteSpace: 'nowrap' }}>{`St. Xavier's School`}</span>
        </Heading>
        <ParagraphText>Our curriculum is designed to foster creativity and critical thinking</ParagraphText>
      </TextSection>
      <ButtonContainer>
        <Link href={`/academics/academic_programme`}>
          <StyledButton variant="contained" endIcon={<ArrowRightAltRoundedIcon />}>
            Academics
          </StyledButton>
        </Link>
        {/* <Link href={`/create/dashboard/stories`}>
          <StyledButton variant="outlined">Create</StyledButton>
        </Link> */}
      </ButtonContainer>
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
  @media (max-width: 1310px) {
    width: 55%;
  }
  @media (max-width: 1260px) {
    width: 60%;
  }
  margin-top: -70px;
  @media (max-width: 900px) {
    justify-content: initial;
    margin-top: -20px;
    width: 100%;
    height: calc(100vh - 150px);
    align-items: center;
    padding-left: 0px;
  }
`

export default LeftSection
