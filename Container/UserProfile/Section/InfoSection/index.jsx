import styled from '@emotion/styled'
import { Typography } from '@mui/material'
import moment from 'moment'
import React from 'react'
import Man4OutlinedIcon from '@mui/icons-material/Man4Outlined'
import Woman2OutlinedIcon from '@mui/icons-material/Woman2Outlined'
import DateRangeOutlinedIcon from '@mui/icons-material/DateRangeOutlined'
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined'
import TollOutlinedIcon from '@mui/icons-material/TollOutlined'
import { blue, green, grey, red } from '@mui/material/colors'
import InfoField from './components/InfoField'
import StoneSection from './components/StoneSection'

export const ProfileImg =
  'https://images.unsplash.com/photo-1529665253569-6d01c0eaf7b6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8cHJvZmlsZXxlbnwwfHwwfHw%3D&w=1000&q=80'

const InfoSection = () => {
  return (
    <Root>
      <ImageWarper>
        <StyledProfileImage src={ProfileImg} />
      </ImageWarper>
      <Main>
        <NameSection>
          <NameText variant="h5">Shubham Kr Kurrey</NameText>
          <UsernameText variant="body2">@someone</UsernameText>
        </NameSection>

        <StoneSection redStone={2} blueStone={2} greenStone={2} greyStone={2} />

        <InfoField Icon={Man4OutlinedIcon} text="Male" />
        <InfoField Icon={DateRangeOutlinedIcon} text={`${moment().format('DD/MM/YYYY')} Joined`} />
        <InfoField Icon={LocationOnOutlinedIcon} text="India" />
      </Main>
    </Root>
  )
}

const Root = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;

  margin-top: 20px;
  @media (max-width: 730px) {
    width: 100%;
  }
`

const ImageWarper = styled.div`
  position: absolute;
  width: 150px;
  height: 150px;
  top: -75px;
  object-fit: cover;
  border-radius: 50%;
  overflow: hidden;
  background: ${({ theme }) => theme.palette.primary.main}aa;
  box-shadow: 3px 3px 27px 1px rgba(98, 0, 255, 0.2);
`

const StyledProfileImage = styled.img`
  width: auto;
  height: 100%;
`

const Main = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: column;
  gap: 12px;
  padding-top: 95px;
  padding-left: 30px;
  padding-right: 30px;
  padding-bottom: 30px;
  border-radius: 15px;
  border: 2px solid ${({ theme }) => theme.palette.primary.main}1a;
  @media (max-width: 730px) {
    border: none;
    background: transparent;
    width: 100%;
    padding-left: 20px;
    padding-right: 20px;
    padding-bottom: 20px;
  }
`

const NameSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0px;
`

const NameText = styled(Typography)`
  font-weight: 600;
  color: ${({ theme }) => theme.palette.secondary.main};
`

const UsernameText = styled(Typography)`
  font-weight: 600;
  color: ${({ theme }) => theme.palette.secondary.main};
`

export default InfoSection
