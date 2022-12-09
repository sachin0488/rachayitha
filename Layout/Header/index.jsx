import styled from '@emotion/styled'
import { AppBar, IconButton, Toolbar, useMediaQuery } from '@mui/material'
import React from 'react'
import { NavPageLinks } from '../config.layout'
import LogoBox from './components/LogoBox'
import ProfileButton from './components/ProfileButton'
import StyledNavButton from './components/StyledNavButton'
import StyledSearchBox from './components/StyledSearchBox'
import MenuOpenRoundedIcon from '@mui/icons-material/MenuOpenRounded'
import { ImgCont } from '../../Container/LandingPageAfterLogin/Header/HeaderStyle'
import HeaderDrawer from '../../Container/LandingPageAfterLogin/Header/HeaderDrawer'

const Header = () => {
  //   const [isSideBarOpen, setIsSideBarOpen] = useState(second)
  const isTabletXSM = useMediaQuery('(min-width:900px)')

  return (
    <>
      <AppBar
        position="fixed"
        sx={{
          zIndex: theme => ({
            sm: theme.zIndex.drawer + 1,
          }),
          boxShadow: '4px 4px 17px #864dff1f',
          backdropFilter: 'blur(66px)',

          // backdropFilter: 'blur(0px)',
          borderBottom: theme => '0px solid' + theme.palette.primary.main + '23',
          // borderBottom: theme => '2px solid' + theme.palette.primary.main + '23',
          background: '#ffffffd9',
        }}>
        <Toolbar>
          <LogoBox />
          <Toolbar style={{ marginLeft: 'auto', paddingInline: '0px' }}>
            <StyledSearchBox />
            {isTabletXSM && (
              <NavButtonWarper>
                {NavPageLinks.map((Item, index) => (
                  <StyledNavButton key={index} {...Item} Icon={Item.Icon} />
                ))}
              </NavButtonWarper>
            )}
            {/* <ProfileButton /> */}
          </Toolbar>
          {isTabletXSM ? (
            <ProfileButton />
          ) : (
            <ImgCont>
              <HeaderDrawer />
            </ImgCont>
          )}
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
