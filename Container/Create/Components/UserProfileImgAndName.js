import React from 'react'
import { UserProfileImgNameWrapper, ImgComp } from '../CreateStyle'
import { Username } from '../../UserProfile/Common/UserProfileStyle'

const UserProfileImgAndName = () => {
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

export default UserProfileImgAndName
