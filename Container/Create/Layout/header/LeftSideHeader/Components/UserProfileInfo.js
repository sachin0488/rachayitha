import styled from '@emotion/styled'
import { Typography } from '@mui/material'
import React from 'react'
import { UserProfileImgNameWrapper, ImgComp } from '../../../../CreateStyle'

const UserProfileInfo = () => {
  const ProfileImg = 'https://res.cloudinary.com/dk6twrko6/image/upload/v1667568485/Ellipse_252_vypxjo.png'
  return (
    <>
      <UserProfileImgNameWrapper>
        <ImgComp src={ProfileImg} />
        <Username>Utkarsh Kumar Singh</Username>
      </UserProfileImgNameWrapper>
    </>
  )
}

export default UserProfileInfo

export const Username = styled(Typography)`
  color: black;
  font-weight: 600;
  font-size: 18px;
  line-height: 21px;
  @media (min-width: 700px) {
    margin-top: 30px;
  }
`
