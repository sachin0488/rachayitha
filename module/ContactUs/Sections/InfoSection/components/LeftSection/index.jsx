import styled from '@emotion/styled'
import Link from 'next/link'
import React from 'react'
import { ButtonContainer, Heading, ParagraphText, SubHeading, TextSection } from './styles'
import ArrowRightAltRoundedIcon from '@mui/icons-material/ArrowRightAltRounded'
import { Button, Typography } from '@mui/material'
import LocalPhoneRoundedIcon from '@mui/icons-material/LocalPhoneRounded'
import EmailRoundedIcon from '@mui/icons-material/EmailRounded'
import MobileScreenShareRoundedIcon from '@mui/icons-material/MobileScreenShareRounded'
import LocationOnRoundedIcon from '@mui/icons-material/LocationOnRounded'

const LeftSection = () => {
  return (
    <Root>
      <Typography variant="h3" fontWeight={600} color="secondary">{`Contact Us`}</Typography>
      <Typography variant="h4" color="primary">{`In our working hours`}</Typography>
      <Typography>{`We'd love to hear from you. Send us a message and we'll respond as soon as possible.`}</Typography>

      <Typography variant="subtitle2" color="secondary" display="flex" alignItems="center" gap="10px" marginBottom={2.5}>
        <MobileScreenShareRoundedIcon fontSize="small" /> 0551-6815126
      </Typography>

      <Typography variant="subtitle2" color="secondary" display="flex" alignItems="center" gap="10px" marginBottom={2.5}>
        <LocalPhoneRoundedIcon fontSize="small" />+ (91) 9919019198, 9415990223
      </Typography>

      <Typography variant="subtitle2" color="secondary" display="flex" alignItems="center" gap="10px" marginBottom={2.5}>
        <EmailRoundedIcon fontSize="small" />
        xaviersschool@gmail.com
      </Typography>

      <Typography variant="subtitle2" color="secondary" display="flex" alignItems="center" gap="10px" marginBottom={2.5}>
        <LocationOnRoundedIcon fontSize="small" />
        Bhitirawat, Sahjanwa, Gorakhpur ( U.P. ) Pin-273209
      </Typography>
    </Root>
  )
}

const Root = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-self: center;
  justify-content: center;

  align-items: start;
  gap: 23px;
  width: 45%;
  padding-left: var(--main-side-spacing);
  @media (max-width: 950px) {
    width: 100%;
  }
`
const StyledButton = styled(Button)`
  &.Mui-disabled {
    color: ${({ theme }) => theme.palette.secondary.main};
  }
  text-align: left;
`
export default LeftSection
