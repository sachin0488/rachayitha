import styled from '@emotion/styled'
import { useRouter } from 'next/router'
import React from 'react'
import useBookDetail from '../api/bookDetail.hook'
import Chapter from './Components/Chapter'

const BookTableOfContent = () => {
  const router = useRouter()
  const { data } = useBookDetail(router.query.book)
  return (
    <ContentWrapper>
      <>
        {data?.data?.data[0]?.chapter.map((chapter, index) =>
          index % 2 == 0 ? (
            <Chapter chapter={chapter} colorProp="#EEF6FF" />
          ) : (
            <Chapter chapter={chapter} colorProp="white" />
          ),
        )}
      </>
    </ContentWrapper>
  )
}

export default BookTableOfContent

const ContentWrapper = styled.div`
  padding-top: 10px;
  display: flex;
  justify-content: start;
  align-items: flex-start;
  flex-direction: column;
  width: 100%;
  height: 275px;
  overflow-y: auto;
  /* &::-webkit-scrollbar {
    width: 0;
  } */
`
