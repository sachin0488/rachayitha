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
import styled from '@emotion/styled'

export const cloudinary = 'https://res.cloudinary.com/dk6twrko6/image/upload/v1666521938/Rectangle_137_mmfqe3.png'

const ContentCard = ({ item }) => {
  const { handleAddToLibrary } = useAddToLibraryAPI()
  const { isLoggedIn } = useSelector(selectUser)
  return (
    <>
      <NewArrivalContentCard key={item.id}>
        {isLoggedIn ? (
          <AddIcon color="primary" variant="contained" onClick={() => handleAddToLibrary(item.id)}>
            <AddOutlinedIcon />
          </AddIcon>
        ) : (
          <></>
        )}
        <Link href={isLoggedIn ? `/book/${item.id}` : `/login`}>
          <SubRoot>
            <ImgWrapper>
              <Img src={cloudinary} />
            </ImgWrapper>
            <StoryHeading>{item?.book_name}</StoryHeading>
            <RatingAndFantasySection>
              {item?.category.map(category => (
                <Fantasy>{category.name}</Fantasy>
              ))}
            </RatingAndFantasySection>
          </SubRoot>
        </Link>
      </NewArrivalContentCard>
    </>
  )
}

export default ContentCard

const SubRoot = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  &:hover {
    border-color: #582ac5;
    transform: scale(1.01, 1.01);
    transition-duration: 0.7s;
  }
  width: 100%;
  gap: 8px;
`
