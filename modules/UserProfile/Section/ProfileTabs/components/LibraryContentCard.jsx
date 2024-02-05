import Link from 'next/link'

import ToggleToLibraryButton from './ToggleToLibraryButton'

import { CategoryName, Image, InfoLeft, InfoRight, InfoSection, Main, Rating, Root, StyledButton, TitleName } from './CardCommonStyles'

const LibraryContentCard = ({ item, contentType }) => {
  return (
    <Root>
      <Main>
        <ToggleToLibraryButton contentId={item?.contentId} libraryAdded={item?.libraryAdded} contentType={contentType} />

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

      <Link href={`/${contentType}/${item.contentId}/${item?.slug}`}>
        <a>
          <StyledButton color="primary" />
        </a>
      </Link>
    </Root>
  )
}

export default LibraryContentCard
