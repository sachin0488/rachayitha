import React from 'react'
import styled from '@emotion/styled'
import VisibilityRoundedIcon from '@mui/icons-material/VisibilityRounded'
import FavoriteRoundedIcon from '@mui/icons-material/FavoriteRounded'
import { Avatar, Button, Typography } from '@mui/material'
import { useLeaderListService } from '../service/LeaderList.service'
import Link from 'next/link'
import { useRouter } from 'next/router'

const Leaderboard = ({ contestDetail }) => {
  const contest_id = Number(useRouter().query?.contest_id || 1)
  const { data } = useLeaderListService({ contentType: contestDetail?.contest_type })

  console.log(data)

  return (
    <Root>
      <Main>
        <TopSection>
          <Typography variant="h3" color="white" fontWeight={600}>
            Weekly Top Leaderboard
          </Typography>
        </TopSection>
        <Content>
          <TopContentsWrapper>
            <TopContents list={[...data]} contentType={contestDetail?.contest_type} />
          </TopContentsWrapper>
          <TopContributorsWrapper>
            <TopContributors list={[...data]} />
          </TopContributorsWrapper>
        </Content>
        <Footer>
          <Link href={`/leaderboard?contest_id=${contest_id}`}>
            <Button
              variant="contained"
              disableElevation
              sx={{
                background: '#fff',
                color: theme => theme.palette.primary.main,
                fontWeight: 600,
                '&:hover': {
                  background: '#9575cd',
                },
              }}>
              View Full Leaderboard
            </Button>
          </Link>
        </Footer>
      </Main>
    </Root>
  )
}

// Main Layout
const Root = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding-block: 50px;
  background: #4a148c; /* Replace with your theme's primary color */
  overflow: hidden;
  z-index: 100;
  * {
    box-sizing: border-box;
  }
`

const Main = styled.div`
  width: 100%;
  max-width: var(--main-max-width);
  padding-inline: var(--main-side-spacing);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
`

const TopSection = styled.div`
  text-align: center;
  margin-bottom: 30px;
`

const Content = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  max-width: 1000px;
  gap: 20px;

  @media (max-width: 1050px) {
    flex-direction: column;
    align-items: center;
  }
  @media (max-width: 600px) {
    align-items: stretch;
    padding-inline: 20px;
  }
`

// Wrapper Components with Gradient Backgrounds
const TopContentsWrapper = styled.div`
  flex: 1;
  background: linear-gradient(180deg, rgba(0, 0, 0, 0.2) 0%, rgba(0, 0, 0, 0.06) 100%);
  border-radius: 15px;
  padding: 0px 20px 23px;
  @media (max-width: 1050px) {
    max-width: 491px;
  }
`

const TopContributorsWrapper = styled.div`
  flex: 1;
  background: linear-gradient(180deg, rgba(0, 0, 0, 0.2) 0%, rgba(0, 0, 0, 0.06) 100%);
  border-radius: 15px;
  padding: 0px 20px 23px;
`

const Footer = styled.div`
  margin-top: 30px;
`

const ViewButton = styled.button`
  background-color: white;
  color: rgba(70, 37, 161, 1);

  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: #9575cd;
  }
`

// Top Contents Component
const TopContents = ({ list, contentType }) => {
  return (
    <TopContentsLayout>
      <Typography variant="h4" marginY={2.5} fontWeight={600} color="white">
        Top Content
      </Typography>
      <div className="content_list">
        {list?.slice(0, 2)?.map((item, index) => (
          <Link key={item.id} href={`/${contentType}/${item?.id}/${item?.slug}`}>
            <Card>
              <CardImage src={item?.book_cover_img} />
              <CardText>
                <RatingWrapper>
                  <StarIcon>⭐</StarIcon>
                  <Rating>{item?.book_rating?.rate_avg?.toFixed(1)}</Rating>
                  <RatingText>Rating</RatingText>
                </RatingWrapper>
                <TitleText>{item?.book_name}</TitleText>
                <Author>by {item?.author_name}</Author>
                <Description>“{item?.book_synopsis}”</Description>
              </CardText>
            </Card>
          </Link>
        ))}
        {/* <Card>
          <CardImage
            src="https://readerv5.s3.ap-south-1.amazonaws.com/img/Age%20of%20Gods%3A%20Thousand%20Folds%20System/_de896a8d-5efa-4337-b2da-8d5fd51d8da4.jpeg.jpg"
            alt="Monster Ever"
          />
          <CardText>
            <RatingWrapper>
              <StarIcon>⭐</StarIcon>
              <Rating>4.3</Rating>
              <RatingText>Rating</RatingText>
            </RatingWrapper>
            <TitleText>Monster Ever</TitleText>
            <Author>by Death Writer</Author>
            <Description>
              “The annual is named as 'SANGRILLA' which is the best thing I want to talk about and which is the best time... The annual is
              named as 'SANGRILLA' which is the best thing I want to talk about and which is the best time...”
            </Description>
          </CardText>
        </Card> */}
      </div>
    </TopContentsLayout>
  )
}

const TopContentsLayout = styled.div`
  display: flex;
  flex-direction: column;
  .heading {
    color: white;
  }

  .content_list {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }
`

const Card = styled.div`
  background: #512da8;
  padding: 15px;
  border-radius: 10px;
  color: #ffffff;
  display: flex;
  flex-direction: row;
  gap: 15px;
  @media (max-width: 450px) {
    flex-direction: column;
    align-items: center;
  }
`

const CardImage = styled.img`
  height: 200px;
  border-radius: 10px;
  aspect-ratio: 2.2/3;
  object-fit: cover;
`

const CardText = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`

const RatingWrapper = styled.div`
  display: flex;
  align-items: center;
  background: rgba(0, 0, 0, 0.2);
  padding: 5px 10px;
  border-radius: 5px;
`

const StarIcon = styled.span`
  margin-right: 5px;
  color: #ffdd57;
`

const Rating = styled.span`
  font-size: 18px;
  font-weight: bold;
`

const RatingText = styled.span`
  font-size: 14px;
  margin-left: 5px;
  color: rgba(255, 255, 255, 0.8);
`

const TitleText = styled.h6`
  font-size: 20px;
  /* margin: 2px 0; */
  margin-block: 6px 0px;
  color: #ffffff;
`

const Author = styled.div`
  margin-block: 0px 0px;
  font-size: 14px;
  color: #bdbdbd;
`

const Description = styled.p`
  margin-block: 0px 0px;
  font-size: 12px;
  color: rgba(255, 255, 255, 0.8);

  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 5;
  line-clamp: 5;
`

// Top Contributors Component
const TopContributors = ({ list }) => {
  return (
    <Box>
      <Typography variant="h4" marginY={2.5} fontWeight={600} color="white">
        Top Contributor
      </Typography>
      <TopContributorsLayout>
        {list?.slice(0, 4)?.map((item, index) => (
          <ContributorCard key={item?.id}>
            <CrownIcon src={`/contest/crowns/f${index + 1}.svg`} alt="" />

            <Avatar
              src={item?.author_img}
              sx={{
                width: '64px',
                height: '64px',
                marginBottom: '17px',
                fontSize: '1.9rem',
                fontWeight: '500',
                background: theme => theme.palette.secondary.main,
              }}>
              {item?.author_name[0].toUpperCase()}
            </Avatar>
            <ContributorText>
              <ContributorName>{item?.author_name}</ContributorName>
            </ContributorText>
            <Stats>
              <Stat>
                <VisibilityRoundedIcon fontSize="small" />
                <StatValue>{item?.book_view_count}</StatValue>
              </Stat>
              <Stat>
                <FavoriteRoundedIcon sx={{ color: '#FF5F5F' }} fontSize="small" />
                <StatValue>{item?.book_like_count}</StatValue>
              </Stat>
            </Stats>
          </ContributorCard>
        ))}
      </TopContributorsLayout>
    </Box>
  )
}

const Box = styled.div`
  .heading2 {
    color: white;
  }
  width: 100%;
`
const TopContributorsLayout = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;

  @media (max-width: 600px) {
    width: 100%;
    grid-template-columns: 1fr;
  }
`

const ContributorCard = styled.div`
  background: #4e2d86;
  padding: 20px;
  border-radius: 11px;
  color: #ffffff;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  height: 230px;
  width: 100%;
`

const CrownIcon = styled.img`
  font-size: 24px;
  color: #ffdd57;
`

const ContributorImageWrapper = styled.div`
  border-radius: 50%;
  width: 70px;
  height: 70px;
  overflow: hidden;
  margin-bottom: 10px;
  /* border: 3px solid #ffffff; */
`

const ContributorImage = styled.img`
  width: 100%;
  height: auto;
`

const ContributorText = styled.div`
  text-align: center;
  margin-bottom: 15px;
`

const ContributorName = styled.h3`
  font-size: 18px;
  font-weight: 600;
  margin: 5px 0;
  color: #ffffff;
`

const Location = styled.div`
  font-size: 14px;
  color: #bdbdbd;
  display: none;
`

const Stats = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
  gap: 8px;
`

const Stat = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 6px;
  background: rgba(0, 0, 0, 0.2);
  padding: 5px 13px 4px;
  border-radius: 24px;
`

const Icon = styled.span`
  font-size: 18px;
  margin-right: 10px;
`

const StatValue = styled.span`
  font-size: 1rem;
  font-weight: 500;
  display: flex;
  align-items: center;
`

const StatText = styled.span`
  font-size: 14px;
  margin-left: 5px;
  color: rgba(255, 255, 255, 0.8);
`

export default Leaderboard
