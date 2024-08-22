import styled from '@emotion/styled';
import React from 'react';

function Benefits() {
  return (
    <Root>
      <Heading>
        <span>Benefits of Participating in the contest:</span>
      </Heading>

      <Container>
        <Row>
          <Point>
            <IconWrapper style={{ background: 'rgba(238, 255, 255, 1)' }}>
              <img src='./icon1.png' alt="Certificates" />
            </IconWrapper>
            Certificates of Achievement
          </Point>
          <Point>
            <IconWrapper style={{ background: 'rgba(255, 247, 241, 1)' }}>
              <img src='./icon2.png' alt="Free Subscription" />
            </IconWrapper>
            Free Subscription to Premium Features
          </Point>
        </Row>
        <Row>
          <Point>
            <IconWrapper style={{ background: 'rgba(248, 250, 251, 1)' }}>
              <img src='./icon3.png' alt="Instant Cash Rewards" />
            </IconWrapper>
            Instant Cash Rewards
          </Point>
          <Point>
            <IconWrapper style={{ background: 'rgba(225, 239, 255, 1)' }}>
              <img src='./icon4.png' alt="Feature on Rachayitha" />
            </IconWrapper>
            Feature on Rachayitha
          </Point>
        </Row>
        <Row>
          <Point>
            <IconWrapper style={{ background: 'rgba(248, 250, 251, 1)' }}>
              <img src='./icon5.png' alt="Social Media Promotions" />
            </IconWrapper>
            Social Media Promotions
          </Point>
          <Point>
            <IconWrapper style={{ background: 'rgba(255, 250, 235, 1)' }}>
              <img src='./icon6.png' alt="Internship Opportunities" />
            </IconWrapper>
            Internship Opportunities at Rachayitha
          </Point>
        </Row>
        <Row>
          <Point>
            <IconWrapper style={{ background: 'rgba(241, 248, 255, 1)' }}>
              <img src='./icon7.png' alt="Free Webinars and Workshops" />
            </IconWrapper>
            Access to Free Webinars and Writing Workshops
          </Point>
        </Row>
      </Container>
    </Root>
  );
}

export default Benefits;

const Root = styled.div`
  padding-block: 80px;
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
  justify-content: center;
  align-items: center;
  gap: 20px;
  flex-wrap: wrap;
  flex-direction: column;
`;

const Row = styled.div`
  flex: 1;
  max-width: 50%;
  display: flex;
  gap: 20px;
`;

const Point = styled.div`
  f  font-size: 1.1rem;
  color: #333;
  display: flex;
  align-items: center;
  margin-bottom: 10px;
  padding: 10px;
  border-radius: 10px;
  box-shadow: 0px 21px 26px 0px rgba(47, 63, 87, 0.08);

`;

const IconWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 28px;
  height: 28px;
  margin-right: 10px;
  padding: 10px;
  border-radius: 50%;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);

  img {
    width: 16px;
    height: 16px;
    object-fit: contain;
  }
`;
