import Link from 'next/link'
import styled from '@emotion/styled'
import Box from '@mui/material/Box'
import IconButton from '@mui/material/IconButton'
import Avatar from '@mui/material/Avatar'
import Tooltip from '@mui/material/Tooltip'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
import Typography from '@mui/material/Typography'
import { useState, useCallback } from 'react'
import { useUserService } from 'modules/Auth/service/User.service'
import { useLogoutService } from 'modules/Auth/service/Logout.service'
import { useTranslation } from 'react-i18next'

const ProfileButton = () => {
  const [anchorElUser, setAnchorElUser] = useState(null)
  const { t } = useTranslation()
  
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
      <Tooltip title={t('your_profile')}>
        <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
          <Avatar
            variant="rounded"
            alt={user?.fullName}
            src={user?.profilePic}
            sx={{ bgcolor: user?.profilePic ? '#fff' : theme => theme.palette.primary.main, fontSize: 21, fontWeight: 500 }}>
            {user?.fullName?.slice(0, 1)}
          </Avatar>
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
        <Link href={`/profile`} passHref>
          <MenuItem onClick={handleCloseUserMenu}>
            <Typography textAlign="center">{t('profile')}</Typography>
          </MenuItem>
        </Link>
        <MenuItem onClick={handleCloseUserMenu}>
          <Typography onClick={handleLogout} textAlign="center">
            {t('logout')}
          </Typography>
        </MenuItem>
      </Menu>
    </Box>
  )
}

const Root = styled.div`
  color: ${({ theme }) => theme.palette.primary.main};
`

export default ProfileButton
