import React from 'react'
import ThumbUpRoundedIcon from '@mui/icons-material/ThumbUpRounded'
import ThumbDownOffAltRoundedIcon from '@mui/icons-material/ThumbDownOffAltRounded'
import { Button } from '@mui/material'
import { usePoemLikeService } from 'Container/PoemDetail/services/PoemLike.service'

const LikeButton = ({ poemId, isLiked, likeCount, disabled }) => {
  const { mutate } = usePoemLikeService({ poemId })

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
