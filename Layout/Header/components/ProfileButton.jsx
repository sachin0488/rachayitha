import Link from 'next/link'
import styled from '@emotion/styled'
import Box from '@mui/material/Box'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import Menu from '@mui/material/Menu'
import Avatar from '@mui/material/Avatar'
import Tooltip from '@mui/material/Tooltip'
import MenuItem from '@mui/material/MenuItem'
import { useState } from 'react'

import { useUserService } from 'modules/Auth/service/User.service'
import { useLogoutService } from 'modules/Auth/service/Logout.service'
import { useCallback } from 'react'

const ProfileButton = () => {
  const [anchorElUser, setAnchorElUser] = useState(null)

  const { user } = useUserService()
  const { handleLogout } = useLogoutService()

  const handleOpenUserMenu = useCallback(event => {
    setAnchorElUser(event.currentTarget)
  }, [])

  const handleCloseUserMenu = useCallback(() => {
    setAnchorElUser(null)
  }, [])

  return (
    <Box sx={{ flexGrow: 0 }}>
      <Tooltip title="Your Profile">
        <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
          <Avatar
            alt={user?.fullName}
            src={user?.profilePic}
            sx={{
              bgcolor: user?.profilePic ? '#fff' : theme => theme.palette.primary.main,
              fontWeight: 600,
              fontSize: 70,
            }}
          />
        </IconButton>
      </Tooltip>
      <Menu
        sx={{ mt: '45px' }}
        anchorEl={anchorElUser}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        keepMounted
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        open={Boolean(anchorElUser)}
        onClose={handleCloseUserMenu}>
        <Link href={`/profile`}>
          <MenuItem onClick={handleCloseUserMenu}>
            <Typography textAlign="center">Profile</Typography>
          </MenuItem>
        </Link>

        <MenuItem onClick={handleCloseUserMenu}>
          <Typography onClick={handleLogout} textAlign="center">
            Logout
          </Typography>
        </MenuItem>
        {/* {settings.map(setting => (
          <MenuItem key={setting} onClick={handleCloseUserMenu}>
            <Typography textAlign="center">{setting}</Typography>
          </MenuItem>
        ))} */}
      </Menu>
    </Box>
  )
}

const Root = styled.div`
  color: ${({ theme }) => theme.palette.primary.main};
`

export default ProfileButton
