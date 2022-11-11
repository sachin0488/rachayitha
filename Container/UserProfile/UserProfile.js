import React from "react";
import { Wrapper, SubWrapper } from "../Explore/ExploreStyle";
import Header from "../LandingPageAfterLogin/Header/Header";
import RedMudra from "../../public/redMudra.png";
import GreenMudra from "../../public/greenMudra.png";
import BlueMudra from "../../public/blueMudra.png";
import {
  Img,
  ImgBox,
  UserProfileLowerSection,
  UserProfileLowerLeftSection,
  MudraContainer,
  IndividualMudraContainer,
  UserProfileLowerRightSection,
  EditProfileContainer,
} from "./UserProfileStyle";
import Image from "next/image";
import { Typography } from "@mui/material";
import { FaMale } from "react-icons/fa";
import { MdDateRange } from "react-icons/md";
import { ImLocation } from "react-icons/im";
import UserProfileModal from "./UserProfileModal";
import MuiTabs from "../../Components/MuiTabs/MuiTabs";
import { UserProfileMuiTabList } from "../../hooks/useMuiTabComp";
import { UserProfileStylesTab } from "./UserProfileStylesTab";

const UserProfile = () => {
  const bannerImgUrl =
    "https://res.cloudinary.com/dk6twrko6/image/upload/v1667568486/bannerProfileImg_kdid5i.png";
  const ProfileImg =
    "https://res.cloudinary.com/dk6twrko6/image/upload/v1667568485/Ellipse_252_vypxjo.png";
  return (
    <>
      <Wrapper>
        <Header />
        <SubWrapper>
          <ImgBox>
            <Img src={bannerImgUrl} />
            <img
              src={ProfileImg}
              style={{ position: "absolute", top: "69%", left: "10%" }}
            />
          </ImgBox>
          <UserProfileLowerSection>
            <UserProfileLowerLeftSection>
              <Typography
                style={{
                  color: "black",
                  fontWeight: "500",
                  fontSize: "18px",
                  lineHeight: "21px",
                }}
              >
                Shubham Kr Kurrey
              </Typography>
              <Typography
                style={{
                  color: " #93968E",
                  fontWeight: "300",
                  fontSize: "15px",
                  lineHeight: "18px",
                }}
              >
                ID: 4300893892
              </Typography>
              <MudraContainer>
                <IndividualMudraContainer style={{ justifyContent: "start" }}>
                  <Image src={RedMudra} />
                  <Typography color="black">0</Typography>
                </IndividualMudraContainer>
                <IndividualMudraContainer style={{ justifyContent: "start" }}>
                  <Image src={GreenMudra} />
                  <Typography color="black">2</Typography>
                </IndividualMudraContainer>
                <IndividualMudraContainer style={{ justifyContent: "start" }}>
                  <Image src={BlueMudra} />
                  <Typography color="black">3</Typography>
                </IndividualMudraContainer>
              </MudraContainer>
              <Typography color="black">30 Mudra</Typography>
              <MudraContainer>
                <IndividualMudraContainer style={{ justifyContent: "center" }}>
                  <FaMale color="black" />
                  <Typography color="black">Male</Typography>
                </IndividualMudraContainer>
              </MudraContainer>
              <MudraContainer>
                <IndividualMudraContainer style={{ justifyContent: "center" }}>
                  <ImLocation color="black" />
                  <Typography color="black">28-06-2022 Joined</Typography>
                </IndividualMudraContainer>
              </MudraContainer>
            </UserProfileLowerLeftSection>
            <UserProfileLowerRightSection>
              <EditProfileContainer>
                <UserProfileModal />
              </EditProfileContainer>
              <MuiTabs
                muiTab={UserProfileMuiTabList}
                styles={UserProfileStylesTab}
              />
            </UserProfileLowerRightSection>
          </UserProfileLowerSection>
        </SubWrapper>
      </Wrapper>
    </>
  );
};

export default UserProfile;
