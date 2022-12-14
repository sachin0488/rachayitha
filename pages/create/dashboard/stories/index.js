import LeftSideHeader from 'Container/Create/Layout/header/LeftSideHeader'
import React from 'react'
import { Wrapper } from '../../../../Container/Create/CreateStyle'
import DashBoardStoriesSection from '../../../../Container/Create/DashBoardSection/DashBoardStoriesSection/DashBoardStoriesSection'

const index = () => {
  return (
    <>
      <Wrapper>
        <LeftSideHeader />
        <DashBoardStoriesSection />
      </Wrapper>
    </>
  )
}

export default index
