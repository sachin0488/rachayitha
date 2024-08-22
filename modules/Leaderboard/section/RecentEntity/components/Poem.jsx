import styled from '@emotion/styled';
import React from 'react';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import CommentIcon from '@mui/icons-material/Comment';

function Poem({ data }) {
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
                <Likes><ThumbUpIcon /> {item.likes}</Likes>
                <Comments><CommentIcon /> {item.comments}</Comments>
              </Action>
            </div>
            <Date>{item.date}</Date>
          </Content>
        </Card>
      ))}
    </Root>
  );
}

export default Poem;

const Root = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  gap: 20px;
  flex-wrap: wrap;
  justify-content: flex-start;
`;

const Card = styled.div`
  width: 100%;
  max-width: 26vw;
  display: flex;
  align-items: flex-start;
  background-color: #fff;
  border-radius: 10px;
  padding: 15px;
  box-shadow: 0px 21px 26px 0px rgba(47, 63, 87, 0.08);
  height: 100%;
  background: #f5f5f5;
  flex-direction: column;
  gap: 15px;
  border: 2px solid rgba(199, 175, 255, 1);
  @media (min-width: 768px) {
    flex-direction: row;
    height: 250px;
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
    width: 160px;
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
    width: 140px;
  }
`;

const Category = styled.span`
  font-size: 0.8rem;
  color: #fff;
  background: rgba(103, 60, 203, 1);
  padding: 2px 5px;
  border-radius: 20px;
`;

const Name = styled.div`
  font-size: 0.9rem;
  color: #333;
  font-weight: 600;
`;

const Author = styled.div`
  font-size: 0.8rem;
  color: #333;
`;

const Action = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  margin-top: 10px;
`;

const Likes = styled.div`
  font-size: 0.8rem;
  color: #333;
  display: flex;
  align-items: center;
  gap: 5px;
`;

const Comments = styled.div`
  font-size: 0.8rem;
  color: #333;
  display: flex;
  align-items: center;
  gap: 5px;
`;

const Date = styled.div`
  font-size: 0.6rem;
  color: #333;
  margin-top: 10px;
`;

