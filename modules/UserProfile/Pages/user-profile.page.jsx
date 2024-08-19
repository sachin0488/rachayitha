import React from 'react'
import { useTranslation } from 'react-i18next'
import { BodyContainer, MainContainer, RootContainer } from '../common/styles'
import BannerSection from '../Section/BannerSection'
import InfoSection from '../Section/InfoSection'
import ProfileTabs from '../Section/ProfileTabs'
import { useUserService } from 'modules/Auth/service/User.service'
import styled from '@emotion/styled'
import { Button, Typography } from '@mui/material'
import Link from 'next/link'

const UserProfilePage = () => {
  const { t } = useTranslation()
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
            {t('userProfilePage.deleteAccountMessage')}
          </Typography>
          <Link href="/delete-account" passHref>
            <Button
              sx={{
                opacity: 0.5,
              }}
              variant="outlined"
              color="inherit"
              disableElevation>
              {t('userProfilePage.deleteAccountButton')}
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

export default UserProfilePage;;
