import NovelImg from '../../../public/novel.svg'
import PoemImg from '../../../public/poem.png'
import ShortImg from '../../../public/shorts.svg'
import MenuBookRoundedIcon from '@mui/icons-material/MenuBookRounded'
import { NovelIcon, PoemIcon } from './Common.styles'
import { FaBookReader } from 'react-icons/fa'

export const ExploreLinkList = [
  {
    href: '/explore?content_type=novel&lead=male',
    img_url: <NovelIcon />,
    genretitle: 'Novels',
  },
  {
    href: '/explore?content_type=short&lead=male',
    img_url: <PoemIcon />,
    genretitle: 'Shorts',
  },
  {
    href: '/explore?content_type=poem&lead=male',
    img_url: <PoemIcon />,
    genretitle: 'Poems',
  },
]

export const RankingTextAndNestedRoute = [
  {
    text: 'Novel Ranking',
    explore: 'ranking',
    section: 'novel',
    high: '',
  },
  {
    text: 'Poems Ranking',
    explore: 'ranking',
    section: 'poem',
    high: '',
  },
  {
    text: 'Shorts Ranking',
    explore: 'ranking',
    section: 'short',
    high: '',
  },
]
