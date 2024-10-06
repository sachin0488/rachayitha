import React from 'react'
import ContentDetail from 'modules/ContentDetail/pages/contentDetail.page'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { fetchContentDetail } from 'modules/ContentDetail/services/ContentDetails.service'

const Poem = ({ contentId, slug, serverData }) => {
  const contentType = 'poem'

  if (!contentId || !slug) {
    console.error('Missing contentId or slug:', { contentId, slug })
    return <p>Loading...</p>
  }

  return (
    <>
      <ContentDetail contentId={contentId} contentType={contentType} slug={slug} serverData={serverData} />
    </>
  )
}

export default Poem

export async function getServerSideProps({ req, res, query, params, locale }) {
  const contentId = query?.poemId
  const slug = query?.slug

  const serverData = await fetchContentDetail({ contentType: 'poem', contentId: contentId, slug: slug })

  return {
    props: {
      contentId,
      slug,
      ...(await serverSideTranslations(locale, ['common'])),
      serverData: serverData,
    },
  }
}
