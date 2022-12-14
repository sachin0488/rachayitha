import React from 'react'
import { BsArrowLeft } from 'react-icons/bs'
import {
  NewChapterHeading,
  NewChapterLowerSection,
  NewChapterLowerSectionInputField,
  NewChapterLowerSectionInputFieldWrapper,
  NewChapterLowerSectionTextArea,
  NewChapterPublishButton,
  NewChapterSaveButton,
  NewChapterText,
  NewChapterUpperSection,
  NewChapterWrapper,
  RightSideHeaderSectionWrapper,
  RightSideHeaderSubSectionWrapper,
  Wrapper,
  WrapperRightSideSection,
} from '../../../CreateStyle'
import Link from 'next/link'
import LeftSideHeader from 'Container/Create/Layout/header/LeftSideHeader'

const NewChapter = () => {
  return (
    <>
      <Wrapper>
        <LeftSideHeader />
        <WrapperRightSideSection>
          <RightSideHeaderSectionWrapper>
            <RightSideHeaderSubSectionWrapper>
              <Link href={`/create/dashboard/stories`}>
                <BsArrowLeft size="20px" color="black" />
              </Link>
            </RightSideHeaderSubSectionWrapper>
            <NewChapterSaveButton>Save</NewChapterSaveButton>
            <NewChapterPublishButton>Publish</NewChapterPublishButton>
          </RightSideHeaderSectionWrapper>
          <NewChapterWrapper>
            <NewChapterUpperSection>
              <NewChapterHeading>Untitled</NewChapterHeading>
              <NewChapterText>New Chapter</NewChapterText>
            </NewChapterUpperSection>
            <NewChapterLowerSection>
              <NewChapterLowerSectionInputFieldWrapper>
                <NewChapterLowerSectionInputField
                  label="Type Text"
                  variant="standard"
                  size="small"
                  InputProps={{ disableUnderline: true }}
                />
              </NewChapterLowerSectionInputFieldWrapper>
              <NewChapterLowerSectionTextArea aria-label="empty textarea" placeholder="text" />
            </NewChapterLowerSection>
          </NewChapterWrapper>
        </WrapperRightSideSection>
      </Wrapper>
    </>
  )
}

export default NewChapter
