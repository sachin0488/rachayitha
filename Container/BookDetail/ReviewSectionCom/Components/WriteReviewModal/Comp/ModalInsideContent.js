import EmojiPicker from 'emoji-picker-react'
import React, { useState } from 'react'
import { PostCommentText, WriteReviewModalWrapper } from '../../../../BookDetailStyle'
import { BsEmojiSmile } from 'react-icons/bs'
import styled from '@emotion/styled'
import { Button } from '@mui/material'
const ModalInsideContent = () => {
  const [inputStr, setInputStr] = useState('')
  const [showPicker, setShowPicker] = useState(false)
  const onEmojiClick = (event, emojiObject) => {
    setInputStr(prevInput => prevInput + emojiObject.emoji)
    setShowPicker(false)
  }
  return (
    <>
      <WriteReviewModalWrapper>
        <PostCommentText
          placeholder="Type your review here.Please write your review as detailed as you can Your reviews would be very important to the story (at least 140 characters)."
          value={inputStr}
          onChange={e => setInputStr(e.target.value)}
        />

        {showPicker && <EmojiPicker onEmojiClick={onEmojiClick} />}
        <EmojiAndPostButtonWrapper>
          <EmojiAndImgPickerWrapper>
            <BsEmojiSmile style={{ color: '#6b728e' }} size="30" onClick={() => setShowPicker(val => !val)} />
            <ImgFileAttach src="https://static.thenounproject.com/png/230198-200.png" />
          </EmojiAndImgPickerWrapper>
          <PostButtonWrapper>
            <PostButton>Post</PostButton>
          </PostButtonWrapper>
        </EmojiAndPostButtonWrapper>
      </WriteReviewModalWrapper>
    </>
  )
}

export default ModalInsideContent

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
