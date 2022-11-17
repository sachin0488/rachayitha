import Link from "next/link";
import React from "react";
import {
  AccordionDetailAuthorAndNovelNameWrapper,
  AccordionDetailAuthorNameTextSize,
  AccordionDetailButtonWrapper,
  AccordionDetailNovelNameTextSize,
  AccordionDetailNovelWrapper,
  AccordionNovelDetailLowerSectionSubWrapper,
  AccordionNovelDetailLowerSectionWrapper,
  AccordionNovelDetailUpperRightSection,
  AccordionNovelDetailUpperSectionWrapper,
  AccordionNovelImg,
  CollectionDataTextSize,
  CollectionHeadingTextSize,
  CreateNewButton,
  DetailButton,
  NewChapterButton,
} from "../../CreateStyle";

const AccordionDetailNovelComp = () => {
  const novelImg =
    "https://res.cloudinary.com/dk6twrko6/image/upload/v1668423990/Rectangle_259_q2ybhv.png";
  return (
    <>
      <AccordionDetailNovelWrapper>
        <AccordionNovelDetailUpperSectionWrapper>
          <AccordionNovelImg src={novelImg} />
          <AccordionNovelDetailUpperRightSection>
            <AccordionDetailAuthorAndNovelNameWrapper>
              <AccordionDetailNovelNameTextSize>
                Against The World
              </AccordionDetailNovelNameTextSize>
              <AccordionDetailAuthorNameTextSize>
                Shubham Kr Kurrey
              </AccordionDetailAuthorNameTextSize>
            </AccordionDetailAuthorAndNovelNameWrapper>
            <AccordionDetailButtonWrapper>
              <Link href={`stories/new_chapter`}>
                <NewChapterButton>NEW CHAPTER</NewChapterButton>
              </Link>
              <DetailButton>Detail</DetailButton>
            </AccordionDetailButtonWrapper>
          </AccordionNovelDetailUpperRightSection>
        </AccordionNovelDetailUpperSectionWrapper>
        <AccordionNovelDetailLowerSectionWrapper>
          <AccordionNovelDetailLowerSectionSubWrapper>
            <CollectionHeadingTextSize>Collections</CollectionHeadingTextSize>
            <CollectionDataTextSize>1</CollectionDataTextSize>
          </AccordionNovelDetailLowerSectionSubWrapper>
          <AccordionNovelDetailLowerSectionSubWrapper>
            <CollectionHeadingTextSize>Views</CollectionHeadingTextSize>
            <CollectionDataTextSize>4.51K</CollectionDataTextSize>
          </AccordionNovelDetailLowerSectionSubWrapper>
          <AccordionNovelDetailLowerSectionSubWrapper>
            <CollectionHeadingTextSize>Words</CollectionHeadingTextSize>
            <CollectionDataTextSize>1.9k</CollectionDataTextSize>
          </AccordionNovelDetailLowerSectionSubWrapper>
          <AccordionNovelDetailLowerSectionSubWrapper>
            <CollectionHeadingTextSize>Chapters</CollectionHeadingTextSize>
            <CollectionDataTextSize>2</CollectionDataTextSize>
          </AccordionNovelDetailLowerSectionSubWrapper>
        </AccordionNovelDetailLowerSectionWrapper>
      </AccordionDetailNovelWrapper>
    </>
  );
};

export default AccordionDetailNovelComp;
