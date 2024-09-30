import React from 'react'
import styled from '@emotion/styled'
import { useTheme } from '@mui/material/styles'
import { useContestListService } from 'modules/Leaderboard/services/ContestList.service'
import Link from 'next/link'

function OngoingEvents() {
  const theme = useTheme()
  const { data: contestList } = useContestListService()
  return (
    <Root>
      <Main>
        <Header>
          <Title theme={theme}>OUR ONGOING EVENTS! -</Title>
          <Subtitle theme={theme}>UNLEASH YOUR TALENT &nbsp;</Subtitle>
        </Header>
        <EventsContainer>
          {/* <img src="./novelWritingComp.svg" alt="Novel Writing Competition" /> */}
          {contestList?.data?.data?.map(item => (
            <EventCard theme={theme} key={item?.id}>
              <ImageContainer>
                <img src={item?.contest_img} alt="Writing Competition" />
              </ImageContainer>
              <EventTitle theme={theme}>{item?.contest_name}</EventTitle>
              <EventDescription theme={theme}>{item?.contest_description}</EventDescription>
              <a href={`/leaderboard?contest_id=${item?.id}`} target="_blank" rel="noreferrer">
                <ParticipateButton theme={theme}>Participate now</ParticipateButton>
              </a>
            </EventCard>
          ))}
          {/* <EventCard theme={theme}>
            <ImageContainer>
              <img src="./poemWritingComp.svg" alt="Poem Writing Competition" />
            </ImageContainer>
            <EventTitle theme={theme}>Poem Writing Competition</EventTitle>
            <EventDescription theme={theme}>Great, this illustration When passion fades, only true love lasts forever.</EventDescription>
            <ParticipateButton theme={theme}>Participate now</ParticipateButton>
          </EventCard> */}
        </EventsContainer>
      </Main>
    </Root>
  )
}

export default OngoingEvents

const Root = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding-block: 80px;
  ${'' /* background-color: ${({ theme }) => theme.palette.background.dark}; */}
  background: rgba(242, 241, 248, 1);
`

const Main = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: var(--main-max-width);
  padding-inline: var(--main-side-spacing);
  align-items: flex-start;
  max-width: 1280px;
  padding-inline: 80px;
  justify-content: space-between;
  gap: 25px;
  font-family: 'Maven Pro';
  @media (max-width: 900px) {
    gap: 15px;
    padding-inline: 20px;
  }
`

const Header = styled.div`
  text-align: center;
  @media (max-width: 900px) {
    text-align: left;
  }
`

const Title = styled.h1`
  font-size: 3rem;
  color: ${({ theme }) => theme.palette.primary.main};
  margin: 0;
  @media (max-width: 900px) {
    font-size: 2.5rem;
  }
  @media (max-width: 600px) {
    font-size: 2rem;
  }
  @media (max-width: 400px) {
    font-size: 1.5rem;
  }
`

const Subtitle = styled.h1`
  font-size: 3rem;
  color: #b19cd9;
  margin: 0;

  @media (max-width: 900px) {
    font-size: 2.5rem;
  }
  @media (max-width: 600px) {
    font-size: 2rem;
  }
  @media (max-width: 400px) {
    font-size: 1.5rem;
  }
`

const EventsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  @media (max-width: 900px) {
    justify-content: center;
  }
`

const EventCard = styled.div`
  background-color: ${({ theme }) => theme.palette.background.paper};
  border-radius: 10px;
  box-shadow: ${({ theme }) => theme.palette.primary.shadowLevel01};
  max-width: 49%;
  padding: 15px;
  @media (max-width: 750px) {
    max-width: 100%;
  }
`

const ImageContainer = styled.div`
  width: 100%;
  img {
    width: 100%;
    height: auto;
    border-radius: 10px;
  }
`

const EventTitle = styled.h3`
  font-size: 1.2rem;
  font-family: 'Maven Pro';
  margin: 15px 0;
`

const EventDescription = styled.p`
  font-size: 1rem;
  color: ${({ theme }) => theme.palette.primary.main};
  font-family: 'Maven Pro';
`

const ParticipateButton = styled.button`
  padding: 10px 20px;
  font-size: 1rem;
  color: ${({ theme }) => theme.palette.background.default};
  background-color: ${({ theme }) => theme.palette.primary.main};
  border: none;
  border-radius: 5px;
  cursor: pointer;
  &:hover {
    background-color: ${({ theme }) => theme.palette.primary.dark};
  }
`
