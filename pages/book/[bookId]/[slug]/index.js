import React from 'react'
import ContentDetail from 'modules/ContentDetail/pages/contentDetail.page'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { fetchContentDetail } from 'modules/ContentDetail/services/ContentDetails.service'

const Book = ({ contentId, slug, serverData }) => {
  const contentType = 'book'

  if (!contentId || !slug) {
    console.error('Missing contentId or slug:', { contentId, slug })
    return <p>Loading...</p> // or some fallback UI
  }

  return <ContentDetail contentId={contentId} contentType={contentType} slug={slug} serverData={serverData} />
}

export default Book

export async function getServerSideProps({ req, res, query, params, locale }) {
  const contentId = query?.bookId
  const slug = query?.slug

  const serverData = await fetchContentDetail({ contentType: 'book', contentId: contentId, slug: slug })

  return {
    props: {
      contentId,
      slug,
      ...(await serverSideTranslations(locale, ['common'])),
      serverData: serverData,
    },
  }
}
