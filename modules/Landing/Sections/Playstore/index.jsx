import React from 'react';
import styled from '@emotion/styled';




function Playstore() {
  return (
    <Root>
    <Container>
      <Content>
        <Heading>
        Read <span>anywhere</span> & everywhere
        </Heading>
        <SubHeading>
        Read your stories anytime, anywhere! Our mobile app is available on the Play Store, ensuring your favorite tales are always at your fingertips.
        </SubHeading>
        <StyledButton><img src='./playstore.png' /></StyledButton>
      </Content>
      <Image>
        <img src='./OWINKS1.png' alt="I Was Skeleton" />
      </Image>
    </Container>
    </Root>
  );
}

export default Playstore;

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
  align-items: flex-start;
  justify-content: center;
   width: 32rem;
   margin-right: 3rem;
  @media (max-width: 768px) {
    
    width: 20rem;
    padding: 0 1rem;
  }
`;
const Heading = styled.h1`
  font-size: 2.5rem;
  font-family: 'Maven Pro';
  color: ${props => props.theme.palette.secondary.main};
  margin-bottom: 10px;
  span {
    color: ${props => props.theme.palette.primary.main};
    font-weight: bold;
  }
  @media (max-width: 768px) {
    font-size: 1.8rem;
    margin:0;
  }
`;

const SubHeading = styled.p`
  font-size: 1.2rem;
  font-family: 'Maven Pro', sans-serif;
  margin-bottom: 20px;
  
  span {
    color: ${props => props.theme.palette.primary.main}; 
    font-weight: bold;
  }
  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

const StyledButton = styled.button`
  border: none;
  border-radius: 5px;
  cursor: pointer;

`;

const Image = styled.div`
  img {
    width:35rem;
    background: radial-gradient(50% 50% at 50% 50%, #6B29FF 0%, rgba(219, 203, 255, 0) 100%);
    filter: drop-shadow(0px 8px 8px rgba(0, 0, 0, 0.5));
    @media (max-width: 768px) {
      margin:0;
      width: 20rem;
    }
  }
`;
