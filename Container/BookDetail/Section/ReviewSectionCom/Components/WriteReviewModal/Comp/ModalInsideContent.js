import EmojiPicker from 'emoji-picker-react'
import React, { useState } from 'react'
import { PostCommentText, WriteReviewModalWrapper } from '../../../../../common/common.styles'
import { BsEmojiSmile } from 'react-icons/bs'
import styled from '@emotion/styled'
import { Button } from '@mui/material'
import useFormError from 'hooks/useFormError'
import { useBookCommentAPI } from 'Container/BookDetail/api/bookDetail.hook'
import { FormProvider, useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import CommentSchema from './CommentSchema'
import { useRouter } from 'next/router'
import { mobileL, mobileM, tabletS } from 'styles/mediaQuery/breakPoints'
const ModalInsideContent = ({ setOpen, comment, id }) => {
  const methods = useForm({
    resolver: yupResolver(CommentSchema),
  })
  const { handleBookComment, isLoading } = useBookCommentAPI()
  const { handleFormError } = useFormError()

  const router = useRouter()
  const handleBookCommentSubmit = data => {
    handleBookComment({ ...data, book_id: router.query.book, parent_comment_id: comment ? '' : id })
    setOpen(false)
  }
  return (
    <>
      <Form onSubmit={methods.handleSubmit(handleBookCommentSubmit, handleFormError)}>
        <FormProvider {...methods}>
          <WriteReviewModalWrapper>
            <PostCommentText
              name="comments"
              {...methods.register('comments')}
              required
              placeholder="Type your review here.Please write your review as detailed as you can Your reviews would be very important to the story (at least 140 characters)."
            />

            <EmojiAndPostButtonWrapper>
              <EmojiAndImgPickerWrapper></EmojiAndImgPickerWrapper>
              <PostButtonWrapper>
                <PostButton variant="contained" type="submit">
                  Post
                </PostButton>
              </PostButtonWrapper>
            </EmojiAndPostButtonWrapper>
          </WriteReviewModalWrapper>
        </FormProvider>
      </Form>
    </>
  )
}

export default ModalInsideContent

const Form = styled.form`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 700px;
  height: 400px;
  background: rgba(255, 255, 255, 0.85);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(3.5px);
  -webkit-backdrop-filter: blur(3.5px);
  border-radius: 10px;
  border: 1px solid rgba(255, 255, 255, 0.18);

  border-top: 5px solid #5a2cc6;

  padding: 16px;
  width: 350px;
  @media ${mobileM} {
    width: 400px;
  }
  @media ${mobileL} {
    width: 500px;
  }
  @media ${tabletS} {
    width: 700px;
  }
`

const EmojiAndPostButtonWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding-bottom: 25px;
`
const EmojiAndImgPickerWrapper = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;
  width: 50%;
  gap: 20px;
`
const PostButtonWrapper = styled.div`
  display: flex;
  justify-content: end;
  align-items: center;
  width: 50%;
  gap: 20px;
`
const ImgFileAttach = styled.img`
  width: 30px;
  color: #6b728e;
`
const PostButton = styled(Button)`
  padding: 8px 20px;
  background-color: #5a2cc6;
  color: white;
  font-size: 17px;
  border-radius: 20px;
`
