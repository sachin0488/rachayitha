import React from 'react';
import styled from '@emotion/styled';




function LaptopBanner() {
  return (
    <Root>
    <Container>
      <Content>
        <Heading>
          <span>Unleash your inner writer</span> and share your stories with the world!
        </Heading>
        <SubHeading>
          <span>Write poems, short stories, novels, and more.</span> Express yourself and connect with a passionate community.
        </SubHeading>
        <StyledButton>Create Your First Story</StyledButton>
      </Content>
      <Image>
        <img src='./laptopNotebook.png' alt="I Was Skeleton" />
      </Image>
    </Container>
    </Root>
  );
}

export default LaptopBanner;

const Root = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding-block: 80px;
`

const Container = styled.div`
   width: 100%;
  max-width: var(--main-max-width);
  padding-inline: var(--main-side-spacing);
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 25px;
  @media (max-width: 900px) {
    flex-direction: column;
    gap: 50px;
  }
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
   width: 32rem;
  @media (max-width: 768px) {
    align-items: flex-start;
    width: 20rem;
  }
`;
const Heading = styled.h1`
  font-size: 2.5rem;
  line-height: 1.3;
  font-family: 'Maven Pro';
  color: ${props => props.theme.palette.secondary.main};
  span {
    color: ${props => props.theme.palette.primary.main};
    font-weight: bold;
  }
  margin:0;
  @media (max-width: 768px) {
    font-size: 1.8rem;
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
    padding: 7px 10px;
  }
`;

const Image = styled.div`
  img {
    width:32rem;
    box-shadow: 10px 10px 0px 0px rgba(0, 0, 0, 0.1);
    @media (max-width: 900px) {
      width: 20rem;
    }
  }
`;
