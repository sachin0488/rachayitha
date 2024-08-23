import React from 'react';
import Stories from './components/Stories';
import Poem from './components/Poem';
import styled from '@emotion/styled';

function RecentEntity() {
  const StoriesData = [
    {
      img: './book_cover1.png',
      category: "Fantasy",
      name: "Supreme Magus",
      author: "Tarun",
      likes: "430",
      comments: "44",
      date: "Aug 14, 2024 | 09:20 AM"
    },
    {
      img: './book_cover2.png',
      category: "Fantasy",
      name: "Supreme Magus",
      author: "Tarun",
      likes: "430",
      comments: "44",
      date: "Aug 14, 2024 | 09:20 AM"
    },
    {
      img: './book_cover3.png',
      category: "Fantasy",
      name: "Supreme Magus",
      author: "Tarun",
      likes: "430",
      comments: "44",
      date: "Aug 14, 2024 | 09:20 AM"
    }
  ];

  const PoemData = [
    {
      img: './book_cover4.png',
      category: "Fantasy",
      name: "Supreme Magus",
      author: "Tarun",
      likes: "430",
      comments: "44",
      date: "Aug 14, 2024 | 09:20 AM"
    },
    {
      img: './book_cover5.png',
      category: "Fantasy",
      name: "Supreme Magus",
      author: "Tarun",
      likes: "430",
      comments: "44",
      date: "Aug 14, 2024 | 09:20 AM"
    },
    {
      img: './book_cover6.png',
      category: "Fantasy",
      name: "Supreme Magus",
      author: "Tarun",
      likes: "430",
      comments: "44",
      date: "Aug 14, 2024 | 09:20 AM"
    }
  ];

  return (
    <Root>
      <Heading>
        <span>Recent Entities</span>
      </Heading>

      <Container>
        <StoriesSection>
          <Subheading>
            <span>Stories</span>
            <View>View All</View>
          </Subheading>
          <Stories data={StoriesData} />
        </StoriesSection>
        <PoemSection>
          <Subheading>
            <span>Poems</span>
            <View>View All</View>
          </Subheading>
          <Poem data={PoemData} />
        </PoemSection>
      </Container>
    </Root>
  );
}

export default RecentEntity;

const Root = styled.div`
  width: 100%;
  padding-block: 80px;
  padding-inline: 120px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;

  @media (max-width: 1200px) {
    padding-inline: 60px;
  }

  @media (max-width: 768px) {
    padding-inline: 30px;
  }

  @media (max-width: 450px) {
    padding-block: 40px;
    padding-inline: 20px;
  }
`;

const Heading = styled.div`
  font-size: 2.9rem;
  font-weight: 700;
  font-family: 'Maven Pro';
  margin-bottom: 40px;

  @media (max-width: 768px) {
    font-size: 2.2rem;
  }

  @media (max-width: 450px) {
    font-size: 1.8rem;
    margin-bottom: 20px;
  }
`;

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 40px;
`;

const StoriesSection = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  max-width: 1500px;
`;

const PoemSection = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  max-width: 1500px;
`;

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
`;

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
`;
