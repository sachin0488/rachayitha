import NovelImg from '../../../public/novel.svg'
import PoemImg from '../../../public/poem.png'
import ShortImg from '../../../public/shorts.svg'

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

export const RankingTextAndNestedRoute = [
  {
    text: 'Novel Ranking',
    explore: 'ranking/novel',
    section: 'novel',
    high: '',
  },
  {
    text: 'Poems Ranking',
    explore: 'ranking/poem',
    section: 'poem',
    high: '',
  },
  {
    text: 'Shorts Ranking',
    explore: 'ranking/short',
    section: 'short',
    high: '',
  },
]
