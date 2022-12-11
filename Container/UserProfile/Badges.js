import { Typography } from '@mui/material'
import Image from 'next/image'
import React from 'react'
import { BadgesWrapper, BadgesContainer, IndividualBadgeContainer } from './UserProfileStyle'

const Badges = () => {
  const img1 = 'https://res.cloudinary.com/dk6twrko6/image/upload/v1667643985/image_41_tacpgl.png'
  const img2 = 'https://res.cloudinary.com/dk6twrko6/image/upload/v1667643985/image_39_nmadne.png'
  const img3 = 'https://res.cloudinary.com/dk6twrko6/image/upload/v1667643985/image_40_pyohgi.png'
  const img4 = 'https://res.cloudinary.com/dk6twrko6/image/upload/v1667643985/image_38_jrnfyg.png'
  const img5 = 'https://res.cloudinary.com/dk6twrko6/image/upload/v1667643985/image_37_zgzrue.png'
  const img6 = 'https://res.cloudinary.com/dk6twrko6/image/upload/v1667643986/image_36_m8llb3.png'
  return (
    <>
      <BadgesWrapper>
        <Typography style={{ fontSize: '22px', fontWeight: '500' }}>Badges</Typography>
        <BadgesContainer>
          <IndividualBadgeContainer>
            <Image width="55" height="67" src={img1} />
            <Typography style={{ fontSize: '13px', fontWeight: '400' }}>Endeavor</Typography>
          </IndividualBadgeContainer>
          <IndividualBadgeContainer>
            <Image width="55" height="67" src={img2} />
            <Typography style={{ fontSize: '13px', fontWeight: '400' }}>Such Wealth!</Typography>
          </IndividualBadgeContainer>
          <IndividualBadgeContainer>
            <Image width="55" height="67" src={img3} />
            <Typography style={{ fontSize: '13px', fontWeight: '400' }}>Cultivator</Typography>
          </IndividualBadgeContainer>
          <IndividualBadgeContainer>
            <Image width="55" height="67" src={img4} />
            <Typography style={{ fontSize: '13px', fontWeight: '400' }}>Who am I?</Typography>
          </IndividualBadgeContainer>
          <IndividualBadgeContainer>
            <Image width="55" height="67" src={img5} />
            <Typography style={{ fontSize: '13px', fontWeight: '400' }}>Author</Typography>
          </IndividualBadgeContainer>
          <IndividualBadgeContainer>
            <Image width="55" height="67" src={img6} />
            <Typography style={{ fontSize: '13px', fontWeight: '400' }}>Hardcore RTW Fan Badge</Typography>
          </IndividualBadgeContainer>
        </BadgesContainer>
      </BadgesWrapper>
    </>
  )
}

export default Badges
