import React from 'react'
import styled from '@emotion/styled'

function LaptopBanner() {
  return (
    <Root>
      <Main>
        <Content>
          <Heading>
            Pursue <span>Your Hobby,</span> Unleash Your Creativity!
          </Heading>
          <SubHeading>
            Nurture Your Talent,<span> Share Your Stories,</span> and Inspire Others
          </SubHeading>
          <StyledButton>Start Writing</StyledButton>
        </Content>
        <Image>
          <img src="./girlWithbook.png" alt="Girl with Book" />
        </Image>
      </Main>
    </Root>
  )
}

export default LaptopBanner

const Root = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`

const Main = styled.div`
  width: 100%;
  max-width: var(--main-max-width);
  padding-inline: var(--main-side-spacing);
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  gap: 25px;
  padding: 0 var(--main-side-spacing);

  @media (max-width: 900px) {
    flex-direction: column;
    gap: 50px;
  }
`

const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  width: 50%;
  position: relative;
  top: -150px;
  @media (max-width: 1350px) {
    top: -100px;
  }
  @media (max-width: 1200px) {
    top: -50px;
  }

  @media (max-width: 900px) {
    align-self: center;
    align-items: center;
    text-align: center;
    width: 100%;
    top: 70px;
    margin-bottom: 20px;
  }
`

const Heading = styled.h1`
  font-size: 2.5rem;
  line-height: 1.3;
  font-family: 'Maven Pro';
  color: ${props => props.theme.palette.secondary.main};
  span {
    color: ${props => props.theme.palette.primary.main};
    font-weight: bold;
  }
  margin: 0;
  @media (max-width: 768px) {
    font-size: 1.8rem;
  }

  @media (max-width: 450px) {
    font-size: 1.5rem;
  }
`

const SubHeading = styled.p`
  font-size: 1.2rem;
  font-family: 'Maven Pro', sans-serif;

  span {
    color: ${props => props.theme.palette.primary.main};
    font-weight: bold;
  }

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`

const StyledButton = styled.button`
  padding: 10px 20px;
  font-size: 1rem;
  font-family: 'Maven Pro';
  color: white;
  background-color: #6200ea;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  &:hover {
    background-color: #3700b3;
  }

  @media (max-width: 768px) {
    font-size: 0.8rem;
    padding: 7px 10px;
  }
`

const Image = styled.div`
  width: 50%;
  img {
    width: 100%;
    height: 100%;
    @media (max-width: 900px) {
      width: 100%;
    }
    @media (max-width: 768px) {
      width: 100%;
      height: 100%;
    }
  }
  @media (max-width: 900px) {
    width: 100%;
  }
`
