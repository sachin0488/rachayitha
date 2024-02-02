import React from 'react'

import { BodyContainer, MainContainer, RootContainer } from '../common/styles'

import BannerSection from '../Section/BannerSection'
import InfoSection from '../Section/InfoSection'
import ProfileTabs from '../Section/ProfileTabs'
import { useUserService } from 'modules/Auth/service/User.service'

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
      </MainContainer>
    </RootContainer>
  )
}

export default UserProfilePage
