import React from 'react';
import styled from '@emotion/styled';
import { ArrowDropDown } from '@mui/icons-material';


function BookBanner() {
  return (
    <Root>
      <Container>
        <Image>
          <img src='./bookimg.png' alt="I Was Skeleton" />
        </Image>
        <Content>
          <Heading>
            Explore worlds beyond borders!<span> Read and write in your preferred language </span>- English, Hindi, and more.
          </Heading>
          <SubHeading>
            Read & write in <span> English or Hindi! </span> Find western classics and ancient wisdom like Bhagavad Gita
          </SubHeading>
          <StyledButton>
            <span>Change Language </span><ArrowDropDown />
          </StyledButton>
        </Content>
      </Container>
    </Root>
  );
}

export default BookBanner

const Root = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding-block: 80px;
  @media (max-width: 900px) {
    padding-block: 40px;
  }
`;

const Container = styled.div`
  width: 100%;
  max-width: var(--main-max-width);
  padding-inline: var(--main-side-spacing);
  display: flex;
  align-items: flex-start; 
  justify-content: space-between;
  gap: 2rem;
  @media (max-width: 900px) {
    flex-direction: column;
    gap: 20px;
    padding:0 10rem;
  }
`;

const Image = styled.div`
  img {
    width: 33rem;
    box-shadow: 10px 10px 0px 0px rgba(0, 0, 0, 0.1);
    @media (max-width: 900px) {
      width: 20rem;
    }
  }
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: flex-start; 
  width: 33rem;
  @media (max-width: 900px) {
    align-items: center;
    width: 20rem;
    align-items: flex-start;
  }
`;

const Heading = styled.h1`
  font-size: 1.8rem;
  font-family: 'Maven Pro';
  color: ${props => props.theme.palette.secondary.main};
  span {
    color: ${props => props.theme.palette.primary.main};
    font-weight: bold;
  }
  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`;

const SubHeading = styled.p`
  font-size: 1.2rem;
  font-family: 'Maven Pro', sans-serif;
  span {
    color: ${props => props.theme.palette.primary.main}; 
    font-weight: bold;
  }
  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

const StyledButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px 20px;
  font-size: 1rem;
  font-family: 'Maven Pro';
  color: white;
  background-color: #6200ea;
  border: none;
  border-radius: 5px;
  cursor: pointer;
   
  &:hover {
    background-color: #3700b3;
  }

  @media (max-width: 768px) {
    font-size: 0.8rem;
    padding: 5px 10px;
  }
`;

