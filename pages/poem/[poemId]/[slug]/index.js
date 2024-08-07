import React from 'react'
import ContentDetail from 'modules/ContentDetail/pages/contentDetail.page'
import { useRouter } from 'next/router'
import { fetchContentDetail } from 'modules/ContentDetail/services/ContentDetails.service'

export async function getServerSideProps({ req, res, query, params }) {
  const poemId = query.poemId
  const slug = query.slug

  const serverData = await fetchContentDetail({ contentType: 'poem', contentId: poemId, slug: slug })

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
