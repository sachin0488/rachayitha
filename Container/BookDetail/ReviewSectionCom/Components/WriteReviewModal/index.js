import React from 'react'
import { Modal, Button, Box, Typography } from '@mui/material'
import { AiFillEdit } from 'react-icons/ai'
import { ReviewSectionAddToLibraryButton } from '../../../BookDetailStyle'
import ModalInsideContent from './Comp/ModalInsideContent'
import TextsmsOutlinedIcon from '@mui/icons-material/TextsmsOutlined'

const WriteReviewModal = () => {
  const [open, setOpen] = React.useState(false)
  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)
  return (
    <>
      <ReviewSectionAddToLibraryButton onClick={handleOpen} startIcon={<TextsmsOutlinedIcon style={IconStyle} />}>
        WRITE A REVIEW
      </ReviewSectionAddToLibraryButton>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description">
        <ModalInsideContent />
      </Modal>
    </>
  )
}

export default WriteReviewModal

const IconStyle = {
  // backgroundColor: '#5b2ec7',
}
