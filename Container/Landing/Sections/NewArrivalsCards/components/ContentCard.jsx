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

export const cloudinary = 'https://res.cloudinary.com/dk6twrko6/image/upload/v1666521938/Rectangle_137_mmfqe3.png'

const ContentCard = ({ item }) => {
  //   console.log('new Arrival')
  const { handleAddToLibrary } = useAddToLibraryAPI()
  return (
    <>
      <NewArrivalContentCard key={item.id}>
        <AddIcon color="primary" variant="contained" onClick={() => handleAddToLibrary(item.id)}>
          <AddOutlinedIcon />
        </AddIcon>
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
    </>
  )
}

export default ContentCard
