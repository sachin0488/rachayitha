import React from 'react'
import { SubWrapper } from '../Explore/ExploreStyle'
import RedMudra from '../../public/redMudra.png'
import GreenMudra from '../../public/greenMudra.png'
import BlueMudra from '../../public/blueMudra.png'
import {
  Wrapper,
  Img,
  ImgBox,
  UserProfileLowerSection,
  UserProfileLowerLeftSection,
  MudraContainer,
  IndividualMudraContainer,
  UserProfileLowerRightSection,
  EditProfileContainer,
  Username,
  ImgComp,
} from './UserProfileStyle'
import Image from 'next/image'
import { Typography } from '@mui/material'
import { FaMale } from 'react-icons/fa'
import { MdDateRange } from 'react-icons/md'
import { ImLocation } from 'react-icons/im'
import UserProfileModal from './UserProfileModal'
import MuiTabs from '../../Components/MuiTabs/MuiTabs'
import { UserProfileMuiTabList } from '../../hooks/useMuiTabComp'
import { UserProfileStylesTab } from './UserProfileStylesTab'
import NavLayout from '../../Components/Layouts/NavLayout'

const UserProfile = () => {
  const bannerImgUrl = 'https://res.cloudinary.com/dk6twrko6/image/upload/v1667568486/bannerProfileImg_kdid5i.png'
  const ProfileImg = 'https://res.cloudinary.com/dk6twrko6/image/upload/v1667568485/Ellipse_252_vypxjo.png'
  return (
    <>
      <NavLayout header={true}>
        <Wrapper>
          <SubWrapper>
            <ImgBox>
              <Img src={bannerImgUrl} />
              <ImgComp src={ProfileImg} />
            </ImgBox>
            <UserProfileLowerSection>
              <UserProfileLowerLeftSection>
                <Username>Shubham Kr Kurrey</Username>
                <Typography
                  style={{
                    color: ' #93968E',
                    fontWeight: '300',
                    fontSize: '15px',
                    lineHeight: '18px',
                  }}>
                  ID: 4300893892
                </Typography>
                <MudraContainer>
                  <IndividualMudraContainer style={{ justifyContent: 'start' }}>
                    <Image src={RedMudra} />
                    <Typography color="black">0</Typography>
                  </IndividualMudraContainer>
                  <IndividualMudraContainer style={{ justifyContent: 'start' }}>
                    <Image src={GreenMudra} />
                    <Typography color="black">2</Typography>
                  </IndividualMudraContainer>
                  <IndividualMudraContainer style={{ justifyContent: 'start' }}>
                    <Image src={BlueMudra} />
                    <Typography color="black">3</Typography>
                  </IndividualMudraContainer>
                </MudraContainer>
                <Typography color="black">30 Mudra</Typography>
                <MudraContainer>
                  <IndividualMudraContainer style={{ justifyContent: 'center' }}>
                    <FaMale color="black" />
                    <Typography color="black">Male</Typography>
                  </IndividualMudraContainer>
                </MudraContainer>
                <MudraContainer>
                  <IndividualMudraContainer style={{ justifyContent: 'center' }}>
                    <ImLocation color="black" />
                    <Typography color="black">28-06-2022 Joined</Typography>
                  </IndividualMudraContainer>
                </MudraContainer>
              </UserProfileLowerLeftSection>
              <UserProfileLowerRightSection>
                <EditProfileContainer>
                  <UserProfileModal />
                </EditProfileContainer>
                <MuiTabs muiTab={UserProfileMuiTabList} styles={UserProfileStylesTab} />
              </UserProfileLowerRightSection>
            </UserProfileLowerSection>
          </SubWrapper>
        </Wrapper>
      </NavLayout>
    </>
  )
}

export default UserProfile