import React, { useState } from 'react'
import styled from '@emotion/styled'

import { Avatar, Button, Rating, Typography } from '@mui/material'

import StarIcon from '@mui/icons-material/Star'
import ThumbUpRoundedIcon from '@mui/icons-material/ThumbUpRounded'
import ThumbDownOffAltRoundedIcon from '@mui/icons-material/ThumbDownOffAltRounded'
import CommentBankRoundedIcon from '@mui/icons-material/CommentBankRounded'
import KeyboardArrowUpRoundedIcon from '@mui/icons-material/KeyboardArrowUpRounded'
import ReplySection from './ReplySection'
import { useCommentLikeService } from 'modules/PoemDetail/services/CommentLike.service'

const CommentCard = ({ item, sortBy }) => {
  const { mutate, isLoading } = useCommentLikeService({
    poemId: item?.poemId,
    commentId: item?.commentId,
    parentCommentId: null,
    sortBy,
  })

  const [isReplyOpen, setIsReplyOpen] = useState(false)
  const [commentCount, setCommentCount] = useState(item?.commentCount)

  return (
    <Root className={isReplyOpen ? 'replyOpen' : ''}>
      <Header>
        <StyledAvatar
          sx={{ bgcolor: theme => theme.palette.primary.main }}
          variant="rounded"
          alt="Profile Image"
          src={item?.profileImage || '..'}
        />
        <Username variant="h6" component="div" color="secondary">
          {item?.username}
        </Username>
        <Rating
          color="primary"
          sx={{ ml: 'auto', color: theme => theme.palette.primary.main }}
          value={item?.rating}
          readOnly
          size="medium"
          precision={0.1}
          emptyIcon={<StarIcon fontSize="inherit" sx={{ color: theme => theme.palette.primary.main + '39' }} />}
        />
      </Header>
      <CommentText color="secondary" variant="body1">
        {item?.comment}
      </CommentText>

      <ActionList>
        <StyledButton
          startIcon={item?.isLiked ? <ThumbUpRoundedIcon /> : <ThumbDownOffAltRoundedIcon sx={{ rotate: '180deg' }} />}
          onClick={mutate}>
          {item?.likeCount}
        </StyledButton>
        <StyledButton
          onClick={() => setIsReplyOpen(!isReplyOpen)}
          startIcon={<CommentBankRoundedIcon />}
          endIcon={<KeyboardArrowUpRoundedIcon sx={{ transition: '.25s ease-in-out', rotate: isReplyOpen ? '180deg' : '90deg' }} />}>
          {commentCount}
        </StyledButton>
        <CommentedOn variant="subtitle2">{item?.createdAt}</CommentedOn>
      </ActionList>

      {isReplyOpen && <ReplySection commentId={item?.commentId} setCommentCount={setCommentCount} />}
    </Root>
  )
}

const Root = styled.div`
  position: relative;
  padding: 15px;
  border-radius: 16px;
  height: fit-content;
  transition: 0.3s ease-in-out;
  cursor: pointer;
  border: 1px solid ${({ theme }) => theme.palette.primary.main}10;
  display: flex;
  flex-direction: column;
  gap: 12px;
  max-width: 650px;
  @media (max-width: 400px) {
    gap: 9px;
  }
  &.replyOpen {
    border: 1px solid ${({ theme }) => theme.palette.primary.main};
    box-shadow: 0px 7px 10px 1px rgba(0, 0, 0, 0.05);
    transform: scale(1.01);
  }
  background-image: ${({ theme }) => theme.palette.background.paperImage};
`

const Header = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
  @media (max-width: 400px) {
    gap: 8px;
  }
`

const CommentText = styled(Typography)`
  font-weight: 500;
  color: ${({ theme }) => theme.palette.secondary.main}bb;
  @media (max-width: 400px) {
    font-size: 0.95rem;
  }
  overflow: hidden;
`

const CommentedOn = styled(Typography)`
  font-weight: 500;
  color: ${({ theme }) => theme.palette.secondary.main}bb;
  font-size: 0.7rem;
  @media (max-width: 400px) {
  }
  align-self: end;
  margin-left: auto;
`

const StyledAvatar = styled(Avatar)`
  width: 35px;
  height: 35px;
  font-size: medium;
  font-weight: 600;
`

const Username = styled(Typography)``

const ActionList = styled.div`
  display: flex;
  gap: 15px;
`

const StyledButton = styled(Button)`
  font-weight: 600;
  color: ${({ theme }) => theme.palette.secondary.main};
  background-color: ${({ theme }) => theme.palette.primary.main}0c;
  padding: 9.5px 10px 9.5px 15px;
  display: flex;
  align-items: center;
  line-height: 1.05;
  .MuiSvgIcon-root {
    font-size: 1.07rem;
  }
  .MuiButton-startIcon {
    margin-right: 6px;
  }
  .MuiButton-endIcon {
    margin-left: 6px;
  }
  :hover {
    background-color: ${({ theme }) => theme.palette.primary.main}10;
  }
  &.highlight {
    color: ${({ theme }) => theme.palette.primary.main};
  }
`

export default CommentCard
