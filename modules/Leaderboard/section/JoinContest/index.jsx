import React from 'react';
import styled from '@emotion/styled';
import CheckCircleOutlineOutlinedIcon from '@mui/icons-material/CheckCircleOutlineOutlined';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';

function JoinContest() {
  return (
    <Root>
      <Heading>
        How to Win
        <span>
          Join the contest 
          <img src='./trophy.png' alt="Contest" />
        </span>
        <SuperMini>
          The best way is by writing and sharing your creative pieces—stories, poems, or shayaris—and joining our Literary Ambassador Program.
        </SuperMini>
      </Heading>

      <Container>
        <LeftSection>
          <ImageWrapper>
            <img src='./frame.png' alt="Contest" />
          </ImageWrapper>
        </LeftSection>
        <RightSection>
          <Subheading>Submit Your Work</Subheading>
          <Points>
            <Point>
              <Icon>
                <img src='./contest_notes.png' alt="Write" />
              </Icon>
              <Content>
                <span>Write a Story or Poem:</span>
                <p>
                  Share your creativity with the world! Submit your original works and contribute to the literary community.
                </p>
              </Content>
            </Point>
            <Point>
              <Icon><img src='./reward.png' alt="Reward" /></Icon>
              <Content>
                <span>Receive your Reward:</span>
                <p>
                  Each published piece will be rewarded with Rs. 50-200 within 14 days. Higher engagement and quality will lead to greater rewards!
                </p>
              </Content>
            </Point>    
          </Points>
        </RightSection>
      </Container>
    </Root>
  );
}

export default JoinContest;

const Root = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding-block: 80px;
`;

const Heading = styled.div`
  font-size: 24px;
  margin-bottom: 16px;
   width:45vw;
  font-family: 'Maven Pro';
  display: flex;
  justify-content: center;
  align-items: center;
 font-weight: 600;
  font-size: 1.2rem;
  flex-direction: column;
  span {
    display: flex;
    align-items: center;
    gap: 10px;
    font-weight: bold;
    font-size: 2.4rem;
    img {
      width: 40px;
      height: 40px;
    }
  }
`;

const SuperMini = styled.div`
  font-size: 1rem;
  color: #000;
  text-align: center;
  font-weight: 300;
`;

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 20px;
  flex-wrap: wrap;
`;

const LeftSection = styled.div`
  width: 45vw;
`;

const ImageWrapper = styled.div`
  position: relative;
  width: 100%;
  padding: 20px;
  background-image: url('./curvebg.png'); 
  background-size: cover;
  background-position: center;
  border-radius: 10px;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    max-width: 100%;
    height: auto;
  }
`;

const RightSection = styled.div`
  width: 50%;
  font-family: 'Maven Pro';
`;

const Subheading = styled.h2`
  font-size: 2rem;
  font-weight: 600;
  margin-bottom: 2rem;
`;

const Points = styled.div`
  font-size: 1.1rem;
  width:80%;
`;

const Point = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;

const Icon = styled.div`
  margin-right: 10px;
`;

const Content = styled.div`
  span {
    font-weight: bold;
  }
  p {
    margin: 0;
  }
`;
