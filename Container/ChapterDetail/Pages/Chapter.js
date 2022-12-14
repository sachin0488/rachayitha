import styled from '@emotion/styled'
import { Box } from '@mui/material'
import useBookDetail from 'Container/BookDetail/api/bookDetail.hook'
import { useRouter } from 'next/router'
import React from 'react'
import { mobileM } from 'styles/mediaQuery/breakPoints'
import ChapterLowerSection from '../Section/ChapterLowerSection'
import ChapterUpperSection from '../Section/ChapterUpperSection'

const Chapter = () => {
  const router = useRouter()
  const { book, chapter: chap } = router.query
  const { data } = useBookDetail(book)
  const item = data?.data?.data[0].chapter[chap - 1]
  const bookName = data?.data?.data[0]?.book_name

  return (
    <>
      <Wrapper>
        <SubWrapper>
          <MainContentWrapper>
            <ChapterUpperSection item={item} bookName={bookName} />
            <ChapterLowerSection item={item} />
          </MainContentWrapper>
        </SubWrapper>
      </Wrapper>
    </>
  )
}

export default Chapter

const Wrapper = styled(Box)`
  width: 100%;
  min-height: 100vh;
  padding-top: 70px;
  display: flex;
  justify-content: center;
`
const SubWrapper = styled(Box)`
  width: 100%;
  height: 100%;
  max-width: 1826px;
  background-color: #f2f2f2;
  display: flex;
  justify-content: center;
  align-items: flex-start;
`
const MainContentWrapper = styled(Box)`
  width: 100%;
  height: 100%;
  max-width: 800px;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  padding: 20px 28px;
  @media ${mobileM} {
    padding: 20px 48px;
  }
  background-color: white;
  gap: 70px;
`
