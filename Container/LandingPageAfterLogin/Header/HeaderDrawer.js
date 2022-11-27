import styled from '@emotion/styled'
import { Box, Drawer, Typography, IconButton } from '@mui/material'
import React from 'react'
import { useState } from 'react'
import { FiMenu } from 'react-icons/fi'
import Image from 'next/image'
import ProfileImg from '../../../public/headerProfileImg.png'
import Explore from '../../../public/MenuItem1.svg'
import Ranking from '../../../public/ranking.svg'
import Create from '../../../public/create.svg'
import Library from '../../../public/library1.svg'
import Shorts from '../../../public/shorts.svg'
import Link from 'next/link'

const HeaderDrawer = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false)
  return (
    <>
      <FiMenu onClick={() => setIsDrawerOpen(true)} />

      <Drawer
        anchor="right"
        open={isDrawerOpen}
        onClose={() => {
          setIsDrawerOpen(false)
        }}>
        <DrawerWrapper>
          <ThreeDotContainer onClick={() => setIsDrawerOpen(false)} style={{ gap: '5px' }}>
            <Dots style={{ backgroundColor: '#FC5C4C' }} />
            <Dots style={{ backgroundColor: '#FEBE39' }} />
            <Dots style={{ backgroundColor: '#66e14d' }} />
          </ThreeDotContainer>
          <ThreeDotContainer style={{ gap: '15px' }}>
            {' '}
            <Image width="44" height="44" style={{ cursor: 'pointer' }} src={ProfileImg} />
            <Typography style={{ color: '#6B728E', fontSize: '29px', fontWeight: '500' }}>Utkarsh</Typography>
          </ThreeDotContainer>
          <Typography
            style={{
              color: '#6B728E',
              fontSize: '19px',
              fontWeight: '300',
              paddingLeft: '18px',
            }}>
            Menu Bar
          </Typography>
          <MenuWrapper>
            <Link href="/explore/novel?lead=male&genre=all&sub_genre=power">
              <IndividualMenuContainer onClick={() => setIsDrawerOpen(false)} style={{ gap: '10px' }}>
                <Image width="37" src={Explore} />
                <Typography
                  style={{
                    fontSize: '25px',
                    fontWeight: '500',
                  }}>
                  Explore
                </Typography>
              </IndividualMenuContainer>
            </Link>
            <Link href="/ranking/novel?lead=male&genre=power">
              <IndividualMenuContainer onClick={() => setIsDrawerOpen(false)} style={{ gap: '10px' }}>
                <Image fill="#6B728E" width="37" src={Ranking} />
                <Typography
                  style={{
                    fontSize: '25px',
                    fontWeight: '500',
                  }}>
                  Ranking
                </Typography>
              </IndividualMenuContainer>
            </Link>
            <Link href="/create">
              <IndividualMenuContainer style={{ gap: '10px' }}>
                <Image width="37" src={Create} />
                <Typography
                  style={{
                    fontSize: '25px',
                    fontWeight: '500',
                  }}>
                  Create
                </Typography>
              </IndividualMenuContainer>
            </Link>
            <IndividualMenuContainer style={{ gap: '10px' }}>
              <Image width="37" src={Library} />
              <Typography
                style={{
                  fontSize: '25px',
                  fontWeight: '500',
                }}>
                Library
              </Typography>
            </IndividualMenuContainer>
            <IndividualMenuContainer style={{ gap: '10px' }}>
              <Image width="37" src={Shorts} />
              <Typography
                style={{
                  fontSize: '25px',
                  fontWeight: '500',
                }}>
                Shorts
              </Typography>
            </IndividualMenuContainer>
          </MenuWrapper>
        </DrawerWrapper>
      </Drawer>
    </>
  )
}

export default HeaderDrawer

const DrawerWrapper = styled(Box)`
  padding: 24px;
  display: flex;
  justify-content: start;
  flex-direction: column;
  align-items: flex-start;
  gap: 32px;
  width: 300px;
  color: '#FC5C4C';
  background-color: #ffffff;
  /* height: 100vh; */
`
const MenuWrapper = styled(Box)`
  display: flex;
  flex-direction: column;
  gap: 13px;
  justify-content: start;
  align-items: flex-start;
  width: 100%;
`

const ThreeDotContainer = styled(Box)`
  width: 100%;
  height: 50px;
  padding: 2px 18px;
  display: flex;
  justify-content: start;
  align-items: center;
`
const IndividualMenuContainer = styled(Box)`
  width: 100%;
  height: 50px;
  padding: 2px 18px;
  display: flex;
  justify-content: start;
  align-items: center;
  color: #6b728e;
  cursor: pointer;
  &:hover {
    background-color: #bccef8;
    border-radius: 20px;
    opacity: 0.9;
    color: #5225c2;
    transition-duration: 500ms;
  }
`

const Dots = styled(Box)`
  width: 15px;
  height: 15px;
  border-radius: 999px;
`

const NavigationSideItems = styled(Box)``
