import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { Avatar, Button, Tooltip, Typography } from '@mui/material'
import styled from '@emotion/styled'
import Link from 'next/link'
import moment from 'moment'

import InfoField from './components/InfoField'
import StoneSection from './components/StoneSection'
import EditProfileModal from './EditProfileModal'

import { selectUser } from 'store/slices/global/user.slice'

import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined'
import DateRangeOutlinedIcon from '@mui/icons-material/DateRangeOutlined'
import ModeEditOutlinedIcon from '@mui/icons-material/ModeEditOutlined'
import MaleOutlinedIcon from '@mui/icons-material/MaleOutlined'
import FemaleOutlinedIcon from '@mui/icons-material/FemaleOutlined'
import TransgenderOutlinedIcon from '@mui/icons-material/TransgenderOutlined'

const InfoSection = () => {
  const { data } = useSelector(selectUser)
  const [isEditProfileModalOpen, setIsEditProfileModalOpen] = useState(false)

  const genderIcon = gender => {
    return gender === 'male' ? MaleOutlinedIcon : gender === 'female' ? FemaleOutlinedIcon : TransgenderOutlinedIcon
  }

  return (
    <Root>
      <EditProfileModal open={isEditProfileModalOpen} setOpen={setIsEditProfileModalOpen} />
      <Tooltip title="Updated Your Profile!">
        <StyledEditButton color="primary" variant="contained" onClick={() => setIsEditProfileModalOpen(true)}>
          <ModeEditOutlinedIcon style={{ fontSize: 20 }} />
        </StyledEditButton>
      </Tooltip>
      <ImageWarper>
        <StyledProfileImage
          alt={data?.full_name}
          src={data?.profile_pic}
          sx={{ bgcolor: data?.profile_pic ? '#fff' : theme => theme.palette.primary.main, fontSize: 70 }}>
          {data?.full_name?.slice(0, 1)}
        </StyledProfileImage>
      </ImageWarper>
      <Main>
        <NameSection>
          <NameText variant="h5" component="div">
            {data?.full_name}
          </NameText>
          <UsernameText variant="body2">@{data?.username}</UsernameText>
          <BioText variant="subtitle2">{data?.bio}</BioText>
        </NameSection>

        <StoneSection redStone={0} blueStone={data?.coins?.votetoken} greenStone={0} greyStone={data?.coins?.coin} />

        <InfoField Icon={genderIcon(data?.gender?.toLocaleLowerCase())} text={data?.gender || 'N/A'} />
        <InfoField
          Icon={DateRangeOutlinedIcon}
          text={`birthday - ${data?.birth_date ? moment(data?.birth_date).format('DD/MM/YYYY') : 'N/A'}`}
        />
        <InfoField Icon={LocationOnOutlinedIcon} text="India" />
        <NavList>
          <Link href="/coin-plan">
            <a>
              <StyledAddCoinButton color="primary" variant="contained">
                Buy coin
              </StyledAddCoinButton>
            </a>
          </Link>
          <Link href="/subscription-plan">
            <a>
              <StyledSubscribeButton color="secondary" variant="contained">
                Subscribe
              </StyledSubscribeButton>
            </a>
          </Link>
        </NavList>
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
  min-width: 252px;
  @media (max-width: 730px) {
    min-width: unset;
    width: 100%;
  }
`
const StyledEditButton = styled(Button)`
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
  position: absolute;
  top: 0px;
  right: 0px;
  border-top-right-radius: 15px;
  border-bottom-left-radius: 15px;
  border-top-left-radius: 0px;
  border-bottom-right-radius: 0px;
  z-index: 10;
  padding: 0px;
  min-width: 40px;
  min-height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
`
const NavList = styled.div`
  display: flex;
  gap: 10px;
  margin-top: 10px;
`
const StyledAddCoinButton = styled(Button)`
  white-space: nowrap;
  flex: 1;
`

const StyledSubscribeButton = styled(Button)`
  white-space: nowrap;
  flex: 1;
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

const StyledProfileImage = styled(Avatar)`
  width: auto;
  height: 100%;
`

const Main = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: column;
  gap: 12px;
  padding-top: 85px;
  padding-left: 20px;
  padding-right: 20px;
  padding-bottom: 20px;
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

const BioText = styled(Typography)`
  font-weight: 500;
  color: ${({ theme }) => theme.palette.secondary.main}f1;
  margin-top: 5px;
`

export default InfoSection
