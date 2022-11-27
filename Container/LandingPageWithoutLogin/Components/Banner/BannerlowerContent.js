import React from 'react'
import Image from 'next/image'
import MaleLead from '../../../../public/MaleLead.png'
import FemaleLead from '../../../../public/FemaleLead.svg'

import {
  SubHeading,
  Heading,
  LeftSideContent,
  RightSideContent,
  LowerCardContent,
  LowerSubCardContent,
  GenderLeadBox,
} from './BannerStyle'

const BannerlowerContent = ({ heading, subHeading, img }) => {
  return (
    <>
      <LeftSideContent>
        <Heading>{heading}</Heading>
        <SubHeading>{subHeading}</SubHeading>
      </LeftSideContent>
      <RightSideContent>
        <LowerCardContent>
          <LowerSubCardContent>
            <Image src={MaleLead} sx={{ width: '49%', height: '100%' }} />
            <GenderLeadBox sx={{ color: '#8049FF', borderColor: '#8049FF' }}>Male Lead</GenderLeadBox>
          </LowerSubCardContent>
          <LowerSubCardContent>
            <Image src={FemaleLead} sx={{ width: '49%', height: '100%' }} />
            <GenderLeadBox sx={{ color: '#F450AE', borderColor: '#F450AE' }}>Male Lead</GenderLeadBox>
          </LowerSubCardContent>
        </LowerCardContent>
      </RightSideContent>
    </>
  )
}

export default BannerlowerContent
