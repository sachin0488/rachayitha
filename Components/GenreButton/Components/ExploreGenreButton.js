import Link from 'next/link'
import { useRouter } from 'next/router'
import { GenreButtons, GenreButtonWrapper } from '../GenreButtonStyle'

const ExploreGenreButton = props => {
  const router = useRouter()
  const { content_type, sub_genre } = router.query
  console.log(props.explore, 'props')
  return (
    <>
      <GenreButtonWrapper style={{ width: props.width }}>
        <Link
          href={`/${props.explore}?content_type=${props.section}&lead=${props.genreLead}&genre=${props.platformApi}&sub_genre=${sub_genre}`}>
          <GenreButtons
            className={
              router.asPath ===
              `/${props.explore}?content_type=${props.section}&lead=${props.genreLead}&genre=${props.platformApi}&sub_genre=${sub_genre}`
                ? 'genre'
                : ''
            }>
            {props.platformButton}
          </GenreButtons>
        </Link>
      </GenreButtonWrapper>
    </>
  )
}

export default ExploreGenreButton
