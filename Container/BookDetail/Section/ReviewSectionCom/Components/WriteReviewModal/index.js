import React from 'react'
import { Modal, Button, Box, Typography } from '@mui/material'
import { AiFillEdit } from 'react-icons/ai'
import { ReviewSectionAddToLibraryButton } from '../../../../Common/BookDetailStyle'
import ModalInsideContent from './Comp/ModalInsideContent'
import TextsmsOutlinedIcon from '@mui/icons-material/TextsmsOutlined'
import { useBookComment } from 'Container/BookDetail/api/bookDetail.hook'
import { useRouter } from 'next/router'

const WriteReviewModal = ({ comment, id }) => {
  const [open, setOpen] = React.useState(false)
  const router = useRouter()
  const { refetch } = useBookComment(router.query.book)
  const handleOpen = () => {
    setOpen(true)
    refetch()
  }
  const handleClose = () => setOpen(false)

  return (
    <>
      {comment ? (
        <ReviewSectionAddToLibraryButton
          variant="contained"
          onClick={handleOpen}
          startIcon={<TextsmsOutlinedIcon style={IconStyle} />}>
          WRITE A REVIEW
        </ReviewSectionAddToLibraryButton>
      ) : (
        <Button variant="filled" onClick={handleOpen}>
          Reply
        </Button>
      )}

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description">
        <ModalInsideContent setOpen={setOpen} comment={false} id={id} />
      </Modal>
    </>
  )
}

export default WriteReviewModal

const IconStyle = {
  // backgroundColor: '#5b2ec7',
}
