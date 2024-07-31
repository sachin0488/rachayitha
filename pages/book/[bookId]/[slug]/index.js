import React from 'react'
import ContentDetail from 'modules/ContentDetail/pages/contentDetail.page'
import { useRouter } from 'next/router'
import { fetchContentDetail } from 'modules/ContentDetail/services/ContentDetails.service'

export async function getServerSideProps({ req, res, query, params }) {
  const bookId = query.bookId
  const slug = query.slug

  const serverData = await fetchContentDetail({ contentType: 'book', contentId: bookId, slug: slug })

  return { props: { serverData: serverData } }
}

const Book = ({ serverData }) => {
  const { query } = useRouter()

  const contentType = 'book'
  const contentId = query?.bookId
  const slug = query?.slug

  return <ContentDetail contentId={contentId} contentType={contentType} slug={slug} serverData={serverData} />
}

export default Book
