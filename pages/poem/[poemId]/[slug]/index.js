import React from 'react'
import ContentDetail from 'modules/ContentDetail/pages/contentDetail.page'
import { useRouter } from 'next/router'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { fetchContentDetail } from 'modules/ContentDetail/services/ContentDetails.service'

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

export async function getServerSideProps({ req, res, query, params, locale }) {
  // console.log('getServerSideProps', { req, res, query, params, locale })

  const contentId = query.poemId
  const slug = query.slug

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
