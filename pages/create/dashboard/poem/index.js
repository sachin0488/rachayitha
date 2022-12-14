import LeftSideHeader from 'Container/Create/Layout/header/LeftSideHeader'
import React from 'react'
import { Wrapper } from '../../../../Container/Create/CreateStyle'
import DashBoardPoemSection from '../../../../Container/Create/DashBoardSection/DashBoardPoemSection/DashBoardPoemSection'

const index = () => {
  return (
    <>
      <Wrapper>
        <LeftSideHeader />
        <DashBoardPoemSection />
      </Wrapper>
    </>
  )
}

export default index
