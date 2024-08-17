import React from 'react'
import ContentDetail from 'modules/ContentDetail/pages/contentDetail.page'
import { useRouter } from 'next/router'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

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

export async function getServerSideProps({ req, res, query, params, locale }) {

  // console.log('getServerSideProps', { req, res, query, params, locale })
    
  const contentId = query.poemId ;
  const slug = query.slug ;
  return {
    props: {
      contentId,
      slug,
      ...(await serverSideTranslations(locale, ["common"])),
      
    },
  }
}



