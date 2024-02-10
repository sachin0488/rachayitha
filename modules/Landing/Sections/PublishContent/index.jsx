import styled from '@emotion/styled'
import { Button, Typography, useMediaQuery } from '@mui/material'
import React from 'react'
import DrawRoundedIcon from '@mui/icons-material/DrawRounded'

const PublishContent = () => {
  const isMobileSxH = useMediaQuery('(max-height:800px)')
  const isTabletSx = useMediaQuery('(min-width:600px)')
  const isMobileSx = useMediaQuery('(max-width:360px)')
  return (
    <Root>
      <Main>
        <div className="left">
          <Typography
            variant={isMobileSxH && isTabletSx ? 'body1' : isMobileSx ? 'h4' : 'h3'}
            fontWeight={600}
            color="primary"
            sx={{
              fontSize: isMobileSxH && isTabletSx  ? '2.3rem' : undefined,
            }}>
            Publish Your Novels And Poem
          </Typography>
          <Typography
            lineHeight={1.8}
            variant={isMobileSxH && isTabletSx  ? 'body1' : isMobileSx ? 'body1' : 'h6'}
            sx={{
              fontSize: isMobileSxH && isTabletSx  ? '1rem' : undefined,
            }}
            fontWeight={500}
            color="secondary">
            Publish your content on the platform and reach millions of readers.
          </Typography>
          <a className="StyledButtonA" href={process.env.NEXT_PUBLIC_DASHBOARD_URL} target="_blank" rel="noopener noreferrer">
            <StyledButton endIcon={<DrawRoundedIcon fontSize="inherit" />} size="large" disableElevation variant="contained">
              <Typography lineHeight={1.8} variant={isMobileSx ? 'body2' : 'h6'} fontWeight={500}>
                Start Creating
              </Typography>
            </StyledButton>
          </a>
        </div>
        <div className="right">
          <StyledImage src="/creator_ill.svg" alt="Publish Content" />
        </div>
      </Main>
    </Root>
  )
}

const Root = styled.div`
  display: flex;
  justify-content: center;
  position: relative;
  width: 100%;
  padding-inline: 20px;
  padding-inline: 60px;
  padding-bottom: 100px;
  height: fit-content;
  @media (max-width: 440px) {
    padding-inline: 30px;
  }
  @media (max-width: 368px) {
    padding-inline: 20px;
  }
`

const Main = styled.div`
  width: 100%;
  max-width: var(--main-max-width);
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: fit-content;
  @media (max-width: 1310px) {
    max-width: 100%;
  }
  @media (max-width: 900px) {
    flex-direction: column;
  }

  padding: 20px 30px;

  box-shadow: 15px 16px 45px 5px ${({ theme }) => theme.palette.primary.main}33;

  @media (max-width: 660px) {
    box-shadow: 15px 16px 45px 5px ${({ theme }) => theme.palette.primary.main}13,
      -15px -16px 45px 5px ${({ theme }) => theme.palette.primary.main}13;
  }

  border-radius: 20px;
  background: ${({ theme }) => theme.palette.background.paper};

  .left {
    display: flex;
    flex-direction: column;
    gap: 5px;
    align-items: flex-start;

    height: 100%;
    /* height: max-content; */
    padding: 20px 10px;
    .StyledButtonA {
      margin-top: auto;
      margin-top: 20px;
    }
  }
  .right {
    flex: 1;
    display: flex;
    justify-content: flex-end;
    @media (max-width: 900px) {
      justify-content: stretch;
    }
  }

  @media (max-width: 1274px) {
    .left {
      width: 60%;
    }
    .right {
      width: 40%;
    }
  }
  @media (max-width: 1080px) {
    .left {
      width: 50%;
    }
    .right {
      width: 50%;
    }
  }

  @media (max-width: 900px) {
    .left {
      width: 100%;
    }
    .right {
      margin-left: auto;
      width: 100%;
      width: 70%;
    }
  }
  @media (max-width: 600px) {
    padding: 15px 20px;
    .left {
      padding: 10px 5px;
    }
  }
  @media (max-width: 440px) {
    padding: 15px 20px;
    .left {
      padding: 10px 10px;
    }
  }
`

const StyledButton = styled(Button)`
  background-color: ${({ theme }) => theme.palette.primary.main};
  background: linear-gradient(90deg, rgb(54 8 163) 0%, rgb(148 106 245) 100%);
  color: white;
  /* font-size: 1.5rem; */
  border-radius: 16px;
  line-height: 1.7;

  &:hover {
    background: linear-gradient(10deg, rgb(54 8 163) 0%, rgb(148 106 245) 100%);
  }
  @media (max-width: 360px) {
    border-radius: 12px;
  }
`

const StyledImage = styled.img`
  /* max-height: 250px; */
  /* max-height: unset; */
  max-height: 250px;

  @media (max-height: 800px) {
    max-height: 180px;
  }
  @media (max-width: 900px) {
    /* max-height: unset; */
    width: 100%;
  }
  @media (max-width: 1274px) {
    width: 100%;
    height: 100%;
  }
  filter: drop-shadow(2px 4px 20px rgba(171, 141, 241, 0.368));
`
export default PublishContent
