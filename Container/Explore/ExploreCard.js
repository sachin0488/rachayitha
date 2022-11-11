import React from "react";
import {
  Cards,
  CardsSubWrapper,
  CardLeftSideContent,
  CardRightSideContent,
  Img,
  Title,
  ParagraphText,
  ButtonContainer,
  HashTagComp,
} from "./ExploreStyle";
import Link from "next/link";
const ExploreCard = ({ card, index }) => {
  return (
    <>
      <Link href={`/book/${card.id}`}>
        <CardsSubWrapper key={index}>
          <Cards>
            <CardLeftSideContent>
              <Img src={card.img} />
            </CardLeftSideContent>
            <CardRightSideContent>
              <ButtonContainer>
                {card.hashtag.map((hash) => (
                  <HashTagComp>{hash}</HashTagComp>
                ))}
              </ButtonContainer>
              <Title>{card.title}</Title>
              <ParagraphText>{card.paragraph}</ParagraphText>
            </CardRightSideContent>
          </Cards>
        </CardsSubWrapper>
      </Link>
    </>
  );
};

export default ExploreCard;
