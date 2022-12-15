import React from 'react'
import { Modal } from '@mui/material'
import { EditProfileButton, EditProfileModalWrapper } from '../../Common/UserProfileStyle'
import BorderColorOutlinedIcon from '@mui/icons-material/BorderColorOutlined'
import ModelInsideContent from './ModelInsideContent'
import { StyledModal } from 'components/StyledModal'
import styled from '@emotion/styled'

const UserProfileModal = () => {
  const [open, setOpen] = React.useState(false)
  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)
  return (
    <>
      <EditProfileButton
        startIcon={
          <BorderColorOutlinedIcon
            style={{
              fontSize: '18px',
            }}
          />
        }
        onClick={handleOpen}>
        Edit Profile
      </EditProfileButton>
      <Root
        disableHeader
        customBarackPoint={480}
        open={open}
        handleClose={handleClose}
        maxWidth="40rem"
        maxHeight="fit-content">
        <Main>
          <ModelInsideContent />
        </Main>
      </Root>
    </>
  )
}

const Root = styled(StyledModal)`
  display: flex;
  flex-direction: column;
  width: 100%;
`
const Main = styled.main`
  display: grid;
  grid-template-rows: auto;
  grid-template-columns: 1fr;
  grid-gap: 10px;
  width: 100%;
`

export default UserProfileModal
