import React, { useEffect } from 'react'
import styled from '@emotion/styled'

import { Avatar, Box, Button, CircularProgress, Rating, Typography } from '@mui/material'
import { FormProvider, useForm } from 'react-hook-form'
import { useRouter } from 'next/router'

import StarIcon from '@mui/icons-material/Star'
import SendRoundedIcon from '@mui/icons-material/SendRounded'
import LoginRoundedIcon from '@mui/icons-material/LoginRounded'
import StyledTextField from 'components/form-components/StyledTextField'
import { useCreateCommentService } from 'modules/ContentDetail/services/CreateComment.service'
import { useContentDetailsService } from 'modules/ContentDetail/services/ContentDetails.service'
import { useUserService } from 'modules/Auth/service/User.service'
import Link from 'next/link'

const CreateCommentSection = ({ parentCommentId, sortBy, contentType, contentId }) => {
  const { user, isLoggedIn } = useUserService()
  const { Data } = useContentDetailsService({ contentId, contentType })
  const { mutate, isLoading, isSuccess } = useCreateCommentService({
    contentId,
    parentCommentId: parentCommentId || null,
    sortBy,
    contentType,
  })

  const methods = useForm({
    defaultValues: {
      comment: '',
    },
  })

  useEffect(() => {
    if (isSuccess) {
      methods.reset({ comment: '' })
    }
  }, [isSuccess, methods])

  const comment = methods.watch('comment')

  const { handleSubmit } = methods

  if (!isLoggedIn) {
    return (
      <LoginPlaceholder>
        <Typography variant="h6" fontWeight={500} marginBottom={1} component="div" color="secondary" textAlign="center">
          You can comment here after signing !
        </Typography>
        <Typography variant="subtitle2" fontWeight={500} component="div" color="secondary.light" textAlign="center">
          {`Need an account? `}
          <Link href="/create-account">
            <a>
              <Typography as="span" variant="subtitle2" fontWeight={500} component="div" color="primary" textAlign="center">
                Create one!
              </Typography>
            </a>
          </Link>
        </Typography>
        <Link href="/login">
          <a>
            <Button disableElevation variant="contained" endIcon={<LoginRoundedIcon />} sx={{ marginTop: 2 }}>
              Sign In
            </Button>
          </a>
        </Link>
      </LoginPlaceholder>
    )
  }

  return (
    <Root>
      <FormProvider {...methods}>
        <Header>
          <StyledAvatar
            sx={{ bgcolor: user?.profilePic ? '#fff' : theme => theme.palette.primary.main }}
            variant="rounded"
            alt={user?.profilePic ? user?.username : undefined}
            src={user?.profilePic || undefined}>
            {user?.username?.[0] || null}
          </StyledAvatar>
          <Username variant="h6" component="div" color="secondary">
            {user?.username}
          </Username>
          <Rating
            color="primary"
            sx={{ ml: 'auto', color: theme => theme.palette.primary.main }}
            value={Data?.contentRatingByUser || 0}
            readOnly
            size="medium"
            precision={0.1}
            emptyIcon={<StarIcon fontSize="inherit" sx={{ color: theme => theme.palette.primary.main + '39' }} />}
          />
        </Header>

        <CommentField placeholder="Add Comment here ..." variant="filled" name="comment" multiline />

        <ActionList>
          <StyledButton disabled={isLoading} onClick={() => methods.reset({ comment: '' })}>
            Cancel
          </StyledButton>
          <StyledButton
            disabled={isLoading || !comment}
            endIcon={
              isLoading ? (
                <CircularProgress
                  size={16}
                  sx={{
                    color: theme => theme.palette.grey[500],
                  }}
                />
              ) : (
                <SendRoundedIcon />
              )
            }
            onClick={handleSubmit(mutate)}>
            Comment
          </StyledButton>
        </ActionList>
      </FormProvider>
    </Root>
  )
}

const Root = styled.div`
  position: relative;
  padding: 5px;
  border-radius: 16px;
  transition: 0.3s ease-in-out;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  gap: 16px;
  max-width: 650px;
  @media (max-width: 400px) {
    padding: 5px;
  }
`

const LoginPlaceholder = styled.div`
  padding: 25px 15px;
  border-radius: 16px;
  transition: 0.3s ease-in-out;
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 650px;

  @media (max-width: 400px) {
    padding: 25px 15px;
  }

  /* box-shadow: 10px 10px 10px ${({ theme }) => theme.palette.primary.main}0c; */
`

const CommentField = styled(StyledTextField)`
  width: 100%;
  /* background-color: ${({ theme }) => theme.palette.primary.main}; */
  .MuiFilledInput-root {
    background-color: ${({ theme }) => theme.palette.primary.main}0c;
    border-radius: 16px;
    padding: 10px 15px;
    :hover {
      background-color: ${({ theme }) => theme.palette.primary.main}10;
    }
    :focus-within {
      background-color: ${({ theme }) => theme.palette.primary.main}10;
    }
  }
  .MuiFilledInput-input {
    padding: 0;
  }
  .MuiFilledInput-underline:after {
    border-bottom: none;
  }
  .MuiFilledInput-underline:before {
    border-bottom: none;
  }
  .MuiFilledInput-underline:hover:not(.Mui-disabled):before {
    border-bottom: none;
  }
  .MuiFilledInput-underline.Mui-focused:after {
    border-bottom: none;
  }
  .MuiFilledInput-underline.Mui-focused:before {
    border-bottom: none;
  }

  .MuiFilledInput-multiline {
    padding: 0;
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
  padding: 9.5px 15px 9.5px 15px;
  display: flex;
  align-items: center;
  line-height: 1.05;
  .MuiSvgIcon-root {
    font-size: 1rem;
  }
  :hover {
    background-color: ${({ theme }) => theme.palette.primary.main}10;
  }
  &.highlight {
    color: ${({ theme }) => theme.palette.primary.main};
  }
`

export default CreateCommentSection
