import EmojiPicker from 'emoji-picker-react'
import React, { useState } from 'react'
import { PostCommentText, WriteReviewModalWrapper } from '../../../../BookDetailStyle'
import { BsEmojiSmile } from 'react-icons/bs'
import styled from '@emotion/styled'
import { Button } from '@mui/material'
import useFormError from 'hooks/useFormError'
import { useBookCommentAPI } from 'Container/BookDetail/api/bookDetail.hook'
import { FormProvider, useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import CommentSchema from './CommentSchema'
const ModalInsideContent = () => {
  const methods = useForm({
    resolver: yupResolver(CommentSchema),
  })
  const { handleBookComment, isLoading } = useBookCommentAPI()
  const { handleFormError } = useFormError()
  return (
    <>
      <Form onSubmit={methods.handleSubmit(handleBookComment, handleFormError)}>
        <FormProvider {...methods}>
          <WriteReviewModalWrapper>
            <PostCommentText placeholder="Type your review here.Please write your review as detailed as you can Your reviews would be very important to the story (at least 140 characters)." />

            <EmojiAndPostButtonWrapper>
              <EmojiAndImgPickerWrapper></EmojiAndImgPickerWrapper>
              <PostButtonWrapper>
                <PostButton>Post</PostButton>
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
  background-color: white;

  border-top: 5px solid #5a2cc6;
  box-shadow: 24;
  padding: 16px;
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
