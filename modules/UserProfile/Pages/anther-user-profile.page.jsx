import React from 'react'

import { BodyContainer, MainContainer, RootContainer } from '../common/styles'

import BannerSection from '../Section/BannerSection'
import ProfileTabs from '../Section/ProfileTabs'
import AnotherUserInfoSection from '../Section/AnotherUserInfoSection'
import AnotherUserProfileTabs from '../Section/AnotherUserProfileTabs'
import { useAnotherUserProfile } from '../services/AnotherUserProfile.service'
import { useRouter } from 'next/router'

const AnotherUserProfilePage = () => {
  const router = useRouter()

  const { user, isLoading } = useAnotherUserProfile({
    authorId: router?.query?.userId,
  })

  return (
    <RootContainer>
      <MainContainer>
        <BannerSection readOnly user={user} isBannerLoading={isLoading} />
        <BodyContainer>
          <AnotherUserInfoSection user={user} />
          <AnotherUserProfileTabs authorId={router?.query?.userId} />
        </BodyContainer>
      </MainContainer>
    </RootContainer>
  )
}

export default AnotherUserProfilePage


