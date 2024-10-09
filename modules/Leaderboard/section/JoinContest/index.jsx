import React from 'react'
import styled from '@emotion/styled'
import CheckCircleOutlineOutlinedIcon from '@mui/icons-material/CheckCircleOutlineOutlined'
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents'

function JoinContest() {
  return (
    <Root>
      <Main>
        <Heading>
          <span>How to Win</span>
          <h1>
            Join the contest
            <img src="./trophy.png" alt="Contest" />
          </h1>
          <SuperMini>
            The best way is by writing and sharing your creative pieces—stories, poems, or shayaris—and joining our Literary Ambassador
            Program.
          </SuperMini>
        </Heading>
        <Container>
          <LeftSection>
            <img src="./contestSec.svg" alt="Contest" />
          </LeftSection>
          <RightSection>
            <Subheading>Submit Your Work</Subheading>
            <Points>
              <Point>
                <Icon>
                  <img src="./contest_notes.png" alt="Write" />
                </Icon>
                <Content>
                  <span>Write a Story or Poem:</span>
                  <p>Share your creativity with the world! Submit your original works and contribute to the literary community.</p>
                </Content>
              </Point>
              <Point>
                <Icon>
                  <img src="./reward.png" alt="Reward" />
                </Icon>
                <Content>
                  <span>Receive your Reward:</span>
                  <p>
                    Each published piece will be rewarded with Rs. 50-200 within 14 days. Higher engagement and quality will lead to greater
                    rewards!
                  </p>
                </Content>
              </Point>
            </Points>
          </RightSection>
        </Container>
      </Main>
    </Root>
  )
}

export default JoinContest

const Root = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  padding-block: 12rem;
  @media (max-width: 1310px) {
    padding-block: 6rem;
  }
  @media (max-width: 900px) {
    padding-block: 3rem;
  }
  @media (max-width: 600px) {
    padding-block: 2rem;
  }
  @media (max-width: 400px) {
    padding-block: 1rem;
  }
`

const Main = styled.div`
  width: 100%;
  max-width: var(--main-max-width);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  @media (max-width: 1310px) {
    max-width: 100%;
  }
  margin-top: 70px;
  height: calc(100vh - 70px);
  max-height: 1090px;
  @media (max-width: 900px) {
    /* flex-direction: column-reverse; */
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: fit-content;
  }
`

const Heading = styled.div`
  font-size: 24px;
  margin-bottom: 16px;
  width: 60%;
  font-family: 'Maven Pro';
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 600;
  font-size: 1.2rem;
  flex-direction: column;
  h1 {
    display: flex;
    align-items: center;
    gap: 10px;
    font-weight: bold;
    font-size: 2.4rem;
    img {
      width: 40px;
      height: 40px;
    }
  }

  @media (max-width: 768px) {
    font-size: 1.1rem;
    width: 90%;
    h1 {
      font-size: 2rem;
      img {
        width: 40px;
        height: 40px;
      }
    }
  }
`

const SuperMini = styled.div`
  font-size: 1.2rem;
  color: #000;
  text-align: center;
  font-weight: 300;
  @media (max-width: 768px) {
    font-size: 1rem;
  }
`

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 20px;
  ${'' /* flex-wrap: wrap; */}
  @media (max-width: 1400px) {
    padding: 0 var(--main-side-spacing);
  }
  @media (max-width: 768px) {
    flex-direction: column-reverse;
    justify-content: center;
    /* padding-inline: 20px; */
  }
`

const LeftSection = styled.div`
  width: 50%;
  @media (max-width: 768px) {
    align-self: center;
    width: 100%;
  }
  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`

const RightSection = styled.div`
  width: 50%;
  font-family: 'Maven Pro';
  display: flex;
  flex-direction: column;
  align-items: center;
  @media (max-width: 768px) {
    align-items: flex-start;
    width: 100%;
  }
`

const Subheading = styled.h2`
  font-size: 2rem;
  font-weight: 600;
  margin-bottom: 2rem;
  align-self: flex-start;
  @media (max-width: 768px) {
    font-size: 1.8rem;
    margin-bottom: 1.4rem;
  }
`

const Points = styled.div`
  font-size: 1.1rem;
  width:80%;
  @media (max-width: 768px) {
    font-size: 1rem;
    width: 100%;
  }
`

const Point = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`

const Icon = styled.div`
  margin-right: 10px;
`

const Content = styled.div`
  span {
    font-weight: bold;
  }
  p {
    margin: 0;
  }
`
