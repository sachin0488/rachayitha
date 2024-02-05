import React from 'react'
import Link from 'next/link'
import { Tooltip } from '@mui/material'

import EditNoteRoundedIcon from '@mui/icons-material/EditNoteRounded'
import { ContentType } from 'modules/UserProfile/constants/common.constants'
import {
  CategoryName,
  Image,
  InfoLeft,
  InfoRight,
  InfoSection,
  Main,
  Rating,
  Root,
  StyledButton,
  StyledCornerButton,
  TitleName,
} from './CardCommonStyles'

const WorkContentCard = ({ item }) => {
  return (
    <Root>
      <Main>
        <Tooltip title="Edit in dashboard">
          <a
            href={
              item?.contentType === ContentType.BOOK
                ? `${process.env.NEXT_PUBLIC_DASHBOARD_URL}workspace/novel/${item.contentId}?slug=${item?.slug}`
                : `${process.env.NEXT_PUBLIC_DASHBOARD_URL}workspace/poem/${item.contentId}?slug=${item?.slug}`
            }
            target="_blank"
            rel="noreferrer">
            <StyledCornerButton variant="contained" sx={{ minWidth: 40, width: 40 }}>
              <EditNoteRoundedIcon />
            </StyledCornerButton>
          </a>
        </Tooltip>
        <Image alt="Cover Image" src={item?.coverImage && item?.coverImage.includes('http') ? item?.coverImage : '/alt-img.svg'} />
        <InfoSection>
          <InfoLeft>
            <TitleName variant="h6" component="div" noWrap>
              {item?.contentName}
            </TitleName>
            <CategoryName variant="subtitle2" noWrap width={'100%'}>
              {item?.category?.map(({ name }) => name).join(', ') || 'N/A'}
            </CategoryName>
          </InfoLeft>
          <InfoRight>
            <Rating variant="subtitle2">{item?.avgRatingValue ? parseFloat(item?.avgRatingValue).toFixed(1) : 0}</Rating>
          </InfoRight>
        </InfoSection>
      </Main>
      <Link href={`/${item?.contentType.toLowerCase()}/${item.contentId}/${item?.slug}`}>
        <a>
          <StyledButton color="primary" />
        </a>
      </Link>
    </Root>
  )
}

export default WorkContentCard
