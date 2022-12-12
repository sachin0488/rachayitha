import { useRouter } from 'next/router'
import React from 'react'
import { LeftSideGenreMenuBar } from 'Container/FeatureSection/Common/Common.styles'
import Link from 'next/link'
import { GenreTitle, MenuItem, NovelIcon, PoemIcon } from 'Container/FeatureSection/Common/Common.styles'
import { FaBookReader } from 'react-icons/fa'

const RankingGenreMenuBarLeftSection = () => {
  const router = useRouter()
  const section = router.pathname.split('/')[1]
  const { genre, sub_genre } = router.query
  return (
    <>
      <LeftSideGenreMenuBar>
        <Link href={`/ranking?content_type=novel&lead=male&genre=${genre}`}>
          <MenuItem className={router.asPath === `/ranking?content_type=novel&lead=male&genre=${genre}` ? 'genre' : ''}>
            <NovelIcon />
            <GenreTitle>Novel</GenreTitle>
          </MenuItem>
        </Link>
        <Link href={`/ranking?content_type=short&lead=male&genre=${genre}`}>
          <MenuItem className={router.asPath === `/ranking?content_type=short&lead=male&genre=${genre}` ? 'genre' : ''}>
            <FaBookReader />
            <GenreTitle>Short</GenreTitle>
          </MenuItem>
        </Link>
        <Link href={`/ranking?content_type=poem&lead=male&genre=${genre}`}>
          <MenuItem className={router.asPath === `/ranking?content_type=poem&lead=male&genre=${genre}` ? 'genre' : ''}>
            <PoemIcon />
            <GenreTitle>Poem</GenreTitle>
          </MenuItem>
        </Link>
      </LeftSideGenreMenuBar>
    </>
  )
}

export default RankingGenreMenuBarLeftSection
