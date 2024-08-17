import React from 'react'
import ContentDetail from 'modules/ContentDetail/pages/contentDetail.page'
import { useRouter } from 'next/router'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

const Book = ({ contentId, slug }) => {
  const contentType = 'book'

  if (!contentId || !slug) {
    console.error("Missing contentId or slug:", { contentId, slug });
    return <p>Loading...</p>; // or some fallback UI
  }

  return <ContentDetail contentId={contentId} contentType={contentType} slug={slug} />
}

export default Book

export async function getServerSideProps({ req, res, query, params, locale }) {

  // console.log('getServerSideProps', { req, res, query, params, locale })
    
  const contentId = query.bookId ;
  const slug = query.slug ;
  return {
    props: {
      contentId,
      slug,
      ...(await serverSideTranslations(locale, ["common"])),
      
    },
  }
}
