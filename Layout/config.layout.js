import AutoStoriesOutlinedIcon from '@mui/icons-material/AutoStoriesOutlined'
import StarHalfOutlinedIcon from '@mui/icons-material/StarHalfOutlined'
import BookOutlinedIcon from '@mui/icons-material/BookOutlined'
import BorderColorOutlinedIcon from '@mui/icons-material/BorderColorOutlined'
import EmojiEventsRoundedIcon from '@mui/icons-material/EmojiEventsRounded'

export const NavPageLinks = [
  {
    Icon: AutoStoriesOutlinedIcon,
    label: 'Explore',
    path: '/explore',
    link: '/explore?content_type=book&category=0&sort_by=hot',
    forLoggedInOnly: false,
  },
  {
    Icon: StarHalfOutlinedIcon,
    label: 'Ranking',
    path: '/ranking',
    link: '/ranking?content_type=book&category=0',
    forLoggedInOnly: false,
  },
  {
    Icon: EmojiEventsRoundedIcon,
    label: 'Spirity',
    path: '/contest',
    link: '/contest',
    forLoggedInOnly: false,
  },
  {
    Icon: BorderColorOutlinedIcon,
    label: 'Create',
    path: '/create',
    link: process.env.NEXT_PUBLIC_DASHBOARD_URL,
    forLoggedInOnly: true,
    openInNewTab: true,
  },
  {
    Icon: BookOutlinedIcon,
    label: 'Library',
    path: '/profile',
    link: '/profile',
    forLoggedInOnly: true,
  },
]
