import ReaderSectionPage from 'modules/ReaderSection/pages/read.page'
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