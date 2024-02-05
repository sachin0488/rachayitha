import React from 'react'
import Link from 'next/link'

import { UserProfileQuery } from 'modules/UserProfile/constants/query.address'
import ToggleToLibraryButton from './ToggleToLibraryButton'
import { useUserService } from 'modules/Auth/service/User.service'
import {
  TitleName,
  CategoryName,
  Image,
  InfoLeft,
  InfoRight,
  InfoSection,
  Main,
  Rating,
  Root,
  StyledButton,
} from '../../ProfileTabs/components/CardCommonStyles'

const WorkContentCard = ({ item, authorId }) => {
  const { isLoggedIn } = useUserService()

  return (
    <Root>
      <Main>
        {isLoggedIn ? (
          <ToggleToLibraryButton
            contentId={item?.contentId}
            libraryAdded={item?.libraryAdded}
            contentType={item?.contentType}
            queryKey={[UserProfileQuery.AUTHOR_WORKS, { contentType: item?.contentType, authorId }]}
          />
        ) : (
          <></>
        )}
        <Image alt="Cover Image" src={item?.coverImage && item?.coverImage.includes('http') ? item?.coverImage : '/alt-img.svg'} />
        <InfoSection>
          <InfoLeft>
            <TitleName component="h6" noWrap>
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
