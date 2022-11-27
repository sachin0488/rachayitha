import React from 'react'
import NovelImg from '../../public/novel.svg'
import PoemImg from '../../public/poem.png'
import ShortImg from '../../public/shorts.svg'
import Image from 'next/image'
import Link from 'next/link'
import { GenreTitle, MenuItem } from '../Explore/ExploreStyle'
import { useRouter } from 'next/router'
export const RankingLinkList = [
  {
    href: '/ranking/novel?lead=male',
    img_url: NovelImg,
    genretitle: 'Novels',
  },
  {
    href: '/ranking/short?lead=male',
    img_url: ShortImg,
    genretitle: 'Shorts',
  },
  {
    href: '/ranking/poem?lead=male',
    img_url: PoemImg,
    genretitle: 'Poems',
  },
]

export const ExploreLinkList = [
  {
    href: '/explore/novel?lead=male',
    img_url: NovelImg,
    genretitle: 'Novels',
  },
  {
    href: '/explore/short?lead=male',
    img_url: ShortImg,
    genretitle: 'Shorts',
  },
  {
    href: '/explore/poem?lead=male',
    img_url: PoemImg,
    genretitle: 'Poems',
  },
]

const RankingLinksContainer = ({ href, img_url, genretitle }) => {
  const router = useRouter()
  const { genre } = router.query
  return (
    <>
      <Link href={`${href}&genre=${genre}`}>
        <MenuItem className={router.asPath === `${href}&genre=${genre}` ? 'explore' : ''}>
          <Image src={img_url} />
          <GenreTitle>{genretitle}</GenreTitle>
        </MenuItem>
      </Link>
    </>
  )
}

export default RankingLinksContainer
