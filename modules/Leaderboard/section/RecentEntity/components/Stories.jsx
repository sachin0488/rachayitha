import styled from '@emotion/styled';
import React from 'react';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ChatBubbleIcon from '@mui/icons-material/ChatBubble';

function Stories({ data }) {
  return (
    <Root>
      {data.map((item, index) => (
        <Card key={index}>
          <ImageWrapper>
            <img src={item.img} alt="img" />
          </ImageWrapper>
          <Content>
            <div>
              <Category>{item.category}</Category>
              <Name>{item.name}</Name>
              <Author>{item.author}</Author>
              <Action>
              <Likes>
  <ThumbUpIcon
    sx={(theme) => ({
      color: 'rgba(157, 111, 255, 1)',
      fontSize: 18,
      [theme.breakpoints.up('md')]: {
        fontSize: 20,
      },
    })}
  /> 
  {item.likes}
</Likes>

<Comments>
  <ChatBubbleIcon
    sx={(theme) => ({
      color: 'rgba(157, 111, 255, 1)',
      fontSize: 18,
      [theme.breakpoints.up('md')]: {
        fontSize: 20,
      },
    })}
  /> 
  {item.comments}
</Comments>
              </Action>
            </div>
            <Date>{item.date}</Date>
          </Content>
        </Card>
      ))}
    </Root>
  );
}

export default Stories;

const Root = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 20px;
  justify-content: flex-start;

  @media (min-width: 950px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (min-width: 450px) and (max-width: 949px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 449px) {
    grid-template-columns: 1fr;
  }
`;

const Card = styled.div`
  width: 100%;
  display: flex;
  background-color: #fff;
  border-radius: 10px;
  padding: 15px;
  box-shadow: 0px 21px 26px 0px rgba(47, 63, 87, 0.08);
  background: #f5f5f5;
  gap: 15px;
  border: 2px solid rgba(199, 175, 255, 1);

  @media (min-width: 768px) {
    flex-direction: row;
    max-height: 250px;
  }
`;

const ImageWrapper = styled.div`
  width: 100%;
  height: 150px;
  overflow: hidden;

  img {
    border-radius: 10px;
    object-fit: cover;
    width: 100%;
    height: 100%;
  }

  @media (min-width: 768px) {
    max-width: 240px;
    height: 100%;
  }
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  font-family: 'Maven Pro';
  height: 100%;

  @media (min-width: 768px) {
    max-width: 250px;
  }
`;

const Category = styled.span`
  font-size: 1rem;
  color: #fff;
  background: rgba(103, 60, 203, 1);
  padding: 2px 5px;
  border-radius: 20px;
  @media (max-width: 900px) {
    font-size: 0.8rem;
  }

  @media (max-width: 450px) {
    font-size: 0.6rem;
  }
`;

const Name = styled.div`
  font-size: 1.2rem;
  color: #333;
  font-weight: 600;

  @media (max-width: 900px) {
    font-size: 1rem;
  }

  @media (max-width: 450px) {
    font-size: 0.8rem;
  }

  @media (max-width: 300px) {
    font-size: 0.6rem;
  }

`;

const Author = styled.div`
  font-size: 1rem;
  color: #333;

  @media (max-width: 900px) {
    font-size: 0.8rem;
  }

  @media (max-width: 450px) {
    font-size: 0.6rem;
  }
`;

const Action = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  margin-top: 10px;
`;

const Likes = styled.div`
  font-size: 1rem;
  color: #333;
  display: flex;
  align-items: center;
  gap: 5px;

  @media (max-width: 900px) {
    font-size: 0.8rem;
  }

  @media (max-width: 450px) { 
    font-size: 0.6rem;
  }
`;

const Comments = styled.div`
  font-size: 1rem;
  color: #333;
  display: flex;
  align-items: center;
  gap: 5px;

  @media (max-width: 900px) {
    font-size: 0.8rem;
  } 

  @media (max-width: 450px) {
    font-size: 0.6rem;
  }

`;

const Date = styled.div`
  font-size: 0.9rem;
  color: #333;
  margin-top: 10px;

  @media (max-width: 900px) {
    font-size: 0.7rem;
  }

  @media (max-width: 450px) {
    font-size: 0.5rem;
  }
`;
