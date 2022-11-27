import React from 'react'
import { MenuItems } from './HeaderStyle'
import ProfileImg from '../../../public/headerProfileImg.png'
import Image from 'next/image'
import { Button, Divider, Menu, MenuItem } from '@mui/material'
import { useState } from 'react'
import Link from 'next/link'
import { useLogoutUserAPI } from '../../Auth/api/auth.hook'
import { useRouter } from 'next/router'
const HeaderMenuMui = () => {
  const router = useRouter()
  const { handleLogoutUser } = useLogoutUserAPI()
  const [anchorEl, setAnchorEl] = useState(null)
  const open = Boolean(anchorEl)
  const handleClick = event => {
    setAnchorEl(event.currentTarget)
  }
  const handleClose = () => {
    setAnchorEl(null)
  }
  return (
    <>
      <MenuItems
        id="profile-button"
        onClick={handleClick}
        aria-controls={open ? 'profile-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? true : undefined}>
        <Image src={ProfileImg} />
      </MenuItems>
      <Menu
        id="Profile-menu"
        anchorEl={anchorEl}
        open={open}
        MenuListProps={{ 'aria-labelledby': 'resources-button' }}
        onClose={handleClose}>
        <Link href={`/profile/1`}>
          <MenuItem onClick={handleClose}>
            <Button>Profile</Button>
          </MenuItem>
        </Link>

        <MenuItem onClick={handleClose}>
          <Button
            sx={{ color: 'red' }}
            onClick={() => {
              handleLogoutUser()
            }}>
            Signout
          </Button>
        </MenuItem>
      </Menu>
    </>
  )
}

export default HeaderMenuMui
