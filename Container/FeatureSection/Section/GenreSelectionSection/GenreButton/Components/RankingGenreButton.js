import Link from 'next/link'
import { useRouter } from 'next/router'
import { GenreButtons, GenreButtonWrapper } from '../GenreButtonStyle'

const RankingGenreButton = props => {
  const router = useRouter()
  const { sub_genre } = router.query

  return (
    <>
      <GenreButtonWrapper style={{ width: props.width }}>
        <Link href={`/${props.explore}?content_type=${props.section}&genre=${props.platformApi}`}>
          <GenreButtons
            className={
              router.asPath === `/${props.explore}?content_type=${props.section}&genre=${props.platformApi}`
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

export default RankingGenreButton
