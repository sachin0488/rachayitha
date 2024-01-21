import React from 'react'
import ThumbUpRoundedIcon from '@mui/icons-material/ThumbUpRounded'
import ThumbDownOffAltRoundedIcon from '@mui/icons-material/ThumbDownOffAltRounded'
import { Button } from '@mui/material'
import { useBookLikeService } from 'Container/BookDetail/services/BookLike.service'

const LikeButton = ({ bookId, isLiked, likeCount, disabled }) => {
  const { mutate } = useBookLikeService({ bookId })

  return (
    <Button
      variant="contained"
      disableRipple={disabled}
      disableElevation={disabled}
      onClick={() => (disabled ? null : mutate())}
      startIcon={Boolean(isLiked) ? <ThumbUpRoundedIcon /> : <ThumbDownOffAltRoundedIcon sx={{ rotate: '180deg' }} />}>
      {likeCount}
    </Button>
  )
}

export default LikeButton
