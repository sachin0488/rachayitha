import React, { useState } from 'react'
import {
  Avatar,
  Button,
  Typography,
  Dialog,
  DialogTitle,
  DialogContent,
  IconButton,
  Tooltip,
} from '@mui/material'
import styled from '@emotion/styled'
import Link from 'next/link'
import moment from 'moment'
import CloseIcon from '@mui/icons-material/Close'
import { useTranslation } from 'react-i18next'

import InfoField from './components/InfoField'
import StoneSection from './components/StoneSection'
import EditProfileModal from './EditProfileModal'

import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined'
import DateRangeOutlinedIcon from '@mui/icons-material/DateRangeOutlined'
import ModeEditOutlinedIcon from '@mui/icons-material/ModeEditOutlined'
// import MaleOutlinedIcon from '@mui/icons-material/MaleOutlinedIcon'
// import FemaleOutlinedIcon from '@mui/icons-material/FemaleOutlinedIcon'
// import TransgenderOutlinedIcon from '@mui/icons-material/TransgenderOutlinedIcon'
import { useUserService } from 'modules/Auth/service/User.service'
import useCurrentSubscriptionService from 'modules/Payment/services/CurrentSubscription.service'
import MaleOutlined from '@mui/icons-material/MaleOutlined'
import { FemaleOutlined } from '@mui/icons-material'
import TransgenderOutlined from '@mui/icons-material/TransgenderOutlined'

const InfoSection = () => {
  const { t } = useTranslation()
  const { user, isEmailVerified } = useUserService()
  const [isEditProfileModalOpen, setIsEditProfileModalOpen] = useState(false)
  const { validityTill, isSubscribed } = useCurrentSubscriptionService()

  const [isFollowerPopupOpen, setFollowerPopupOpen] = useState(false)
  const [isFollowingPopupOpen, setFollowingPopupOpen] = useState(false)

  const followers = [
    { name: 'Alice Smith', phone: '123-456-7890', followed: true },
    { name: 'Bob Johnson', phone: '987-654-3210', followed: false },
    { name: 'Charlie Brown', phone: '555-555-5555', followed: true },
    { name: 'David Wilson', phone: '444-444-4444', followed: false },
    { name: 'Eva Green', phone: '333-333-3333', followed: true },
  ]

  const following = [
    { name: 'Frank Miller', phone: '222-222-2222', followed: true },
    { name: 'Grace Lee', phone: '111-111-1111', followed: true },
    { name: 'Hannah White', phone: '666-666-6666', followed: true },
    { name: 'Ivy Young', phone: '777-777-7777', followed: true },
    { name: 'Jack Black', phone: '888-888-8888', followed: true },
  ]

  const genderIcon = gender => {
    return gender === 'male' ? MaleOutlined : gender === 'female' ? FemaleOutlined : TransgenderOutlined
  }

  const formatCount = count => {
    return count > 999 ? (count / 1000).toFixed(1) + 'K' : count
  }

  return (
    <Root>
      <EditProfileModal open={isEditProfileModalOpen} setOpen={setIsEditProfileModalOpen} />
      <Tooltip title={t('editYourProfile')}>
        <StyledEditButton color="primary" variant="contained" onClick={() => setIsEditProfileModalOpen(true)}>
          <ModeEditOutlinedIcon style={{ fontSize: 20 }} />
        </StyledEditButton>
      </Tooltip>
      <ImageWarper>
        <StyledProfileImage
          alt={user?.fullName}
          src={user?.profilePic}
          sx={{
            bgcolor: user?.profilePic ? '#fff' : theme => theme.palette.primary.main,
            fontSize: 84,
            fontWeight: 500,
          }}>
          {user?.fullName?.slice(0, 1)}
        </StyledProfileImage>
      </ImageWarper>
      <Main style={{ paddingBottom: isSubscribed ? '10px' : '20px' }}>
        <NameSection>
          <UsernameText variant="body2">@{user?.username}</UsernameText>
          <NameText variant="h5" component="div">
            {user?.fullName}
          </NameText>
          <BioText variant="subtitle2">{user?.bio}</BioText>
        </NameSection>

        <StoneSection redStone={0} blueStone={user?.coins?.voteToken} greenStone={0} greyStone={user?.coins?.coin} />

        <InfoField Icon={genderIcon(user?.gender?.toLocaleLowerCase())} text={t(user?.gender) || 'N/A'} />
        <InfoField
          Icon={DateRangeOutlinedIcon}
          text={`${t('birthday')} - ${user?.birthDate ? moment(user?.birthDate).format('DD/MM/YYYY') : 'N/A'}`}
        />
        <InfoField Icon={LocationOnOutlinedIcon} text={t('location')} />
        <ButtonRow sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
          <Button sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', borderRight: '1px solid grey', borderRadius:'0' }} onClick={() => setFollowerPopupOpen(true)}>
            <Value>{formatCount(user?.followers || 1200)}</Value>
            <Label>{t('followers')}</Label>
          </Button>
          <Button sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', borderRight: '1px solid grey', borderRadius:'0' }} onClick={() => setFollowingPopupOpen(true)}>
            <Value>{formatCount(user?.following || 800)}</Value>
            <Label>{t('following')}</Label>
          </Button>
          <Button sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <Value>{formatCount(user?.createdBooks || 15)}</Value>
            <Label>{t('createdBooks')}</Label>
          </Button>
        </ButtonRow>

        {isEmailVerified && (
          <NavList>
            <Row>
              <Link href="/coin-plan">
                <a>
                  <StyledButton disableElevation color="primary" variant="contained">
                    {t('buyCoins')}
                  </StyledButton>
                </a>
              </Link>
            </Row>
            <Row>
              <Link href="/subscription-plan">
                <a>
                  <StyledButton disableElevation color="secondary" variant="contained">
                    {t('subscribe')}
                  </StyledButton>
                </a>
              </Link>
              <Link href="/vote-coin-plan">
                <a>
                  <StyledButton disableElevation color="secondary" variant="contained">
                    {t('buyVoteCoins')}
                  </StyledButton>
                </a>
              </Link>
            </Row>
          </NavList>
        )}
        {isSubscribed && (
          <SubscribedFlag variant="subtitle2" component="div" color="secondary">
            {t('subscriptionValidTill')} {moment(validityTill, 'YYYY-DD-DD').format('DD/MM/YYYY')}
          </SubscribedFlag>
        )}
      </Main>

      {/* Follower Popup */}
      <Dialog open={isFollowerPopupOpen} onClose={() => setFollowerPopupOpen(false)} sx={{ maxWidth: '100%' }}>
        <DialogTitle>
          <Button variant='contained' sx={{ marginRight: 'auto' }}
            onClick={() => { setFollowerPopupOpen(false); setFollowingPopupOpen(false); }}>{t('followers')}</Button>
          <Button variant='text' sx={{ marginLeft: 'auto' }} onClick={() => { setFollowerPopupOpen(false); setFollowingPopupOpen(true); }}>{t('following')}</Button>
          <IconButton
            aria-label="close"
            onClick={() => setFollowerPopupOpen(false)}
            sx={{
              position: 'absolute',
              right: 8,
              top: 8,
            }}>
            <CloseIcon />
          </IconButton>
        </DialogTitle>
        <DialogContent dividers>
          {followers.map((follower, index) => (
            <FollowerRow key={index}>
              <Avatar sx={{ width: '3rem', height: '3rem', marginRight: '0.3rem' }} src={follower.profilePic} />
              <div>
                <Typography variant="body1" sx={{ fontWeight: 'bold' }}>{follower.name}</Typography>
                <Typography variant="body2" sx={{ color: 'dimgray' }}>{follower.phone}</Typography>
              </div>
              <FollowButton variant={follower.followed ? 'outlined' : 'contained'} sx={{ marginLeft: '4rem', height: '1.7rem' }}>
                {follower.followed ? 'Following' : 'Follow Back'}
              </FollowButton>
            </FollowerRow>
          ))}
        </DialogContent>
      </Dialog>

      <Dialog open={isFollowingPopupOpen} onClose={() => setFollowingPopupOpen(false)} sx={{ maxWidth: '100%' }}>
        <DialogTitle>
          <Button variant='text' onClick={() => { setFollowerPopupOpen(true); setFollowingPopupOpen(false); }}>{t('followers')}</Button>
          <Button variant='contained' sx={{ marginLeft: 'auto' }} onClick={() => { setFollowerPopupOpen(false); setFollowingPopupOpen(false); }}>{t('following')}</Button>
          <IconButton
            aria-label="close"
            onClick={() => setFollowingPopupOpen(false)}
            sx={{
              position: 'absolute',
              right: 8,
              top: 7,
              color: (theme) => theme.palette.grey[500],
              height: '1.5rem',
              width: '1.5rem',
            }}>
            <CloseIcon />
          </IconButton>
        </DialogTitle>
        <DialogContent dividers>
          {following.map((person, index) => (
            <FollowerRow key={index}>
              <Avatar sx={{ width: '3rem', height: '3rem', marginRight: '0.3rem' }} src={person.profilePic} />
              <div>
                <Typography variant="body1" sx={{ fontWeight: 'bold' }}>{person.name}</Typography>
                <Typography variant="body2" sx={{ color: 'dimgray' }}>{person.phone}</Typography>
              </div>
              <FollowButton variant="outlined" sx={{ marginLeft: '3rem', height: '1.7rem' }}>{t('following')}</FollowButton>
            </FollowerRow>
          ))}
        </DialogContent>
      </Dialog>
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

const StyledButton = styled(Button)`
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

const ButtonRow = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center; 
  width: 100%;
  gap: 8px;
`

const Value = styled.span`
  font-size: 24px;
  font-weight: bold;
`

const Label = styled.span`
  font-size: 16px;
`

const FollowerRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 1rem;
  padding: 0.5rem;
  border-bottom: 2px solid ${({ theme }) => theme.palette.primary.main}1a;
`

const FollowButton = styled(Button)`
  text-transform: none;
`

export default InfoSection
