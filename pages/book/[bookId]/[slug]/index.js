import React from 'react'
import ContentDetail from 'modules/ContentDetail/pages/contentDetail.page'
import { useRouter } from 'next/router'

const Book = () => {
  const { query } = useRouter()

  const contentType = 'book'
  const contentId = query?.bookId
  const slug = query?.slug

  return <ContentDetail contentId={contentId} contentType={contentType} slug={slug} />
}

export default Book
