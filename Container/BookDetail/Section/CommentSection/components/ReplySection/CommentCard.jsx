import React, { useState } from 'react'
import styled from '@emotion/styled'

import { Avatar, Button, Rating, Typography } from '@mui/material'

import StarIcon from '@mui/icons-material/Star'
import ThumbUpRoundedIcon from '@mui/icons-material/ThumbUpRounded'
import CommentBankRoundedIcon from '@mui/icons-material/CommentBankRounded'
import ReplySection from '../ReplySection'
import KeyboardArrowUpRoundedIcon from '@mui/icons-material/KeyboardArrowUpRounded';

const CommentCard = () => {
  const [isReplyOpen, setIsReplyOpen] = useState(false)
  return (
    <Root className={isReplyOpen ? 'replyOpen' : ''}>
      <Header>
        <StyledAvatar
          sx={{ bgcolor: theme => theme.palette.primary.main }}
          variant="rounded"
          alt="?"
          src="/static/images/avatar/1.jpg"
        />
        <Username variant="h6" color="secondary">
          Guiltythree
        </Username>
        <Rating
          color="primary"
          sx={{ ml: 'auto', color: theme => theme.palette.primary.main }}
          //   value={item?.rating?.rate__avg}
          value={4.3}
          readOnly
          size="medium"
          precision={0.1}
          emptyIcon={<StarIcon fontSize="inherit" sx={{ color: theme => theme.palette.primary.main + '39' }} />}
        />
      </Header>
      <CommentText color="secondary" variant="body1">
        Discovered the Demonic Body of the Hellbound Domination Emperor, loot to receive Sun-swallowing Cerberus,
        extract?
      </CommentText>

      <ActionList>
        <StyledButton startIcon={<ThumbUpRoundedIcon />}>23</StyledButton>
        <StyledButton
          onClick={() => setIsReplyOpen(!isReplyOpen)}
          startIcon={<CommentBankRoundedIcon />}
          endIcon={
            <KeyboardArrowUpRoundedIcon
              sx={{ transition: '.25s ease-in-out', rotate: isReplyOpen ? '180deg' : '90deg' }}
            />
          }>
          23
        </StyledButton>
      </ActionList>

      {isReplyOpen && <ReplySection />}
    </Root>
  )
}

const Root = styled.div`
  position: relative;
  padding: 15px 0px 0px 5px;
  height: fit-content;
  transition: 0.3s ease-in-out;
  cursor: pointer;
  border-top: 1px solid ${({ theme }) => theme.palette.primary.main}18;
  display: flex;
  flex-direction: column;
  gap: 12px;
  max-width: 650px;
  @media (max-width: 400px) {
    gap: 9px;
  }
  &.replyOpen {
    border-top: 1px solid ${({ theme }) => theme.palette.primary.main};
    border-bottom: 1px solid ${({ theme }) => theme.palette.primary.main};
  }
  & > :last-of-type {
    padding-bottom: 10px;
  }
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
