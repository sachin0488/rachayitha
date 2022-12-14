import styled from '@emotion/styled'
import { Box, Typography } from '@mui/material'
import React from 'react'
import { BookTitle } from '../ChapterUpperSection'
import Pagination from '@mui/material/Pagination'
import Stack from '@mui/material/Stack'
import { mobileM } from 'styles/mediaQuery/breakPoints'

const ChapterLowerSection = ({ item }) => {
  return (
    <>
      <Root>
        <EditorWrapper>
          <BookTitle>{item?.chapter_title}</BookTitle>
          <TextWrapper>
            <Text>Translator: Atlas Studio</Text>
            <Box color="#83848f" height="100%">
              |
            </Box>
            <Text>Editor: Atlas Studion</Text>
          </TextWrapper>
        </EditorWrapper>
        <Paragraph>{item?.chapter_content}</Paragraph>
        <PaginationWrapper>
          <Stack spacing={4}>
            <Pagination size="normal" count={10} variant="outlined" color="primary" />
          </Stack>
        </PaginationWrapper>
      </Root>
    </>
  )
}

export default ChapterLowerSection

const Root = styled(Box)`
  display: flex;
  justify-content: start;
  align-items: flex-start;
  flex-direction: column;
  gap: 25px;
  width: 100%;
`
const PaginationWrapper = styled(Box)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 50px 0px;
`

const EditorWrapper = styled(Box)`
  display: flex;
  justify-content: start;
  align-items: flex-start;
  flex-direction: column;
  gap: 5px;
`
const TextWrapper = styled(Box)`
  display: flex;
  justify-content: start;
  align-items: center;
  gap: 10px;
`
const Text = styled(Typography)`
  font-weight: 400;
  font-size: 15px;
  line-height: 16px;
  color: #83848f;
  @media ${mobileM} {
    font-size: 18px;
    line-height: 21px;
  }
`

const Paragraph = styled(Typography)`
  color: #5f5f5f;
  font-size: 20px;
  line-height: 30px;
  text-align: justify;
`
