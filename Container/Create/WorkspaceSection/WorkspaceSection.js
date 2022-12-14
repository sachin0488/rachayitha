import React from 'react'
import { RightSideHeaderSectionWrapper, UserGuide, WrapperRightSideSection } from '../CreateStyle'
import RightSideHeader from '../Layout/header/RightSideHeader'
import WorkspaceSectionMainContent from './Components/WorkspaceSectionMainContent'

const WorkspaceSection = () => {
  return (
    <>
      <WrapperRightSideSection>
        <RightSideHeader />

        <WorkspaceSectionMainContent />
      </WrapperRightSideSection>
    </>
  )
}

export default WorkspaceSection
