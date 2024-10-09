import React, { useMemo } from 'react'
import styled from '@emotion/styled'
import SelectSelectedContent from './SelectSelectedTime'

import { useContestListService } from 'modules/Leaderboard/services/ContestList.service'
import { Button, Typography } from '@mui/material'
import { FormProvider, useForm } from 'react-hook-form'

function OngoingEvents() {
  const { data: contestList } = useContestListService()
  const methods = useForm({
    defaultValues: {
      contestType: 'all',
    },
  })

  const contestType = methods.watch('contestType')

  const filteredContestList = useMemo(() => {
    if (contestType === 'all') {
      return contestList?.data?.data
    }

    return contestList?.data?.data?.filter(item => item?.contest_type === contestType)||[]
  }, [contestList, contestType])

  return (
    <Root>
      <Main>
        <Header>
          <Title>
            OUR ONGOING EVENTS!{' '}
            <FormProvider {...methods}>
              <SelectSelectedContent
                name="contestType"
                menuList={[
                  {
                    label: 'All',
                    value: 'all',
                  },
                  {
                    label: 'Poem',
                    value: 'poem',
                  },
                  {
                    label: 'Novel',
                    value: 'book',
                  },
                ]}
              />
            </FormProvider>
          </Title>
          <Subtitle>UNLEASH YOUR TALENT &nbsp;</Subtitle>
        </Header>
        <EventsContainer>
          {filteredContestList?.map(item => (
            <EventCard key={item?.id}>
              <ImageContainer>
                <img src={item?.contest_img} alt="Writing Competition" />
              </ImageContainer>
              <Typography variant="h6" color="secondary">
                {item?.contest_name}
              </Typography>
              <Typography variant="body2" fontWeight={500} color="secondary.light">
                {item?.contest_description}
              </Typography>
              <a
                style={{
                  display: 'flex',
                  marginTop: '10px',
                }}
                href={`/leaderboard?contest_id=${item?.id}`}
                target="_blank"
                rel="noreferrer">
                <Button variant="contained" disableElevation>
                  Participate now
                </Button>
              </a>
            </EventCard>
          ))}
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
  @media (max-width: 900px) {
    gap: 15px;
    padding-inline: 20px;
  }
`

const Header = styled.div`
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
  gap: 20px;
  @media (max-width: 980px) {
    flex-wrap: wrap;
    justify-content: center;
  }
`

const EventCard = styled.div`
  background-color: ${({ theme }) => theme.palette.background.paper};
  border-radius: 22px;
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
    border-radius: 14px;
  }
`
