import React, { useState } from 'react'
import styled from '@emotion/styled'
import { Favorite, Visibility, Note } from '@mui/icons-material'
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents'
import { Avatar } from '@mui/material'
import { useWinnerListService } from 'modules/Leaderboard/services/WinnerList.service'
import { useLeaderListService } from 'modules/Leaderboard/services/LeaderList.service'

const data2 = {
  'novel-writing': [
    { rank: 1, name: 'Alice Smith', city: 'New York', views: 1200, hearts: 300, notes: 45 },
    { rank: 2, name: 'Bob Johnson', city: 'Los Angeles', views: 1100, hearts: 290, notes: 50 },
    { rank: 3, name: 'Charlie Lee', city: 'Chicago', views: 1050, hearts: 275, notes: 60 },
    { rank: 4, name: 'Daniel Wright', city: 'San Francisco', views: 980, hearts: 250, notes: 40 },
    { rank: 5, name: 'Eva Brown', city: 'Seattle', views: 940, hearts: 240, notes: 30 },
    { rank: 6, name: 'Frank Thomas', city: 'Austin', views: 900, hearts: 230, notes: 25 },
    { rank: 7, name: 'Grace Lee', city: 'Boston', views: 850, hearts: 220, notes: 20 },
    { rank: 8, name: 'Hannah White', city: 'Miami', views: 820, hearts: 210, notes: 18 },
    { rank: 9, name: 'Isaac Young', city: 'Denver', views: 790, hearts: 200, notes: 15 },
  ],
  'book-writing': [
    { rank: 1, name: 'David Wilson', city: 'Houston', views: 1300, hearts: 320, notes: 40 },
    { rank: 2, name: 'Eva Davis', city: 'Phoenix', views: 1250, hearts: 310, notes: 42 },
    { rank: 3, name: 'Frank Miller', city: 'San Antonio', views: 1000, hearts: 260, notes: 55 },
    { rank: 4, name: 'Grace Nelson', city: 'Dallas', views: 950, hearts: 240, notes: 45 },
    { rank: 5, name: 'Hannah Clark', city: 'Columbus', views: 900, hearts: 220, notes: 38 },
    { rank: 6, name: 'Isaac Harris', city: 'Charlotte', views: 850, hearts: 210, notes: 30 },
    { rank: 7, name: 'Jack Martinez', city: 'Fort Worth', views: 800, hearts: 200, notes: 28 },
    { rank: 8, name: 'Lily Lewis', city: 'San Jose', views: 780, hearts: 190, notes: 25 },
    { rank: 9, name: 'Mia Walker', city: 'San Francisco', views: 750, hearts: 180, notes: 20 },
  ],
  'poem-writing': [
    { rank: 1, name: 'Grace Moore', city: 'Philadelphia', views: 1400, hearts: 330, notes: 38 },
    { rank: 2, name: 'Hannah Taylor', city: 'San Diego', views: 1350, hearts: 315, notes: 47 },
    { rank: 3, name: 'Isaac Anderson', city: 'Dallas', views: 1200, hearts: 300, notes: 50 },
    { rank: 4, name: 'Jack Carter', city: 'Jacksonville', views: 1150, hearts: 290, notes: 48 },
    { rank: 5, name: 'Lily Martin', city: 'Indianapolis', views: 1100, hearts: 280, notes: 45 },
    { rank: 6, name: 'Mia King', city: 'San Antonio', views: 1050, hearts: 270, notes: 40 },
    { rank: 7, name: 'Noah Scott', city: 'Austin', views: 1000, hearts: 260, notes: 35 },
    { rank: 8, name: 'Olivia Lee', city: 'Denver', views: 950, hearts: 250, notes: 32 },
    { rank: 9, name: 'Sophia Young', city: 'Columbus', views: 900, hearts: 240, notes: 30 },
  ],
}


function LeadershipBoard({ competition, searchTerm , contestId}) {
  // const filteredData = data2[competition].filter(person => person.name.toLowerCase().includes(searchTerm.toLowerCase()))

  const {data}=useLeaderListService(contestId);
  console.log("dhs",data)
 const filteredData=data?.filter((person) => person.author_name.toLowerCase().includes(searchTerm.toLowerCase()))
  return (
    <BoardContainer>
      {/* {filteredData.map(person => (
        <RankRow key={person.rank}>
          <RankIcon>
            <img src={person.rank === 1 ? './Vector.png' : './silver.png'} alt="Star" />
            <RankNumber>{person.rank}</RankNumber>
          </RankIcon>
          <ImageWrapper>
            <Avatar
              sx={{
                width: { xs: 24, sm: 32, md: 40 },
                height: { xs: 24, sm: 32, md: 40 },
              }}
            />
          </ImageWrapper>
          <Details>
            <Name>{person.name}</Name>
            <City>{person.city}</City>
          </Details>
          <Stats>
            <Stat>
              <img src="./notes.png" style={{ width: '15px', height: '15px' }} alt="Star" /> {person.notes}
            </Stat>
            <Stat>
              <Visibility sx={{ width: '20px', height: '20px' }} /> {person.views}
            </Stat>
            <Stat>
              <Favorite style={{ color: 'rgba(255, 95, 95, 1)', width: '20px', height: '20px' }} /> {person.hearts}
            </Stat>
          </Stats>
        </RankRow>
      ))} */}
      
      {filteredData?
      filteredData?.map((person, index) => (
        <RankRow key={index}>
          <RankIcon>
            <img src={person.ranking === 1 ? './Vector.png' : './silver.png'} alt="Star" />
            <RankNumber>{person.ranking}</RankNumber>
          </RankIcon>
          <ImageWrapper>
            <Avatar
              sx={{
                width: { xs: 24, sm: 32, md: 40 },
                height: { xs: 24, sm: 32, md: 40 },
              }}
            src={person.author_img} />
          </ImageWrapper>
          <Details>
            <Name>{person.author_name}</Name>
          </Details>
          <Stats>
            <Stat>
              <img src="./notes.png" style={{ width: '15px', height: '15px' }} alt="Star" /> {person.
                book_comment_count}
            </Stat>
            <Stat>
              <Visibility sx={{ width: '20px', height: '20px' }} /> {person.book_view_count
              }
            </Stat>
            <Stat>
              <Favorite style={{ color: 'rgba(255, 95, 95, 1)', width: '20px', height: '20px' }} /> {person
                .book_like_count}
            </Stat>
          </Stats>
                
        </RankRow>
      ))
      :data?.map((person, index) => (
        <RankRow key={index}>
          <RankIcon>
            <img src={person.ranking === 1 ? './Vector.png' : './silver.png'} alt="Star" />
            <RankNumber>{person.ranking}</RankNumber>
          </RankIcon>
          <ImageWrapper>
            <Avatar
              sx={{
                width: { xs: 24, sm: 32, md: 40 },
                height: { xs: 24, sm: 32, md: 40 },
              }}
            src={person.author_img} />
          </ImageWrapper>
          <Details>
            <Name>{person.author_name}</Name>
          </Details>
          <Stats>
            <Stat>
              <img src="./notes.png" style={{ width: '15px', height: '15px' }} alt="Star" /> {person.
                book_comment_count}
            </Stat>
            <Stat>
              <Visibility sx={{ width: '20px', height: '20px' }} /> {person.book_view_count
              }
            </Stat>
            <Stat>
              <Favorite style={{ color: 'rgba(255, 95, 95, 1)', width: '20px', height: '20px' }} /> {person.
                book_like_count}
            </Stat>
          </Stats>
        </RankRow>
      ))}
    </BoardContainer>
  )
}

const BoardContainer = styled.div`
  width: 100%;
  margin-top: 30px;
  @media (max-width: 768px) {
    width: 100%;
    padding: 0 1rem;
  }
`

const RankRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.1);
  padding: 0.8rem;
  border-radius: 5px;
  margin-bottom: 0.7rem;
  color: #fff;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
`

const RankIcon = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-right: 3rem;
  img {
    width: 2.5rem;
    height: 1.5rem;
  }
  @media (max-width: 768px) {
    margin-right: 1.5rem;
    img {
      width: 1.5rem;
      height: 1rem;
    }
  }
  @media (max-width: 480px) {
    margin-right: 1rem;
  }
`

const RankNumber = styled.div`
  font-size: 1rem;
  position: absolute;
  @media (max-width: 768px) {
    font-size: 0.8rem;
  }
  @media (max-width: 480px) {
    font-size: 0.7rem;
  }
`

const ImageWrapper = styled.div`
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 50%;
  overflow: hidden;
  margin-right: 10px;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  @media (max-width: 768px) {
    margin-right: 5px;
    width: 32px;
    height: 32px;
  }

  @media (max-width: 480px) {
    margin-right: 3px;
    width: 24px;
    height: 24px;
  }
`

const Details = styled.div`
  flex: 1;
  margin-left: 10px;
`

const Name = styled.div`
  font-size: 18px;
  font-weight: bold;
  @media (max-width: 768px) {
    font-size: 14px;
  }

  @media (max-width: 480px) {
    font-size: 12px;
  }
`

const City = styled.div`
  font-size: 14px;
  color: rgba(255, 255, 255, 0.7);
  @media (max-width: 768px) {
    font-size: 12px;
  }
  @media (max-width: 480px) {
    font-size: 10px;
  }
`

const Stats = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
  @media (max-width: 768px) {
    gap: 12px;
  }
  @media (max-width: 480px) {
    gap: 10px;
  }
`

const Stat = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  font-size: 14px;
  background-color: rgba(0, 0, 0, 0.1);
  padding: 5px 8px;
  border-radius: 15px;
  @media (max-width: 768px) {
    font-size: 12px;
    gap: 3px;
    padding: 3px 6px;
    border-radius: 10px;
  }
  @media (max-width: 480px) {
    font-size: 10px;
    gap: 2px;
    padding: 2px 4px;
    border-radius: 8px;
  }
`

export default LeadershipBoard
