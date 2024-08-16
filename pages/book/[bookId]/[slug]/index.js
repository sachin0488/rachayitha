import React from 'react'
import ContentDetail from 'modules/ContentDetail/pages/contentDetail.page'
import { useRouter } from 'next/router'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

const Book = () => {
  const { query } = useRouter()

  const contentType = 'book'
  const contentId = query?.bookId
  const slug = query?.slug

  return <ContentDetail contentId={contentId} contentType={contentType} slug={slug} />
}

export default Book

// export async function getStaticProps({ locale }) {
//   return {
//     props: {
//       ...(await serverSideTranslations(locale, ["common"])),
//     },
//   };
// }

export async function getServerSideProps({ req, res, query, params ,locale}) {
 
  return{
    props:{
      ...(await serverSideTranslations(locale, ["common"])),  
    }
  }
 
  return { props: { serverData: serverData } }
}