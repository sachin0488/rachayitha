import { Typography } from "@mui/material";
import Image from "next/image";
import React from "react";
import RatingStar from "../../Components/RatingComp/Rating";
import ProfileImg from "../../public/profileImg.png";
import ReplyImg from "../../public/reply.png";
import LikeImg from "../../public/like.png";
import CommentImg from "../../public/comment.png";
import {
  CommentSectionSubWrapper,
  CommentSectionSubWrapperRightSideContent,
  ShareFontSize,
  ReplyLikeAndCommentSection,
  RepliesSection,
  LikeAndCommentSection,
  Months,
  Replies,
  UserName,
} from "./BookDetailStyle";
const LikedComp = () => {
  return (
    <>
      <CommentSectionSubWrapper>
        <Image src={ProfileImg} />
        <CommentSectionSubWrapperRightSideContent>
          <UserName>Guiltythree</UserName>
          <RatingStar value="5" />
          <ShareFontSize>
            Shameless author here :) Writing a review for your own book is not
            easy, so I'll just say a few things. Also, if you have any questions
            about the novel, you can leave them in the comments!
          </ShareFontSize>
          <Months>4 months</Months>
          <ReplyLikeAndCommentSection>
            <RepliesSection>
              <Image src={ReplyImg} />
              <Replies>32 replies</Replies>
            </RepliesSection>
            <LikeAndCommentSection>
              <Image src={LikeImg} />
              <Image src={CommentImg} />
            </LikeAndCommentSection>
          </ReplyLikeAndCommentSection>
        </CommentSectionSubWrapperRightSideContent>
      </CommentSectionSubWrapper>
      <CommentSectionSubWrapper>
        <Image src={ProfileImg} />
        <CommentSectionSubWrapperRightSideContent>
          <UserName>Guiltythree</UserName>
          <RatingStar value="5" />
          <ShareFontSize>
            Shameless author here :) Writing a review for your own book is not
            easy, so I'll just say a few things. Also, if you have any questions
            about the novel, you can leave them in the comments!
          </ShareFontSize>
          <Months>4 months</Months>
          <ReplyLikeAndCommentSection>
            <RepliesSection>
              <Image src={ReplyImg} />
              <Replies>32 replies</Replies>
            </RepliesSection>
            <LikeAndCommentSection>
              <Image src={LikeImg} />
              <Image src={CommentImg} />
            </LikeAndCommentSection>
          </ReplyLikeAndCommentSection>
        </CommentSectionSubWrapperRightSideContent>
      </CommentSectionSubWrapper>
    </>
  );
};

export default LikedComp;
