import React from 'react'
import Stories from './components/Stories'
import Poem from './components/Poem'
import styled from '@emotion/styled'
import { Typography } from '@mui/material'
import { useBookListService } from 'modules/Leaderboard/services/BookList.service'
import { useSpecificContestService } from 'modules/Contest/service/Schedule.service'

function RecentEntity() {
  const { data: contestData } = useSpecificContestService()

  const { data, refetch, isLoading, isFetching, isSuccess, isError } = useBookListService({ contentType: contestData?.contest_type })

  const StoriesData = data?.data.map(item => ({
    img: item?.book_cover_img,
    category: item?.book_category[0]?.name,
    name: item?.book_name,
    author: item?.author_name,
    likes: item?.book_like_count,
    comments: item?.book_comment_count,
    date: item?.book_publish_date,
  }))

  return (
    <Root>
      <Main>
        <Typography variant="h3" fontWeight={600} color="secondary" mb={4}>
          Recent Entries
        </Typography>

        <Container>
          <StoriesSection>
            <Subheading>
              {/* <span>Stories</span> */}
              {/* <View>View All</View> */}
            </Subheading>
            <Stories data={StoriesData} isLoading={isLoading} />
          </StoriesSection>
          {/* <PoemSection>
            <Subheading>
              <span>Poems</span>
              <View>View All</View>
            </Subheading>
            <Poem data={PoemData} />
          </PoemSection> */}
        </Container>
      </Main>
    </Root>
  )
}

export default RecentEntity

const Root = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`

const Main = styled.div`
  max-width: var(--main-max-width);
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  padding: 0 var(--main-side-spacing);
`

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 40px;
`

const StoriesSection = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  max-width: 1500px;
`

const PoemSection = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  max-width: 1500px;
`

const Subheading = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 1.5rem;
  font-weight: 600;
  font-family: 'Maven Pro';
  margin-bottom: 10px;
  max-width: 1500px;
  padding-right: 20px;

  @media (max-width: 768px) {
    font-size: 1.2rem;
  }

  @media (max-width: 450px) {
    font-size: 1rem;
    margin-bottom: 5px;
  }
`

const View = styled.div`
  font-size: 1rem;
  color: rgba(103, 60, 203, 1);
  font-weight: 300;
  text-decoration: underline;
  cursor: pointer;

  @media (max-width: 768px) {
    font-size: 0.9rem;
  }

  @media (max-width: 450px) {
    font-size: 0.8rem;
  }
`
