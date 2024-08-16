import React from 'react'
import ContentDetail from 'modules/ContentDetail/pages/contentDetail.page'
import { useRouter } from 'next/router'

const Poem = () => {
  const { query } = useRouter()

  const contentType = 'poem'
  const contentId = query?.poemId
  const slug = query?.slug

  return (
    <>
      <ContentDetail contentId={contentId} contentType={contentType} slug={slug} />
    </>
  )
}

export default Poem


