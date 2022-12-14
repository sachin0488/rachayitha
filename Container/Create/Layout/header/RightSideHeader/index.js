import Link from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'

import {
  IndividualLinkText,
  RightSideHeaderSectionWrapper,
  RightSideHeaderSubSectionWrapper,
  SubSectionIndividualLinkText,
  UserGuide,
} from '../../../CreateStyle'

const RightSideHeader = ({}) => {
  const router = useRouter()
  const section = router.pathname.split('/')[2]
  const sectionName = section.charAt(0).toUpperCase() + section.slice(1)

  return (
    <>
      <RightSideHeaderSectionWrapper>
        <RightSideHeaderSubSectionWrapper>
          <IndividualLinkText>{sectionName}</IndividualLinkText>
          <Link href={`/create/${section}/stories`}>
            <SubSectionIndividualLinkText
              className={router.pathname == `/create/${section}/stories` ? 'subsection' : ''}>
              Stories
            </SubSectionIndividualLinkText>
          </Link>
          <Link href={`/create/${section}/poem`}>
            <SubSectionIndividualLinkText
              className={
                router.pathname == `/create/${section}/poem` || router.pathname == `/create/${section}/poem/create_new`
                  ? 'subsection'
                  : ''
              }>
              Poems
            </SubSectionIndividualLinkText>
          </Link>
          <Link href={`/create/${section}/shorts`}>
            <SubSectionIndividualLinkText
              className={router.pathname == `/create/${section}/shorts` ? 'subsection' : ''}>
              Shorts
            </SubSectionIndividualLinkText>
          </Link>
        </RightSideHeaderSubSectionWrapper>
        {section === 'dashboard' ? <UserGuide>USER GUIDE</UserGuide> : <UserGuide>Create</UserGuide>}
      </RightSideHeaderSectionWrapper>
    </>
  )
}

export default RightSideHeader
