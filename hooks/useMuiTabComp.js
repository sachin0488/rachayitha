import React from 'react'
import BookAboutContent from '../Container/BookDetail/Section/MuiTabComponent/BookAboutContent'
import BookTableOfContent from '../Container/BookDetail/Section/MuiTabComponent/BookTableOfContent'
import LikedComp from '../Container/BookDetail/Section/MuiTabComponent/LikedComp'
import CollectionGrowth from '../Container/Create/DashBoardSection/DashBoardStoriesSection/Components/MuiTabComp.js/CollectionGrowth'
import CumulativeCollection from '../Container/Create/DashBoardSection/DashBoardStoriesSection/Components/MuiTabComp.js/CumulativeCollection'
import DraftMuiTabComp from '../Container/Create/WorkspaceSection/Components/WorkSpaceMuiTabComp/DraftMuiTabComp'
import PublishedMuiTabComp from '../Container/Create/WorkspaceSection/Components/WorkSpaceMuiTabComp/PublishedMuiTabComp'
import TrashMuiTabComp from '../Container/Create/WorkspaceSection/Components/WorkSpaceMuiTabComp/TrashMuiTabComp'
import Badges from '../Container/UserProfile/Section/MuiTabComponents/Badges'
import UserLibrary from '../Container/UserProfile/Section/MuiTabComponents/UserLibrary'
import UserWorks from '../Container/UserProfile/Section/MuiTabComponents/UserWorks'
import NewestComp from 'Container/BookDetail/Section/MuiTabComponent/NewestComp'

export const genreLeadMuiTabList = [
  {
    labelComp: [
      {
        label: 'Male Lead',
        genre_lead: 'male',
      },
      {
        label: 'Female Lead',
        genre_lead: 'female',
      },
    ],
    component: [{}],
  },
]

export const bookAboutAndContentDetailMuiTabList = [
  {
    labelComp: [{ label: 'About' }, { label: 'Table of Content' }],
    component: [
      { com: <BookAboutContent />, index: 0 },
      { com: <BookTableOfContent />, index: 1 },
    ],
  },
]

export const bookLikedAndNewReviewDetailMuiTabList = [
  {
    labelComp: [{ label: 'Liked' }, { label: 'Newest' }],
    component: [
      { com: <LikedComp />, index: 0 },
      { com: <NewestComp />, index: 1 },
    ],
  },
]

export const UserProfileMuiTabList = [
  {
    labelComp: [{ label: 'Library' }, { label: 'Activity' }, { label: 'Original Works' }],
    component: [
      { com: <UserLibrary />, index: 0 },
      // { com: <Badges />, index: 1 },
      // { com: <UserWorks />, index: 2 },
    ],
  },
]

export const DashBoardReadingMuiTabList = [
  {
    labelComp: [{ label: 'COLLECTIONS GROWTH IN LAST DAY' }, { label: 'CUMULATIVE COLLECTIONS' }],
    component: [
      { com: <CollectionGrowth />, index: 0 },
      { com: <CumulativeCollection />, index: 1 },
    ],
  },
]

export const BookEditStatusMuiTabList = [
  {
    labelComp: [{ label: 'Draft (1)' }, { label: 'Published (2)' }, { label: 'Trash (0)' }],
    component: [
      { com: <DraftMuiTabComp />, index: 0 },
      { com: <PublishedMuiTabComp />, index: 1 },
      { com: <TrashMuiTabComp />, index: 2 },
    ],
  },
]

export const NewChapterMuiTableList = [
  {
    img_url: 'https://res.cloudinary.com/dk6twrko6/image/upload/v1668423990/Rectangle_259_q2ybhv.png',
    name: 'Dark desire unleased',
    state: 'Serializing',
    chapters: '2',
    words: '1948',
    views: '4.5k',
    collection: '1',
    operation: 'edit',
  },
  {
    img_url: 'https://res.cloudinary.com/dk6twrko6/image/upload/v1668423990/Rectangle_259_q2ybhv.png',
    name: 'Dark desire unleased',
    state: 'Serializing',
    chapters: '2',
    words: '1948',
    views: '4.5k',
    collection: '1',
    operation: 'edit',
  },
  {
    img_url: 'https://res.cloudinary.com/dk6twrko6/image/upload/v1668423990/Rectangle_259_q2ybhv.png',
    name: 'Dark desire unleased',
    state: 'Serializing',
    chapters: '2',
    words: '1948',
    views: '4.5k',
    collection: '1',
    operation: 'edit',
  },
]
