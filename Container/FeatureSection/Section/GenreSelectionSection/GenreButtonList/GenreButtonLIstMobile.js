import Link from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'
import CheckBoxRoundedIcon from '@mui/icons-material/CheckBoxRounded'
import CheckBoxOutlineBlankRoundedIcon from '@mui/icons-material/CheckBoxOutlineBlankRounded'
import { GenreName } from '../../../../../hooks/useGenreButton'
import { GenreButtonListMobileWrapper, GenreButtonsMobile } from './GenreButtonListStyle'
const GenreButtonLIstMobile = ({ explore, section }) => {
  const router = useRouter()
  const { sub_genre, genre } = router.query
  const path = `?content_type=${section}&genre=`
  return (
    <>
      <GenreButtonListMobileWrapper>
        {GenreName.map((button, index) => (
          <Link href={`${explore}${path}${button.name}&sub_genre=${sub_genre}`}>
            <GenreButtonsMobile
              key={index}
              startIcon={genre === button.name ? <CheckBoxRoundedIcon /> : <CheckBoxOutlineBlankRoundedIcon />}
              className={router.asPath === `${explore}${path}${button.name}&sub_genre=${sub_genre}` ? 'genre' : ''}>
              {button.buttonName}
            </GenreButtonsMobile>
          </Link>
        ))}
      </GenreButtonListMobileWrapper>
    </>
  )
}

export default GenreButtonLIstMobile
