import React from 'react'
import { Avatar, Button, Typography } from '@mui/material'
import styled from '@emotion/styled'

import InfoField from './components/InfoField'

import MaleOutlinedIcon from '@mui/icons-material/MaleOutlined'
import FemaleOutlinedIcon from '@mui/icons-material/FemaleOutlined'
import TransgenderOutlinedIcon from '@mui/icons-material/TransgenderOutlined'
import ShareLocationRoundedIcon from '@mui/icons-material/ShareLocationRounded'

const AnotherUserInfoSection = ({ user }) => {
  const genderIcon = gender => {
    return gender === 'male' ? MaleOutlinedIcon : gender === 'female' ? FemaleOutlinedIcon : TransgenderOutlinedIcon
  }

  return (
    <Root>
      <ImageWarper>
        <StyledProfileImage
          alt={user?.fullName}
          src={user?.profilePic}
          sx={{ bgcolor: user?.profilePic ? '#fff' : theme => theme.palette.primary.main, fontSize: 70 }}>
          {user?.fullName?.slice(0, 1)}
        </StyledProfileImage>
      </ImageWarper>
      <Main
        style={{
          paddingBottom: '20px',
        }}>
        <NameSection>
          <UsernameText variant="body2">@{user?.username}</UsernameText>
          <NameText variant="h5" component="div">
            {user?.fullName}
          </NameText>
          <BioText variant="subtitle2">{user?.bio}</BioText>
        </NameSection>
        <hr />
        <Row>
          <InfoField Icon={genderIcon(user?.gender?.toLocaleLowerCase())} text={user?.gender || 'N/A'} />

          <InfoField Icon={ShareLocationRoundedIcon} text="India" />
        </Row>
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
  min-width: 280px;
  @media (max-width: 730px) {
    min-width: unset;
    width: 100%;
  }
`
const Row = styled.div`
  display: flex;
  gap: 10px;
  a {
    flex: 1;
    display: flex;
  }
  width: 100%;
`
const SubscribedFlag = styled(Typography)`
  position: relative;
  top: 10px;
  left: -20px;
  right: 0px;
  width: calc(100% + 40px);
  padding: 7px 12px;
  background: ${({ theme }) => theme.palette.primary.main}1a;
  font-size: 0.75rem;
  border-bottom-left-radius: 13px;
  border-bottom-right-radius: 13px;
  @media (max-width: 730px) {
    left: 0px;
    width: 100%;
    border-radius: 8px;
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
  flex-direction: column;
  gap: 10px;
  margin-top: 10px;
  width: 100%;
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
  box-shadow: 3px 3px 27px 1px rgba(54, 18, 77, 0.2);
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
  padding-bottom: 10px;
  border-radius: 15px;
  border: 1px solid ${({ theme }) => theme.palette.primary.main}1a;
  @media (max-width: 730px) {
    border: none;
    background: transparent;
    width: 100%;
    padding-left: 0px;
    padding-right: 0px;
    padding-bottom: 20px;
  }
  hr {
    border: none;
    border-top: 1px solid ${({ theme }) => theme.palette.primary.main}1a;
    width: 100%;
    margin: 0px;
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

export default AnotherUserInfoSection
