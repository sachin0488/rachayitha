import React from 'react';
import styled from '@emotion/styled';
import { Grid, Button, Typography, useMediaQuery, useTheme } from '@mui/material';



const Jumptron = () => {
    const theme = useTheme();
    const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));

    return (
        <Root>
            <Main container spacing={4} alignItems="center">
                <LeftContent item xs={12} md={6}>
                    <Typography variant="h3" component="h1" gutterBottom>
                        Start Writing, Monetize Your Hobby
                    </Typography>
                    <Typography variant="body1" component="p" paragraph>
                        Unleash your creativity and turn your passion for storytelling into profit! 
                        Begin your writing journey today and earn rewards for your captivating stories and poems.
                    </Typography>
                    <Button variant="outlined" sx={{
                        color: 'white',
                        borderColor: 'white',
                    }} size={isSmallScreen ? 'small' : 'large'}>
                        START WRITING AND EARNING
                    </Button>
                </LeftContent>
                <RightContent item xs={12} md={6}>
                    <img src="/womenImg.png" alt="womenImg" />
                </RightContent>
            </Main>
        </Root>
    );
};

export default Jumptron;

const Root = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding-block: 80px;
`;

const Main = styled.div`
  width: 100%;
  max-width: var(--main-max-width);
  padding-inline: var(--main-side-spacing);
  display: flex;
  height: fit-content;
  align-items: start;
  justify-content: space-between;
  background: linear-gradient(100.71deg, #5624C1  11.55%, #B795FF 59.86%);
  border-radius: 10px;
  gap: 4rem;
  margin: 0 3rem;        
  @media (max-width: 900px) {
    flex-direction: column;
    gap: 0;
    padding:0 ;
  }
`;

const LeftContent = styled(Grid)`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  gap: 20px;
  margin-top: 4rem;
  font-family: 'Maven Pro';
  color: white;
 
  h1 {
    font-size: 2.3rem;
    font-weight: 600;
    line-height: 1.3;
    margin: 0;

    @media (max-width: 900px) {
      font-size: 1.5rem;
    }
  }

  p {
    font-size: 1.2rem;
    line-height: 1.3;
    margin: 0;
    @media (max-width: 900px) {
      font-size: 1rem;
    }
  }

  &:last-child {
    margin-bottom: 0;
    @media (max-width: 900px) {
      margin-top: 0;
      margin-bottom: 10px;
    }
  }

   @media (max-width: 900px) {
    align-items: center;
    margin-top: 0;
    text-align: center;
  }

`;

const RightContent = styled.div`
  display: flex;
  justify-content: center;

  img {
    height: fit-content;
    max-width: 500px;
    position: relative;
    z-index: 1;
    top: -4rem;
    margin-bottom: -4rem;

    @media (max-width: 900px) {
      max-width: 300px;
      margin-bottom: 0;
      top: 0;
    }
  }
`;
