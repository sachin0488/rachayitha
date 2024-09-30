import React from 'react'
import styled from '@emotion/styled'
import { useTheme } from '@mui/material/styles'
import { useOngoingEventsService } from '../service/OngoingEvents.service'

function OngoingEvents() {
  const theme = useTheme()
  const { data } = useOngoingEventsService()
  console.log('ongoingEvents', data)
  return (
    <Root>
      <Main>
        <Header>
          <Title>OUR ONGOING EVENTS! -</Title>
          <Subtitle>UNLEASH YOUR TALENT &nbsp;</Subtitle>
        </Header>
        <EventsContainer>
          {data?.map((item, index) => (
            <EventCard key={item?.id}>
              <ImageContainer>
                <img src="./novelWritingComp.svg" alt="Novel Writing Competition" />
              </ImageContainer>
              <EventTitle>{item?.contest_name}</EventTitle>
              <EventDescription>{item?.contest_description}</EventDescription>
              <ParticipateButton href={`/rachayitha_spirity/?contest_id=${item?.id}`}>Participate now</ParticipateButton>
            </EventCard>
          ))}

          {/* <EventCard>
          <ImageContainer>
            <img src="./novelWritingComp.svg" alt="Novel Writing Competition" />
          </ImageContainer>
          <EventTitle>Novel Writing Competition</EventTitle>
          <EventDescription>
            Great, this illustration When passion fades, only true love lasts forever.
          </EventDescription>
          <ParticipateButton>Participate now</ParticipateButton>
        </EventCard>
        <EventCard>
          <ImageContainer>
            <img src="./poemWritingComp.svg" alt="Poem Writing Competition" />
          </ImageContainer>
          <EventTitle>Poem Writing Competition</EventTitle>
          <EventDescription>
            Great, this illustration When passion fades, only true love lasts forever.
          </EventDescription>
          <ParticipateButton>Participate now</ParticipateButton>
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

const ParticipateButton = styled.a`
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
