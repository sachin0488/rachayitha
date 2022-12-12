import { Typography } from '@mui/material'
import Link from 'next/link'
import React from 'react'
import { BsArrowLeft } from 'react-icons/bs'
import MuiTabs from '../../../../Components/MuiTabs/MuiTabs'
import { bookAboutAndContentDetailMuiTabList, BookEditStatusMuiTabList } from '../../../../hooks/useMuiTabComp'
import {
  Author,
  AuthorText,
  FantasyAndViewSection,
  MuiTabWrapper,
  Title,
  TitleFantasyViewSection,
} from '../../../BookDetail/Common/BookDetailStyle'
import { styles } from '../../../BookDetail/Section/MuiTabComponent/MuiTabStyles'
import CreatePageLeftSection from '../../Components/CreatePageLeftSection'
import {
  RightSideHeaderSectionWrapper,
  RightSideHeaderSubSectionWrapper,
  UserGuide,
  Wrapper,
  WrapperRightSideSection,
  EditedBookName,
  FIrstFictionWrapper,
  EditBookUpperSectionWrapper,
  EditBookUpperRightSectionWrapper,
  ImgWrapper,
  EditBookLowerSectionWrapper,
  DateTimeText,
  EditBookSubWrapper,
  WorkSpaceBookStatusMuiTabStyled,
} from '../../CreateStyle'
import { novelImg } from '../../DashBoardSection/DashBoardStoriesSection/Components/AccordionDetailNovelComp'

const BookEdit = () => {
  return (
    <>
      <Wrapper>
        <CreatePageLeftSection />
        <WrapperRightSideSection>
          <RightSideHeaderSectionWrapper>
            <RightSideHeaderSubSectionWrapper>
              <Link href={`/create/workspace/stories`}>
                <BsArrowLeft size="20px" color="black" />
              </Link>
              <EditedBookName>Dark Desire Ulleased</EditedBookName>
            </RightSideHeaderSubSectionWrapper>
            <UserGuide>Add Chapter</UserGuide>
          </RightSideHeaderSectionWrapper>
          <FIrstFictionWrapper>
            <EditBookSubWrapper>
              <EditBookUpperSectionWrapper>
                <ImgWrapper src={novelImg} />
                <EditBookUpperRightSectionWrapper>
                  <TitleFantasyViewSection>
                    <Title>God Like Extraction</Title>
                    <FantasyAndViewSection>
                      <Author>Author :</Author>
                      <AuthorText>Fruit of Chaos</AuthorText>
                    </FantasyAndViewSection>
                  </TitleFantasyViewSection>
                  <MuiTabWrapper marginLeft="-15px">
                    <MuiTabs muiTab={bookAboutAndContentDetailMuiTabList} styles={styles} />
                  </MuiTabWrapper>
                </EditBookUpperRightSectionWrapper>
              </EditBookUpperSectionWrapper>
              <EditBookLowerSectionWrapper>
                <MuiTabs muiTab={BookEditStatusMuiTabList} styles={WorkSpaceBookStatusMuiTabStyled} />
                <DateTimeText>02:05 05 jul 2022</DateTimeText>
              </EditBookLowerSectionWrapper>
            </EditBookSubWrapper>
          </FIrstFictionWrapper>
        </WrapperRightSideSection>
      </Wrapper>
    </>
  )
}

export default BookEdit
