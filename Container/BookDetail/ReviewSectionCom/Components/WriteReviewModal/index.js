import React from 'react'
import { Modal, Button, Box, Typography } from '@mui/material'
import { AiFillEdit } from 'react-icons/ai'
import { ReviewSectionAddToLibraryButton } from '../../../BookDetailStyle'
import { FaRegCommentDots } from 'react-icons/fa'
import ModalInsideContent from './Comp/ModalInsideContent'

const WriteReviewModal = () => {
  const [open, setOpen] = React.useState(false)
  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)
  return (
    <>
      <ReviewSectionAddToLibraryButton onClick={handleOpen}>
        <FaRegCommentDots size="25" />
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
