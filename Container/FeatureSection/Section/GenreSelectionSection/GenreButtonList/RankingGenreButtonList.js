import { GenreName } from '../../../../../hooks/useGenreButton'
import CheckBoxRoundedIcon from '@mui/icons-material/CheckBoxRounded'
import CheckBoxOutlineBlankRoundedIcon from '@mui/icons-material/CheckBoxOutlineBlankRounded'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'

import { GenreButtonListMobileWrapper, GenreButtonsMobile } from './GenreButtonListStyle'
const RankingGenreButtonLIstMobile = ({ explore, section }) => {
  const router = useRouter()
  const { genre } = router.query
  const path = `?content_type=${section}&genre=`
  return (
    <>
      <GenreButtonListMobileWrapper>
        {GenreName.map((button, index) => (
          <Link href={`${explore}${path}${button.name}`}>
            <GenreButtonsMobile
              key={index}
              startIcon={genre === button.name ? <CheckBoxRoundedIcon /> : <CheckBoxOutlineBlankRoundedIcon />}
              className={router.asPath === `${explore}${path}${button.name}` ? 'genre' : ''}>
              {button.buttonName}
            </GenreButtonsMobile>
          </Link>
        ))}
      </GenreButtonListMobileWrapper>
    </>
  )
}

export default RankingGenreButtonLIstMobile
