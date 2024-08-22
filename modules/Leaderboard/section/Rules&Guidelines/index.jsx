import React from 'react';
import styled from '@emotion/styled';
import { Button } from '@mui/material';
import CheckCircleOutlineOutlinedIcon from '@mui/icons-material/CheckCircleOutlineOutlined';

const KeyPoints = [
  "Provide detailed and thoughtful critiques or submissions.",
  "Ensure all content is original, avoiding plagiarism.",
  "Focus on literary works like stories, poems, and shayaris.",
  "Support your work with relevant references and authentic information.",
  "High-quality, well-crafted submissions are more likely to be featured and rewarded."
];

function RulesAndGuidelines() {
  return (
    <Root>
    <Wrapper>
      <Heading>Rules and Guidelines</Heading>
      <Container>
        <LeftSection>
          <img src='./rules&guidelines.png' alt="Rules and Guidelines" />
        </LeftSection>
        <RightSection>
          <Subheading>Key Points</Subheading>
          <Points>
            {KeyPoints.map((point, index) => (
              <Point key={index}>
                <Icon><CheckCircleOutlineOutlinedIcon /></Icon>
                {point}
              </Point>
            ))}
          </Points>
          <Button variant="outlined" color="primary" sx={{margin: '20px 0',
          alignSelf:'left',
          width:'fit-content',
          padding: '10px 60px',
          fontWeight: 'bold',
          backgroundColor: '#fff'}}>
            Read Terms & Guidelines
          </Button>
        </RightSection>
      </Container>
    </Wrapper>
    </Root>
  );
}

const Root = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding-block: 80px;  
`;

const Wrapper = styled.div`
  padding: 20px;
  background-color: #f5f5f5;
`;

const Heading = styled.h1`
  text-align: center;
  font-size: 2em;
  color: #000;
  font-weight: 600;
  font-family: 'Maven Pro';
  margin-bottom: 20px;
`;

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 20px;
  flex-wrap: wrap;
`;

const LeftSection = styled.div`
  flex: 1;
  max-width: 50%;
  img {
    width: 100%;
    height: auto;
    border-radius: 10px;
  }
`;

const RightSection = styled.div`
  flex: 1;
  max-width: 50%;
  display: flex;
  flex-direction: column;
`;

const Subheading = styled.h2`
  font-size: 1.5rem;
  font-weight: bold;
  color: #000;
  margin-bottom: 20px;
`;

const Points = styled.div`
  font-size: 1.1rem;
  color: #333;
`;

const Point = styled.p`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
`;

const Icon = styled.span`
  display: flex;
  align-items: center;
  margin-right: 10px;
  color: #5624C1;
`;

export default RulesAndGuidelines;
