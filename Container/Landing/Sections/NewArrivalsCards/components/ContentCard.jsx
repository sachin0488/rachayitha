import React from 'react'
import {
  NewArrivalContentCard,
  RatingAndFantasySection,
  StoryHeading,
  ImgWrapper,
  Img,
  Fantasy,
} from '../NewArrivalCardsStyle'
import { useAddToLibraryAPI } from 'Container/BookDetail/api/bookDetail.hook'
import AddOutlinedIcon from '@mui/icons-material/AddOutlined'
import { AddIcon } from '../../WeeklyFeatured/components/ContentCard'
import Link from 'next/link'
import { selectUser } from 'store/slices/global/user.slice'
import { useSelector } from 'react-redux'

export const cloudinary = 'https://res.cloudinary.com/dk6twrko6/image/upload/v1666521938/Rectangle_137_mmfqe3.png'

const ContentCard = ({ item }) => {
  const { handleAddToLibrary } = useAddToLibraryAPI()
  const { isLoggedIn } = useSelector(selectUser)
  return (
    <>
      <Link href={isLoggedIn ? `/book/${item.id}` : `/login`}>
        <NewArrivalContentCard key={item.id}>
          {isLoggedIn ? (
            <AddIcon color="primary" variant="contained" onClick={() => handleAddToLibrary(item.id)}>
              <AddOutlinedIcon />
            </AddIcon>
          ) : (
            <></>
          )}
          <ImgWrapper>
            {' '}
            <Img src={cloudinary} />
          </ImgWrapper>
          <StoryHeading>{item?.book_name}</StoryHeading>
          <RatingAndFantasySection>
            {item?.category.map(category => (
              <Fantasy>{category.name}</Fantasy>
            ))}
          </RatingAndFantasySection>
        </NewArrivalContentCard>
      </Link>
    </>
  )
}

export default ContentCard
