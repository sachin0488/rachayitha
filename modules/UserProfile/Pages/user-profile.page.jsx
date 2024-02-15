import React from 'react'

import { BodyContainer, MainContainer, RootContainer } from '../common/styles'

import BannerSection from '../Section/BannerSection'
import InfoSection from '../Section/InfoSection'
import ProfileTabs from '../Section/ProfileTabs'
import { useUserService } from 'modules/Auth/service/User.service'
import styled from '@emotion/styled'
import { Button, Typography } from '@mui/material'
import Link from 'next/link'

const UserProfilePage = () => {
  const { user, isLoading: isBannerLoading } = useUserService()
  return (
    <RootContainer>
      <MainContainer>
        <BannerSection user={user} isBannerLoading={isBannerLoading} />
        <BodyContainer>
          <InfoSection />
          <ProfileTabs />
        </BodyContainer>
        <DeleteAccountSection>
          <Typography textAlign="center" variant="subtitle1" color="secondary">
            If you want to delete your account, please click the button below.
          </Typography>

          <Link href="/delete-account">
            <Button
              sx={{
                opacity: 0.5,
              }}
              variant="outlined"
              color="inherit"
              disableElevation>
              I want to Delete my Account
            </Button>
          </Link>
        </DeleteAccountSection>
      </MainContainer>
    </RootContainer>
  )
}

const DeleteAccountSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  margin-top: 6rem;
  padding: 1rem;
  border: 1px solid ${({ theme }) => theme.palette.primary.main}1a;
  border-radius: 12px;
  margin-inline: 1rem;
  max-width: 1240px;
  align-self: center;
`

export default UserProfilePage
