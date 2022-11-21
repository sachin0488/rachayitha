import React from 'react'
import { WrapperRightSideSection } from '../../CreateStyle'
import FirstFiction from '../../Components/FirstFiction'
import DashBoard from '../DashBoardSection'

const DashBoardPoemSection = () => {
  return (
    <>
      <WrapperRightSideSection>
        <DashBoard />
        <FirstFiction link="poem/create_new" />
      </WrapperRightSideSection>
    </>
  )
}

export default DashBoardPoemSection
