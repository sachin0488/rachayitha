import Link from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'
import { genreName } from 'hooks/useGenreButton'
import { GenreButtonListMobileWrapper, GenreButtonsMobile } from './GenreButtonListStyle'
const RankingGenreButtonLIstMobile = ({ explore, section }) => {
  const router = useRouter()
  const { sub_genre, genre } = router.query

  return (
    <>
      <GenreButtonListMobileWrapper>
        {genreName.map(button => (
          <Link href={`/${explore}?content_type=${section}&lead=male&genre=${button.name}`}>
            <GenreButtonsMobile
              className={
                router.asPath === `/${explore}?content_type=${section}&lead=male&genre=${button.name}` ? 'genre' : ''
              }>
              {button.buttonName}
            </GenreButtonsMobile>
          </Link>
        ))}
      </GenreButtonListMobileWrapper>
    </>
  )
}

export default RankingGenreButtonLIstMobile
