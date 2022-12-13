import Link from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'
import { genreName, GenreName } from '../../hooks/useGenreButton'
import { GenreButtonListMobileWrapper, GenreButtonsMobile } from './GenreButtonListStyle'
const GenreButtonLIstMobile = ({ explore, section }) => {
  const router = useRouter()
  const { sub_genre, genre } = router.query

  return (
    <>
      <GenreButtonListMobileWrapper>
        {GenreName.map(button => (
          <Link href={`/${explore}?content_type=${section}&lead=male&genre=${button.name}&sub_genre=${sub_genre}`}>
            <GenreButtonsMobile
              className={
                router.asPath ===
                `/${explore}?content_type=${section}&lead=male&genre=${button.name}&sub_genre=${sub_genre}`
                  ? 'genre'
                  : ''
              }>
              {button.buttonName}
            </GenreButtonsMobile>
          </Link>
        ))}
      </GenreButtonListMobileWrapper>
    </>
  )
}

export default GenreButtonLIstMobile
