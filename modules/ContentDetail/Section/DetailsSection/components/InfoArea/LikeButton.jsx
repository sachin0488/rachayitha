import React, { useCallback } from 'react'
import ThumbUpRoundedIcon from '@mui/icons-material/ThumbUpRounded'
import ThumbDownOffAltRoundedIcon from '@mui/icons-material/ThumbDownOffAltRounded'
import { Button } from '@mui/material'
import { useContentLikeService } from 'modules/ContentDetail/services/ContentLike.service'
import { useUserService } from 'modules/Auth/service/User.service'
import { useSnackbar } from 'notistack'

const LikeButton = ({ contentType, contentId, isLiked, likeCount }) => {
  const { mutate } = useContentLikeService({ contentId, contentType })
  const { isLoggedIn } = useUserService()
  const { enqueueSnackbar, closeSnackbar } = useSnackbar()

  const handleLikeClick = useCallback(() => {
    if (isLoggedIn) {
      mutate()
    } else {
      closeSnackbar()
      enqueueSnackbar('Please login to like the content', { variant: 'info' })
    }
  }, [closeSnackbar, enqueueSnackbar, isLoggedIn, mutate])

  return (
    <Button
      variant="contained"
      disableElevation
      onClick={handleLikeClick}
      startIcon={Boolean(isLiked) ? <ThumbUpRoundedIcon /> : <ThumbDownOffAltRoundedIcon sx={{ rotate: '180deg' }} />}>
      {likeCount}
    </Button>
  )
}

export default LikeButton
