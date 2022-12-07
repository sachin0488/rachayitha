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
  LeadImage,
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
            <LeadImage>
              <Image src={MaleLead} layout="fill" alt="maleLead" />
            </LeadImage>
            <GenderLeadBox sx={{ color: '#8049FF', borderColor: '#8049FF' }}>Male Lead</GenderLeadBox>
          </LowerSubCardContent>
          <LowerSubCardContent>
            <LeadImage>
              <Image src={FemaleLead} layout="fill" alt="femaleLead" />
            </LeadImage>

            <GenderLeadBox sx={{ color: '#F450AE', borderColor: '#F450AE' }}>Male Lead</GenderLeadBox>
          </LowerSubCardContent>
        </LowerCardContent>
      </RightSideContent>
    </>
  )
}

export default BannerlowerContent
