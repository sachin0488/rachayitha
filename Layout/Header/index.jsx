import React from 'react'
import styled from '@emotion/styled'
import { AppBar, IconButton, Toolbar, useMediaQuery } from '@mui/material'
import { NavPageLinks } from '../config.layout'

import LogoBox from './components/LogoBox'
import StyledNavButton from './components/StyledNavButton'

import MenuOpenIcon from '@mui/icons-material/MenuOpen'
import StyledNavExpandButton from './components/StyledNavExpandButton'

export const ButtonType = {
  Normal: 'Normal',
  Expand: 'Expand',
}

const NabLinkList = [
  {
    type: ButtonType.Normal,
    label: 'Home',
    path: '/',
  },
  {
    type: ButtonType.Expand,
    label: 'Admission',
    menuList: [
      {
        label: 'Fee',
        link: '/admission/fee',
      },
      {
        label: 'Exam Schedule',
        link: '/admission/exam_schedule',
      },
      {
        label: 'Facilities',
        link: '/admission/exam_schedule',
      },
      {
        label: 'Campus Tour',
        link: '/admission/campus_tour',
      },
      {
        label: 'Admission & Transport',
        link: '/admission/admission_transport',
      },
      {
        label: 'Staff Orientation',
        link: '/admission/staff_orientation',
      },
    ],
  },
  {
    type: ButtonType.Expand,
    label: 'Academics',
    menuList: [
      {
        label: 'Academic Programme',
        link: '/academic_programme',
      },
      {
        label: 'Sport & Games',
        link: '/sport_games',
      },
      {
        label: 'Health Care',
        link: '/health_care',
      },
      {
        label: 'Target',
        link: '/target',
      },
      {
        label: 'Facility & Nourishment',
        link: '/facility_nourishment',
      },
      {
        label: 'Our Efforts',
        link: '/our_efforts',
      },
      {
        label: 'Rules & Regulations',
        link: '/rules_regulations',
      },
    ],
  },
  {
    type: ButtonType.Normal,
    label: 'Gallery',
    path: '/gallery',
  },
  {
    type: ButtonType.Normal,
    label: 'Contact Us',
    path: '/contact_us',
  },
  {
    type: ButtonType.Normal,
    label: 'Contact Us',
    path: '/contact_us',
  },
  {
    type: ButtonType.Normal,
    label: 'About Us',
    path: '/about_us',
    menuList: [
      {
        label: 'Academic Programme',
        link: '/academic_programme',
      },
      {
        label: 'Sport & Games',
        link: '/sport_games',
      },
      {
        label: 'Health Care',
        link: '/health_care',
      },
      {
        label: 'Target',
        link: '/target',
      },
      {
        label: 'Facility & Nourishment',
        link: '/facility_nourishment',
      },
      {
        label: 'Our Efforts',
        link: '/our_efforts',
      },
      {
        label: 'Rules & Regulations',
        link: '/rules_regulations',
      },
    ],
  },
]
const Header = ({ handleSidebarOpen }) => {
  const isTabletXSM = useMediaQuery('(min-width:900px)')

  return (
    <>
      <AppBar
        position="fixed"
        sx={{
          boxShadow: ({ palette }) => `4px 4px 17px ${palette.primary.shadowLevel01}`,
          backdropFilter: 'blur(66px)',
          borderBottom: theme => '0px solid' + theme.palette.primary.main + '23',
          background: ({ palette }) => palette.background.paper,
        }}>
        <Toolbar>
          <LogoBox />
          <Toolbar style={{ marginLeft: 'auto', paddingInline: '0px' }}>
            {isTabletXSM && (
              <NavButtonWarper>
                {NavPageLinks.map((Item, index) => (
                  <StyledNavButton key={index} {...Item} Icon={Item.Icon} />
                ))}
              </NavButtonWarper>
            )}
          </Toolbar>
          <StyledNavExpandButton label="Expand" />
          {/* <StyledSidebarButton
            color="primary"
            onClick={handleSidebarOpen}
            edge="start"
            sx={{
              transition: '.2s ease-in-out',
            }}>
            <MenuOpenIcon style={{ fontSize: 25 }} />
          </StyledSidebarButton> */}
        </Toolbar>
      </AppBar>{' '}
    </>
  )
}

const Root = styled.div`
  display: flex;
  justify-content: space-between;
`

const NavButtonWarper = styled.div`
  display: flex;
  gap: 1px;
  margin-right: 10px;
  margin-left: 15px;
`

const StyledSidebarButton = styled(IconButton)``

export default Header
