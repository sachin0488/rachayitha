import { useRouter } from 'next/router'
import React from 'react'
import { LeftSideGenreMenuBar } from 'container/FeatureSection/common/common.styles'
import Link from 'next/link'
import { GenreTitle, MenuItem, NovelIcon, PoemIcon } from 'container/FeatureSection/common/common.styles'
import { FaBookReader } from 'react-icons/fa'

const RankingGenreMenuBarLeftSection = () => {
  const router = useRouter()
  const section = router.pathname.split('/')[1]
  const { genre, sub_genre } = router.query
  return (
    <>
      <LeftSideGenreMenuBar>
        <Link href={`/ranking?content_type=novel&genre=${genre}`}>
          <MenuItem className={router.asPath === `/ranking?content_type=novel&genre=${genre}` ? 'genre' : ''}>
            <NovelIcon />
            <GenreTitle>Novel</GenreTitle>
          </MenuItem>
        </Link>
        <Link href={`/ranking?content_type=short&genre=${genre}`}>
          <MenuItem className={router.asPath === `/ranking?content_type=short&genre=${genre}` ? 'genre' : ''}>
            <FaBookReader />
            <GenreTitle>Short</GenreTitle>
          </MenuItem>
        </Link>
        <Link href={`/ranking?content_type=poem&genre=${genre}`}>
          <MenuItem className={router.asPath === `/ranking?content_type=poem&genre=${genre}` ? 'genre' : ''}>
            <PoemIcon />
            <GenreTitle>Poem</GenreTitle>
          </MenuItem>
        </Link>
      </LeftSideGenreMenuBar>
    </>
  )
}

export default RankingGenreMenuBarLeftSection
