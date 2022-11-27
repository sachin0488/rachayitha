import React from 'react'
import styled from '@emotion/styled'
import { Box, Typography, TextField } from '@mui/material'
import { laptop, laptopM, laptopS, mobileL, mobileM, tablet, tabletS } from '../../../styles/mediaQuery/breakPoints'

export const HeaderContent = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 10px;
  align-items: center;
  height: 110px;
  width: 100%;
  /* box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.1); */
  z-index: 100000;
  padding: 0px 15px;
  @media ${tabletS} {
    padding: 0px 30px;
  }
  @media ${tablet} {
    padding: 0px 50px;
  }
  @media ${laptopS} {
    padding: 0px 50px;
  }
  @media ${laptopM} {
    padding: 0px 70px;
  }
`
export const LogoContainer = styled.div`
  display: flex;
  justify-content: start;
  padding: 0 0px;
  align-items: center;
  width: 50%;
  cursor: pointer;
  @media ${tabletS} {
    width: 26%;
    padding: 0 10px;
  }
  @media ${laptopS} {
    width: 17%;
  }
  height: 100%;
  font-size: 40px;
  gap: 14px;
`

export const LogoTitle = styled(Typography)`
  font-size: 22px;
  color: ${props => props.theme.palette.primary.main};
  font-weight: 600;
  line-height: 25px;
  @media ${mobileM} {
    line-height: 29px;
    font-size: 25px;
  }
`
export const NavMenu = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 20px;
  width: 10%;
  font-size: 40px;
  @media ${laptop} {
    width: 30%;
  }
  @media ${laptopS} {
    width: 50%;
  }
  color: ${props => props.theme.palette.secondary.main};
`

export const MenuItems = styled.div`
  display: flex;
  justify-content: center;
  gap: 2px;
  align-items: center;
  cursor: pointer;
  display: none;
  padding: 6px 2px;
  &:hover {
    background-color: #f6f3ff;
    transition-duration: 500ms;
  }
  @media ${laptopS} {
    display: block;
    display: flex;
  }
`

export const Button = styled.button`
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  font-size: 17px;
  line-height: 20px;
  color: #2f2d5c;
  background-color: transparent;
  border: none;
  display: none;
  cursor: pointer;
  @media ${laptopS} {
    display: block;
    cursor: pointer;
  }
`

export const SearchInputDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  border-radius: 23.5px;
  border: 2px solid #5121c0;
  width: 360px;
  display: none;

  @media ${tabletS} {
    width: 360px;
    display: block;
    display: flex;
  }

  @media ${tablet} {
    width: 451px;
  }
  height: 47px;
  padding: 0px 8px;
`
export const SearchInput = styled.input`
  width: 260px;
  @media ${tabletS} {
    width: 295px;
  }
  background-color: white;
  border: none;
  outline: none;
  max-height: 35px;
  padding: 0 0px;
  font-weight: 100;
  font-size: 15px;
  line-height: 18px;
  color: black;
`
export const Img = styled.img`
  display: none;
  @media ${laptopS} {
    display: block;
  }
`
export const ImgCont = styled.div`
  display: block;
  @media ${laptopS} {
    display: none;
  }
`
