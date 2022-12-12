import styled from '@emotion/styled'
import { Box, Button, Typography } from '@mui/material'
import React from 'react'
import { laptopM, laptopS, mobileM, mobileS, tabletS } from 'styles/mediaQuery/breakPoints'

export const Wrapper = styled(Box)`
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  background-color: white;
  box-shadow: 0px 13px 11px 13px rgba(0, 0, 0, 0.2);
`

export const SubWrapper = styled(Box)`
  width: 100%;
  height: 100%;
  padding: 20px 13px;
  max-width: 1836px;
  margin-top: 70px;
  @media ${mobileS} {
    padding: 30px 15px;
  }
  @media ${mobileM} {
    padding: 30px 20px;
  }
  @media ${tabletS} {
    padding: 40px 40px;
  }
  @media ${laptopS} {
    padding: 40px 80px;
  }
  @media ${laptopM} {
    padding: 40px 106px;
  }
  display: flex;
  justify-content: start;
  flex-direction: column;
  align-items: center;
  gap: 42px;
`

export const ImgBox = styled(Box)`
  width: 100%;
  height: 295px;
  object-fit: cover;
`
export const Img = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 10px;
  @media (min-width: 700px) {
    border-radius: 0px;
  }
`
export const UserProfileLowerSection = styled(Box)`
  width: 100%;
  height: 100%;
  min-height: 320px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: -45px;
  flex-direction: column;
  @media (min-width: 1040px) {
    flex-direction: row;
  }
`

export const UserProfileLowerLeftSection = styled(Box)`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 11px;
  height: 315px;
  width: 100%;
  @media (min-width: 1040px) {
    width: 35%;
  }
  @media (min-width: 1200px) {
    width: 30%;
  }
  background-color: #f6f3ff;
  position: relative;
`

export const MudraContainer = styled(Box)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 50%;
`

export const DateContainer = styled(Box)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`

export const IndividualMudraContainer = styled(Box)`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  gap: 4px;
`

export const UserProfileLowerRightSection = styled(Box)`
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: flex-start;
  gap: 10px;
  width: 100%;
  min-height: 290px;
  margin-top: 50px;
  @media (min-width: 1040px) {
    margin-top: 10px;
    width: 65%;
    padding-left: 40px;
  }

  @media (min-width: 1200px) {
    width: 70%;
  }
`

export const EditProfileContainer = styled(Box)`
  width: 100%;
  display: flex;
  justify-content: end;
  align-items: center;
  padding-top: 10px;
  display: none;
  @media (min-width: 1040px) {
    display: block;
    display: flex;
  }
`
export const EditProfileContainerTwo = styled(Box)`
  position: absolute;
  top: 10px;
  right: 10px;
  display: block;
  @media (min-width: 600px) {
    padding-top: 10px;
  }
  @media (min-width: 1040px) {
    display: none;
  }
`
export const EditProfileButton = styled(Button)`
  padding: 6px 14px;
  border: 1px solid #5326c2;
  border-radius: 15.5px;
  color: '#5225C2';
  cursor: pointer;
  padding: 5px 10px;
  font-size: 12px;
  @media (min-width: 500px) {
    padding: 5px 10px;
    font-size: 13px;
  }
  @media (min-width: 700px) {
    padding: 6px 14px;
    font-size: 16px;
  }
  &:hover {
    background-color: #f6f3ff;
    transition-duration: 300ms;
  }
`

export const EditProfileModalWrapper = styled(Box)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 600px;
  height: 600px;
  background-color: white;
  border: 1.5px solid #5225c2;
  box-shadow: 24;
  padding: 16px;
  border-radius: 10px;
`

export const BadgesWrapper = styled(Box)`
  width: 100%;
  display: flex;
  justify-content: start;
  flex-direction: column;
  align-items: flex-start;
  gap: 23px;
`

export const BadgesContainer = styled(Box)`
  width: 100%;
  display: flex;
  justify-content: start;
  align-items: flex-start;
  gap: 32px;
  overflow-x: auto;
  &::-webkit-scrollbar {
    width: 0;
  }
  @media (min-width: 640px) {
  }
`

export const IndividualBadgeContainer = styled(Box)`
  display: flex;
  justify-content: start;
  flex-direction: column;
  align-items: center;
  gap: 3px;
  width: 70px;
  text-align: center;
`

export const UserProfileHeading = styled(Typography)`
  font-size: 17px;
  font-weight: 400;
  line-height: 16px;
  color: #5225c2;
`

export const Username = styled(Typography)`
  color: black;
  font-weight: 600;
  font-size: 18px;
  line-height: 21px;
  @media (min-width: 700px) {
    margin-top: 30px;
  }
`

export const ImgComp = styled.img`
  position: absolute;
  top: -20%;
  left: 40%;
  width: 118px;

  @media (min-width: 320px) {
    left: 30%;
  }

  @media (min-width: 350px) {
    left: 33%;
  }

  @media (min-width: 400px) {
    left: 36%;
  }

  @media (min-width: 450px) {
    left: 38%;
  }

  @media (min-width: 500px) {
    left: 40%;
    width: 118px;
  }

  @media (min-width: 700px) {
    left: 40%;
    top: -25%;
    width: 148px;
  }

  @media (min-width: 850px) {
    left: 42%;
  }

  @media (min-width: 1040px) {
    left: 33%;
  }

  @media (min-width: 1200px) {
    left: 33%;
  }

  @media (min-width: 1730px) {
    left: 36%;
  }
`
