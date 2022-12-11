import React from 'react'
import { Modal, Button, Box, Typography } from '@mui/material'
import BorderColorOutlinedIcon from '@mui/icons-material/BorderColorOutlined'
import { EditProfileButton, EditProfileModalWrapper, UserProfileHeading } from './UserProfileStyle'
import { AiFillEdit } from 'react-icons/ai'

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
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Text in a modal
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
          </Typography>
        </EditProfileModalWrapper>
      </Modal>
    </>
  )
}

export default UserProfileModal
