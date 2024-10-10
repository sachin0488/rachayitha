import React, { useMemo } from 'react'
import styled from '@emotion/styled'

import { Button, Typography } from '@mui/material'
import { FormProvider, useForm } from 'react-hook-form'
import StyledSlider from 'components/StyledSlider'
import SelectSelectedContent from '../components/SelectSelectedTime'
import Link from 'next/link'
import { useContestListService } from 'modules/Leaderboard/services/ContestList.service'

function ContestListPage() {
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
    <RootContainer>
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

          <ContentBox>
            {filteredContestList?.map(item => (
              <EventCard key={item.id} item={item} />
            ))}
          </ContentBox>

          {/* <StyledSlider CardComponent={EventCard} List={filteredContestList} queryKey={'queryKey'} contentType={'contentType'} /> */}
        </Main>
      </Root>{' '}
    </RootContainer>
  )
}

export default ContestListPage

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

const mainMaxWidth = 1720
const RootContainer = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  background-color: white;
  color: black;
  background: linear-gradient(180deg, rgba(102, 59, 203, 0.15) 0%, rgba(102, 59, 203, 0) 100%);
  --main-max-width: ${mainMaxWidth}px;
  --main-side-spacing: 50px;
  @media (max-width: 1000px) {
    --main-side-spacing: 30px;
  }
  @media (max-width: 435px) {
    --main-side-spacing: 15px;
  }
  @media (max-width: 405px) {
    --main-side-spacing: 15px;
  }
  isolation: isolate;
  overflow: clip;
`

const Root = styled.div`
  display: flex;
  justify-content: center;
  position: relative;
  margin-top: 10px;
  width: 100%;
  margin-top: 80px;
`

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

const ContentBox = styled.div`
  /* display: grid; */
  /* grid-template-columns: repeat(auto-fill, minmax(500px, 1fr)); */
  gap: 25px;
  padding: 20px;
  /* @media (max-width: 560px) {
    grid-template-columns: repeat(auto-fill, minmax(100%, 1fr));
  }
  align-items: center;
  align-content: center;
  justify-content: center;
  justify-items: center; */

  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-items: flex-start;

  padding-left: var(--element-left-spacing);
  padding-right: var(--element-left-spacing);
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
