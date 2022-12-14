import LeftSideHeader from 'Container/Create/Layout/header/LeftSideHeader'
import React from 'react'
import { Wrapper } from '../../../Container/Create/CreateStyle'
import WorkspaceSection from '../../../Container/Create/WorkspaceSection/WorkspaceSection'

const poem = () => {
  return (
    <>
      <Wrapper>
        <LeftSideHeader />
        <WorkspaceSection />
      </Wrapper>
    </>
  )
}

export default poem
