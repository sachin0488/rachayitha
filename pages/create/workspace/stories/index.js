import LeftSideHeader from 'Container/Create/Layout/header/LeftSideHeader'
import React from 'react'
import { Wrapper } from '../../../../Container/Create/CreateStyle'
import WorkspaceSection from '../../../../Container/Create/WorkspaceSection/WorkspaceSection'

const index = () => {
  return (
    <>
      <Wrapper>
        <LeftSideHeader />
        <WorkspaceSection />
      </Wrapper>
    </>
  )
}

export default index
