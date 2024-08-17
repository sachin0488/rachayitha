import ReaderSectionPage from 'modules/ReaderSection/pages/read.page'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { useRouter } from 'next/router'

const Chapter = () => {
  const router = useRouter()
  const contentType = 'poem'
  const contentId = parseInt(router?.query?.poemId)
  const slug = router?.query?.slug
  const chapterId = parseInt(router?.query?.chapterId)
  const chapterSlug = router?.query?.chapterSlug

  return (
    <>
      <ReaderSectionPage chapterId={chapterId} chapterSlug={chapterSlug} contentId={contentId} contentType={contentType} slug={slug} />
    </>
  )
}

export default Chapter

 export async function getServerSideProps({ req, res, query, params, locale }) {

  console.log('getServerSideProps', { query, params, locale })

  const contentId = query.poemId
  const slug = query.slug
  const chapterId = query.chapterId
  const chapterSlug = query.chapterSlug
  return {
    props: {
      contentId,
      slug,
      chapterId,
      chapterSlug,
      ...(await serverSideTranslations(locale, ["common"])),
    },
  }
}