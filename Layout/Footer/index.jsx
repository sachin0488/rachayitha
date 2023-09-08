import React from 'react'

import LogoBox from './components/LogoBox'
import styled from '@emotion/styled'
import { Button, Typography } from '@mui/material'
import Link from 'next/link'
import LocationOnRoundedIcon from '@mui/icons-material/LocationOnRounded'
import Map from './components/map'

const Footer = () => {
  return (
    <Root>
      <Main>
        <Section>
          <Heading variant="h5" component="div" noWrap>
            Follow us
          </Heading>
          <Description marginBottom={1}>Connect With Us on Social Media</Description>
          <SocialLinks>
            <a href="https://www.facebook.com/xaviersschoolbhiti/" target="_blank" rel="noopener noreferrer">
              <SocialIcon src="facebook.svg" />
            </a>
            <a href="https://www.youtube.com/watch?v=xMMv_gYgV2Q" target="_blank" rel="noopener noreferrer">
              <SocialIcon src="youtube.svg" />
            </a>
            <SocialIcon src="twitter.svg" />
            {/* <BsFacebook size={35} color="#673CCB" />
            <FaInstagramSquare size={35} color="#673CCB" />
            <AiFillTwitterCircle size={37} color="#673CCB" /> */}
          </SocialLinks>
          {/* <Description variant="subtitle2"></Description> */}
        </Section>
        <Divider />
        <Map />
        <Divider />
        <Section>
          <LogoBox />
          <Typography
            variant="subtitle2"
            color="secondary"
            display="flex"
            alignItems="center"
            gap="10px"
            alignSelf="center">
            <LocationOnRoundedIcon fontSize="small" />
            Bhitirawat, Sahjanwa, Gorakhpur ( U.P. ) Pin-273209
          </Typography>{' '}
        </Section>
      </Main>
    </Root>
  )
}

const Root = styled.div`
  background: ${({ theme }) => theme.palette.primary.main}18;
  display: flex;
  padding: 30px 10px;
  justify-content: center;
  margin-top: auto;
`
const SocialIcon = styled.img`
  width: 40px;
`

const Main = styled.div`
  gap: 35px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 1170px) {
    gap: 35px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }
  max-width: 1620px;
  width: 100%;
  margin-inline: 50px;
  @media (max-width: 1000px) {
    margin-inline: 30px;
  }
  @media (max-width: 435px) {
    margin-inline: 15px;
  }
  @media (max-width: 405px) {
    margin-inline: 15px;
  }
`

const Extra = styled.div`
  display: none;
  @media (min-width: 1080px) {
    display: block;
  }
`
const Section = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`

const Heading = styled(Typography)`
  font-weight: 700;
  color: ${({ theme }) => theme.palette.secondary.main};
`

const Description = styled(Typography)`
  font-weight: 600;
  color: ${({ theme }) => theme.palette.secondary.main}a5;
`

const SocialLinks = styled.div`
  display: flex;
  gap: 15px;
`

const Divider = styled.div`
  width: 100%;
  height: 2px;
  background: ${({ theme }) => theme.palette.secondary.main}30;
  margin-block: 10px;

  @media (min-width: 860px) {
    display: none;
  }
`

export default Footer
