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
} from "./BookDetailStyle";
const LikedComp = () => {
  return (
    <>
      <CommentSectionSubWrapper>
        <Image src={ProfileImg} />
        <CommentSectionSubWrapperRightSideContent>
          <Typography
            style={{ fontSize: "15px", fontWeight: "700", lineHeight: "18px" }}
          >
            Guiltythree
          </Typography>
          <RatingStar value="5" />
          <ShareFontSize>
            Shameless author here :) Writing a review for your own book is not
            easy, so I'll just say a few things. Also, if you have any questions
            about the novel, you can leave them in the comments!
          </ShareFontSize>
          <Typography color="#656565" fontSize="11px" fontWeight="200">
            4 months
          </Typography>
          <ReplyLikeAndCommentSection>
            <RepliesSection>
              <Image src={ReplyImg} />
              <Typography color="#5A2CC6" fontSize="11px" fontWeight="200">
                32 replies
              </Typography>
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
          <Typography
            style={{ fontSize: "15px", fontWeight: "700", lineHeight: "18px" }}
          >
            Guiltythree
          </Typography>
          <RatingStar value="5" />
          <ShareFontSize>
            Shameless author here :) Writing a review for your own book is not
            easy, so I'll just say a few things. Also, if you have any questions
            about the novel, you can leave them in the comments!
          </ShareFontSize>
          <Typography color="#656565" fontSize="11px" fontWeight="200">
            4 months
          </Typography>
          <ReplyLikeAndCommentSection>
            <RepliesSection>
              <Image src={ReplyImg} />
              <Typography color="#5A2CC6" fontSize="11px" fontWeight="200">
                32 replies
              </Typography>
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
