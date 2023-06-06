import React from 'react'
import ThumbUpRoundedIcon from '@mui/icons-material/ThumbUpRounded'
import ThumbDownOffAltRoundedIcon from '@mui/icons-material/ThumbDownOffAltRounded'
import { Button } from '@mui/material'
import { useBookLikeService } from 'Container/BookDetail/services/NovelLike.service'

const LikeButton = ({ bookId, isLiked, likeCount }) => {
  const { mutate } = useBookLikeService({ bookId })

  return (
    <Button
      variant="contained"
      onClick={mutate}
      startIcon={Boolean(isLiked) ? <ThumbUpRoundedIcon /> : <ThumbDownOffAltRoundedIcon sx={{ rotate: '180deg' }} />}>
      {likeCount}
    </Button>
  )
}

export default LikeButton
