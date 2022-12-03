import Link from 'next/link'
import { useRouter } from 'next/router'
import { GenreButtons, GenreButtonWrapper } from '../GenreButtonStyle'

const ExploreGenreButton = props => {
  const router = useRouter()
  const { sub_genre } = router.query
  return (
    <>
      <GenreButtonWrapper style={{ width: props.width }}>
        <Link href={`/${props.explore}?lead=${props.genreLead}&genre=${props.platformApi}&sub_genre=${sub_genre}`}>
          <GenreButtons
            className={
              router.asPath ===
              `/${props.explore}?lead=${props.genreLead}&genre=${props.platformApi}&sub_genre=${sub_genre}`
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
