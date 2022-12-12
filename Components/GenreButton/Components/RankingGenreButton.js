import Link from 'next/link'
import { useRouter } from 'next/router'
import { GenreButtons, GenreButtonWrapper } from '../GenreButtonStyle'

const RankingGenreButton = props => {
  const router = useRouter()
  const { sub_genre } = router.query
  console.log(props.explore, 'props ranking')
  return (
    <>
      <GenreButtonWrapper style={{ width: props.width }}>
        <Link
          href={`/${props.explore}?content_type=${props.section}&lead=${props.genreLead}&genre=${props.platformApi}`}>
          <GenreButtons
            className={
              router.asPath ===
              `/${props.explore}?content_type=${props.section}&lead=${props.genreLead}&genre=${props.platformApi}`
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
