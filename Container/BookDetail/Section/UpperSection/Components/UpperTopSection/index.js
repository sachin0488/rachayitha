import RatingStar from 'Components/RatingComp/Rating'
import {
  AddToLibraryButton,
  Author,
  AuthorText,
  BookDetailCardLeftSection,
  BookDetailCardRightSection,
  FantasyAndViewSection,
  Img,
  MuiTabWrapper,
  RatingSectionComp,
  ReadButton,
  StarText,
  Text,
  Title,
  TitleFantasyViewSection,
} from 'Container/BookDetail/Common/BookDetailStyle'
import AddCircleOutlinedIcon from '@mui/icons-material/AddCircleOutlined'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'
import { GrFormView } from 'react-icons/gr'
import MuiTabs from 'Components/MuiTabs/MuiTabs'
import Chapter from '../../../../../../public/chapter.png'
import { bookAboutAndContentDetailMuiTabList } from 'hooks/useMuiTabComp'
import { styles } from 'Container/BookDetail/Section/UpperSection/Components/UpperTopSection/MuiTabComponent/MuiTabStyles'
import { useAddToLibraryAPI } from 'Container/BookDetail/api/bookDetail.hook'
import { img_url } from '../RecommendedCard'
const UpperTopSection = ({ item }) => {
  const router = useRouter()
  const { book } = router.query
  const { handleAddToLibrary } = useAddToLibraryAPI()
  const handleClick = () => {
    handleAddToLibrary(router.query.book)
  }
  return (
    <>
      <BookDetailCardLeftSection>
        <Img src={img_url} />
      </BookDetailCardLeftSection>
      <BookDetailCardRightSection>
        <TitleFantasyViewSection>
          <Title>{item?.book_name}</Title>
          <FantasyAndViewSection>
            {item?.category?.map(category => (
              <Text>{category?.name}</Text>
            ))}

            <Text>
              <Image src={Chapter} /> {item?.chapter_count} Chapters
            </Text>
            <Text>
              <GrFormView /> 2.1 M Views
            </Text>
          </FantasyAndViewSection>
        </TitleFantasyViewSection>
        <TitleFantasyViewSection>
          <FantasyAndViewSection>
            <Author>Author :</Author>
            <AuthorText>Fruit of Chaos</AuthorText>
          </FantasyAndViewSection>
          <FantasyAndViewSection>
            <RatingStar value={item?.rating?.rate__avg} size="large" />
            <StarText>{item?.rating?.rate__avg}</StarText>
            <RatingSectionComp>(300 rating)</RatingSectionComp>
          </FantasyAndViewSection>
        </TitleFantasyViewSection>

        <FantasyAndViewSection>
          <Link href={`/book/${book}/${item?.chapter[0]?.id}`}>
            <ReadButton variant="contained">READ</ReadButton>
          </Link>
          <AddToLibraryButton onClick={handleClick} startIcon={<AddCircleOutlinedIcon style={IconStyle} />}>
            ADD TO LIBRARY
          </AddToLibraryButton>
        </FantasyAndViewSection>
        <MuiTabWrapper>
          <MuiTabs muiTab={bookAboutAndContentDetailMuiTabList} styles={styles} />
        </MuiTabWrapper>
      </BookDetailCardRightSection>
    </>
  )
}

export default UpperTopSection

const IconStyle = {
  color: '#5b2ec7',
  fontSize: '24px',
  // '@media (min-width:600px)': {
  //   fontSize: '27px',
  // },
}

// const Form = styled.form`
//   width: 100%;
//   height: 100%;
// `
