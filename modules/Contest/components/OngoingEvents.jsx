import React, { useMemo } from 'react'
import styled from '@emotion/styled'
import SelectSelectedContent from './SelectSelectedTime'

import { useContestListService } from 'modules/Leaderboard/services/ContestList.service'
import { Button, Typography } from '@mui/material'
import { FormProvider, useForm } from 'react-hook-form'
import StyledSlider from 'components/StyledSlider'
import Link from 'next/link'

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

    return contestList?.data?.data?.filter(item => item?.contest_type === contestType) || []
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
        <StyledSlider CardComponent={EventCard} List={filteredContestList} queryKey={'queryKey'} contentType={'contentType'} />
      </Main>
    </Root>
  )
}

export default OngoingEvents

const EventCard = ({ item }) => {
  return (
    <EventCardRoot key={item?.id}>
      <Image src={item?.contest_img} alt="Writing Competition" />

      <Typography variant="h6" color="secondary">
        {item?.contest_name}
      </Typography>
      <Typography variant="body2" fontWeight={500} color="secondary.light">
        {item?.contest_description}
      </Typography>
      <Link href={`/contest/${item.slug}/${item?.id}`}>
        <a
          style={{
            display: 'flex',
            marginTop: '10px',
          }}>
          <Button variant="contained" disableElevation>
            Participate now
          </Button>
        </a>
      </Link>
    </EventCardRoot>
  )
}

const Root = styled.div`
  display: flex;
  justify-content: center;
  position: relative;
  margin-top: 10px;
  width: 100%;
  --main-side-spacing: 68px;
  --main-max-width: 1366px;

  @media (max-width: 768px) {
    --main-side-spacing: 16px;
  }
`

const mainMaxWidth = 1366

const Main = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;

  padding-block: 40px;
  gap: 10px;
  overflow: hidden;

  /* Styled Slider Settings ----- */
  --element-left-spacing: calc((100vw - var(--main-max-width)) / 2 + var(--main-side-spacing));
  @media (max-width: ${mainMaxWidth}px) {
    --element-left-spacing: var(--main-side-spacing);
  }
`

const Header = styled.div`
  @media (max-width: 900px) {
    text-align: left;
  }
  padding-left: var(--element-left-spacing);
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

const EventCardRoot = styled.div`
  background-color: ${({ theme }) => theme.palette.background.paper};
  border-radius: 22px;
  box-shadow: 5px 5px 40px 1px ${({ theme }) => theme.palette.primary.shadowLevel01};
  padding: 15px;
  max-width: fit-content;
`

const Image = styled.img`
  border-radius: 14px;
  width: 490px;
  border-radius: 10px;
  aspect-ratio: 2.35/0.97;
  object-fit: cover;
  @media (max-width: 560px) {
    width: calc(100vw - 69px);
  }
`
