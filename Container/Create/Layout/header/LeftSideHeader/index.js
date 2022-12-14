import React from 'react'
import { WrapperLeftSideSection } from '../../../CreateStyle'

import UserProfileInfo from './Components/UserProfileInfo'

import LinksContainer from './Components/LinksContainer'

const LeftSideHeader = () => {
  return (
    <>
      <WrapperLeftSideSection>
        <UserProfileInfo />
        <LinksContainer />
      </WrapperLeftSideSection>
    </>
  )
}

export default LeftSideHeader
