import React, { useCallback, useState } from 'react'
import styled from '@emotion/styled'
import { ButtonBase, useMediaQuery } from '@mui/material'
import { ButtonType, NabLinkList, NavPageLinks } from '../config.layout'

import LogoBox from './components/LogoBox'
import StyledNavButton from './components/StyledNavButton'

import MenuOpenIcon from '@mui/icons-material/MenuOpen'
import StyledNavExpandButton from './components/StyledNavExpandButton'
import MenuIcon from './components/MenuIcon'
import { useLayoutStore } from 'Layout/store'

const Header = () => {
  const isTabletXSM = useMediaQuery('(min-width:1160px)')
  const sidebar = useLayoutStore(state => state.sidebar)

  const [disableToggleButton, setDisableToggleButton] = useState(false)

  const handleToggleSidebar = useCallback(() => {
    sidebar.toggle()
    setDisableToggleButton(true)
    setTimeout(() => {
      setDisableToggleButton(false)
    }, 500)
  }, [sidebar])
  return (
    <>
      <Root>
        <LogoBox />

        {isTabletXSM ? (
          <Toolbar>
            {NabLinkList.map((item, index) =>
              item.type === ButtonType.Expand ? (
                <StyledNavExpandButton key={index} label={item.label} menuList={item.menuList} />
              ) : (
                <StyledNavButton key={index} label={item.label} link={item.link} />
              ),
            )}
          </Toolbar>
        ) : (
          <ButtonBase
            aria-label="open drawer"
            onClick={handleToggleSidebar}
            TouchRippleProps={{ sx: { color: theme => theme.palette.primary.main } }}
            sx={{
              borderRadius: '10px',
              padding: '10px',
              ml: 'auto',
              mr: 0,
              userSelect: 'none',
            }}
            disabled={disableToggleButton}
            disableRipple>
            <MenuIcon isOpen={sidebar.isOpen} />
          </ButtonBase>
        )}
      </Root>
    </>
  )
}
const Root = styled.div`
  height: var(--header-height);
  display: flex;
  align-items: center;
  gap: 10px;
  position: sticky;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  padding: 10px 16px;
  background-color: ${({ theme }) => theme.palette.background.default};
  box-shadow: 1px 3px 38px 0px #0f012f16;
`

const Toolbar = styled.div`
  display: flex;
  gap: 10px;
  margin-left: auto;
`

export default Header
