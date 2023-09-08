import styled from '@emotion/styled'
import StyledNavButton from './components/StyledNavButton'

import { useMemo } from 'react'
import { motion } from 'framer-motion'
import { ButtonType, NabLinkList, NavPageLinks } from 'Layout/config.layout'
import { useLayoutStore } from 'Layout/store'
import { useMediaQuery, useTheme } from '@mui/material'
import StyledNavExpandButton from './components/StyledNavExpandButton'

const SideBar = () => {
  const theme = useTheme()
  const isMobile = useMediaQuery('(max-width: 750px)')
  const isSidebarOpen = useLayoutStore(state => state.sidebar.isOpen)

  const variants = useMemo(
    () => ({
      open: {
        width: theme.mixins.drawer.width,
      },
      closed: {
        width: theme.mixins.drawer.width,
      },
    }),
    [theme.mixins.drawer.width],
  )

  return (
    <Main animate={isSidebarOpen ? 'open' : 'closed'} variants={variants}>
      {NabLinkList.map((item, index) =>
        item.type === ButtonType.Expand ? (
          <StyledNavExpandButton key={index} label={item.label} menuList={item.menuList} />
        ) : (
          <StyledNavButton key={index} label={item.label} link={item.link} />
        ),
      )}
    </Main>
  )
}

export default SideBar

const Main = styled(motion.div)`
  display: flex;
  justify-content: start;
  flex-direction: column;
  gap: 15px;
  padding: 15px 15px;
  /* padding-top: 100px; */
  position: absolute;
  right: 0;
  overflow: auto;
  height: 100vh;
`
