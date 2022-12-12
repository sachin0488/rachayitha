import React from 'react'
import { Modal, Button, Box, Typography } from '@mui/material'
import BorderColorOutlinedIcon from '@mui/icons-material/BorderColorOutlined'
import { EditProfileButton, EditProfileModalWrapper, UserProfileHeading } from '../../Common/UserProfileStyle'
import { AiFillEdit } from 'react-icons/ai'
import ModelInsideContent from './ModelInsideContent'

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
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description">
        <EditProfileModalWrapper>
          <ModelInsideContent />
        </EditProfileModalWrapper>
      </Modal>
    </>
  )
}

export default UserProfileModal
