import Link from 'next/link'
import styled from '@emotion/styled'
import Avatar from '@mui/material/Avatar'
import { Button, Typography } from '@mui/material'

import { useUserService } from 'modules/Auth/service/User.service'

const ProfileButton = () => {
  const { user } = useUserService()

  return (
    <Link href={`/profile`}>
      <Root sx={{ flexGrow: 0 }}>
        <Avatar variant="rounded" alt={user?.username} src={user?.profilePic} />
        <Username>{user?.username}</Username>
      </Root>
    </Link>
  )
}

const Root = styled(Button)`
  margin-right: 10px;
  margin-left: 15px;
  margin-bottom: 15px;
  margin-top: 5px;
  width: calc(100% - 25px);
  justify-content: flex-start;
  border-radius: 13px;
  background: ${({ theme }) => theme.palette.primary.main}10;
  backdrop-filter: blur(4px);
`

const Username = styled(Typography)`
  color: ${({ theme }) => theme.palette.secondary.main};
  font-weight: 600;
  font-style: 28px;
  margin-left: 10px;
`

export default ProfileButton
