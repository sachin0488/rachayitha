import React from 'react'

import { BodyContainer, MainContainer, RootContainer } from '../common/styles'

import BannerSection from '../Section/BannerSection'
import InfoSection from '../Section/InfoSection'
import ProfileTabs from '../Section/ProfileTabs'
import { useUserService } from 'Container/Auth/service/User.service'
import EmailVerification from '../Section/EmailVerification'

const UserProfilePage = () => {
  const { isEmailVerified } = useUserService()
  return (
    <RootContainer>
      <MainContainer>
        <BannerSection />
        <BodyContainer>
          <InfoSection />
          {isEmailVerified ? <ProfileTabs /> : <EmailVerification />}
        </BodyContainer>
      </MainContainer>
    </RootContainer>
  )
}

export default UserProfilePage
