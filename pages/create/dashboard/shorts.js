import LeftSideHeader from 'Container/Create/Layout/header/LeftSideHeader'
import React from 'react'
import { Wrapper } from '../../../Container/Create/CreateStyle'
import DashBoardShortSection from '../../../Container/Create/DashBoardSection/DashBoardShortSection/DashBoardShortSection'

const shorts = () => {
  return (
    <>
      <Wrapper>
        <LeftSideHeader />
        <DashBoardShortSection />
      </Wrapper>
    </>
  )
}

export default shorts
