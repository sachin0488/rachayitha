import styled from '@emotion/styled'
import { useSelector } from 'react-redux'
import { IconButton, List, Drawer } from '@mui/material'
import { Toolbar, useTheme, useMediaQuery } from '@mui/material'

// import GeneralSection from './GeneralSection'

// Icons ---
import ChevronLeftRoundedIcon from '@mui/icons-material/ChevronLeftRounded'
// ---

const SideBar = ({ isSideBarOpen, handleSideBarToggle }) => {
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'))

  // const { pathname } = useLocation()
  // const { General, Settings, MapAndModules } = useSelector(navLinks)

  const DrawerProps = {
    onClose: handleSideBarToggle,
    open: isSideBarOpen,
    variant: isMobile ? 'temporary' : 'persistent',
    BackdropProps,
    sx: DrawerSx(isMobile, pathname),
  }

  return (
    <Drawer {...DrawerProps}>
      <HeaderBar {...{ isMobile, handleSideBarToggle }} />
      <Main>
        {/* <GeneralSection data={General} />
        <ModuleSection data={MapAndModules} />
        <SettingsSection data={Settings} /> */}
      </Main>
    </Drawer>
  )
}

export default SideBar

const Main = styled(List)`
  margin-top: 0;
  padding-top: 5px;
`
const navLinks = store => store.navLinks

const DrawerSx = (isMobile, pathname) => {
  return {
    width: theme => theme.mixins.drawer.width,
    flexShrink: 0,
    [`& .MuiDrawer-paper`]: {
      width: theme => theme.mixins.drawer.width,
      boxSizing: 'border-box',
      // background: pathname === '/map' ? theme => theme.palette.secondary.ultraLight : 'transparent',
      backdropFilter: isMobile ? 'blur(50px)' : 'blur(0px)',
      borderWidth: '0px',
    },
  }
}

const BackdropProps = {
  sx: {
    background: 'rgba(0,0,0,0.3)',
  },
}

const HeaderBar = ({ isMobile, handleSideBarToggle }) => {
  return (
    <Toolbar>
      {isMobile && (
        <IconButton
          color="inherit"
          sx={{ marginLeft: 'auto', marginY: '5px', marginTop: '15px' }}
          onClick={handleSideBarToggle}>
          <ChevronLeftRoundedIcon style={{ fontSize: 40 }} />
        </IconButton>
      )}
    </Toolbar>
  )
}
