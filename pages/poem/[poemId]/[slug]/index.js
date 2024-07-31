import React from 'react'
import ContentDetail from 'modules/ContentDetail/pages/contentDetail.page'
import { useRouter } from 'next/router'

export async function getServerSideProps({ req, res, query, params }) {
  const bookId = query.bookId
  const slug = query.slug

  const serverData = await fetchContentDetail({ contentType: 'book', contentId: bookId, slug: slug })

  return { props: { serverData: serverData } }
}

const Poem = ({ serverData }) => {
  const { query } = useRouter()

  const contentType = 'poem'
  const contentId = query?.poemId
  const slug = query?.slug

  return (
    <>
      <ContentDetail contentId={contentId} contentType={contentType} slug={slug} serverData={serverData} />
    </>
  )
}

export default Poem
