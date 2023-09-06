import styled from '@emotion/styled'
import { Button } from '@mui/material'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { useCallback } from 'react'
import KeyboardArrowRightRoundedIcon from '@mui/icons-material/KeyboardArrowRightRounded'

import ClickAwayListener from '@mui/material/ClickAwayListener'
import Grow from '@mui/material/Grow'
import Paper from '@mui/material/Paper'
import Popper from '@mui/material/Popper'
import MenuItem from '@mui/material/MenuItem'
import MenuList from '@mui/material/MenuList'

const StyledNavExpandButton = ({ label, menuList }) => {
  const [open, setOpen] = React.useState(false)
  const anchorRef = React.useRef(null)

  const router = useRouter()

  const IconStyle = {
    rotate: open ? '90deg' : '0deg',
    transition: '0.35s ease-in-out',
  }

  const handleClose = useCallback(event => {
    setOpen(false)
  }, [])

  return (
    <>
      <Root
        ref={anchorRef}
        // className={router.pathname.includes(path) && 'selected'}
        endIcon={<KeyboardArrowRightRoundedIcon style={IconStyle} />}
        onMouseEnter={() => setOpen(true)}
        onMouseLeave={handleClose}>
        {label}
      </Root>
      <Popper
        open={open}
        anchorEl={anchorRef.current}
        role={undefined}
        placement="bottom-start"
        transition
        disablePortal
        onMouseEnter={() => setOpen(true)}
        onMouseLeave={handleClose}>
        {({ TransitionProps, placement }) => (
          <Grow
            {...TransitionProps}
            style={{
              transformOrigin: placement === 'bottom-start' ? 'left top' : 'left bottom',
            }}>
            <Paper sx={{ boxShadow: ' 1px 3px 38px 0px #0f012f16' }}>
              {/* <ClickAwayListener onClickAway={handleClose}> */}
              <MenuList autoFocusItem={open} aria-labelledby="composition-button">
                {menuList.map((item, index) => (
                  <MenuItem key={index} onClick={handleClose}>
                    <Link href={item.link}>
                      <a>{item.label}</a>
                    </Link>
                  </MenuItem>
                ))}
                {/* <MenuItem onClick={handleClose}>Profile</MenuItem>
                <MenuItem onClick={handleClose}>My account</MenuItem>
                <MenuItem onClick={handleClose}>Logout</MenuItem> */}
              </MenuList>
              {/* </ClickAwayListener> */}
            </Paper>
          </Grow>
        )}
      </Popper>
    </>
  )
}

const Root = styled(Button)`
  font-weight: 500;
  font-size: 1rem;
  padding: 5px 13px;
  /* box-shadow: 3px 3px 10px -0.5px ${({ theme }) => theme.palette.primary.main}30; */
  color: ${({ theme }) => theme.palette.secondary.main};
  border-radius: 8px;
  transition: box-shadow 0.35s ease-in-out;
  text-transform: capitalize;
  letter-spacing: 0.5px;
  &:hover {
    background: ${({ theme }) => theme.palette.primary.main}01;
    color: ${({ theme }) => theme.palette.primary.main};
    /* box-shadow: 3px 3px 12px 0px ${({ theme }) => theme.palette.primary.main}59; */
  }
  .MuiButton-startIcon {
    margin-right: 4x;
    margin-left: -4px;
  }
  .MuiButton-endIcon {
    margin-right: -4px;
    margin-left: 4px;
  }
  &.selected {
    color: ${({ theme }) => theme.palette.primary.main};
  }
`

export default StyledNavExpandButton
