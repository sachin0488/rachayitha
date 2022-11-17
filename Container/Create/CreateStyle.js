import styled from "@emotion/styled";
import {
  Box,
  Button,
  TextareaAutosize,
  TextField,
  textFieldClasses,
  Typography,
} from "@mui/material";

export const Wrapper = styled(Box)`
  width: 100%;
  max-height: 100vh;
  background-color: white;
  display: flex;
  justify-content: start;
  align-items: flex-start;
`;

export const WrapperLeftSideSection = styled(Box)`
  width: 18%;
  min-height: 100vh;
  display: flex;
  justify-content: start;
  align-items: flex-start;
  gap: 35px;
  flex-direction: column;
  box-shadow: 4px 0px 4px rgba(0, 0, 0, 0.1);
`;

export const LinkContainer = styled(Box)`
  display: flex;
  justify-content: start;
  align-items: flex-start;
  flex-direction: column;
  gap: 13px;
  width: 100%;
  height: 50%;
  cursor: pointer;
`;

export const IndividualLink = styled(Box)`
  display: flex;
  justify-content: start;
  align-items: center;
  gap: 17px;
  width: 100%;
  padding: 10px 0px 10px 50px;
  border-left: 5px solid white;
`;
export const SubSectionIndividualLinkText = styled(Button)`
  font-size: 12px;
  line-height: 15px;
  color: #2f2d5c;
  padding-bottom: 18px;
  font-weight: 500;
`;
export const IndividualLinkText = styled(Typography)`
  font-weight: 600;
  font-size: 19px;
  line-height: 23px;
  color: #424247;
`;

export const WrapperRightSideSection = styled(Box)`
  width: 82%;
  height: 100%;
`;

export const RightSideHeaderSectionWrapper = styled(Box)`
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  height: 60px;
  padding: 20px 10px 0px 20px;

  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.1);
`;
export const RightSideHeaderSubSectionWrapper = styled(Box)`
  width: 80%;
  height: 100%;
  display: flex;
  justify-content: start;
  align-items: flex-start;
  gap: 40px;
`;

export const UserProfileImgNameWrapper = styled(Box)`
  width: 100%;
  height: 280px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 15px;
`;

export const ImgComp = styled.img`
  border: 3px solid #7f5cc7;
  border-radius: 1240px;
`;

export const FIrstFictionWrapper = styled(Box)`
  width: 100%;
  height: 93vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const FirstFictionSubWrapper = styled(Box)`
  width: 91%;
  height: 89%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f6f3ff;
`;

export const CreateNewFictionWrapper = styled(Box)`
  display: flex;
  justify-content: start;
  align-items: center;
  gap: 30px;
  flex-direction: column;
`;

export const NoWorkTextWrapper = styled(Box)`
  display: flex;
  justify-content: start;
  align-items: center;
  gap: 10px;
  flex-direction: column;
`;

export const NoWorkText = styled(Typography)`
  font-weight: 700;
  font-size: 20px;
  line-height: 24px;
  color: #929292;
`;
export const CreateFirstFictionText = styled(Typography)`
  font-weight: 300;
  font-size: 15px;
  line-height: 18px;
  color: #929292;
`;

export const CreateNewButton = styled(Button)`
  border: 2px solid #673ccb;
  border-radius: 5px;
  line-height: 18px;
  font-size: 15px;
  padding: 4px 16px;
  color: #673ccb;
  text-transform: capitalize;
`;

export const UserGuide = styled(Button)`
  border: 1.5px solid #673ccb;
  border-radius: 5px;
  line-height: 18px;
  font-size: 15px;
  padding: 7px 16px;
  color: #673ccb;
  margin-bottom: 16px;
`;

export const DashBoardSectionWrapper = styled(Box)`
  width: 100%;
  height: 93%;
  display: flex;
  justify-content: center;
  align-items: flex-start;
`;
export const DashBoardSubWrapper = styled(Box)`
  width: 95%;
  gap: 20px;
  flex-direction: column;
  display: flex;
  justify-content: start;
  align-items: center;
  height: 100%;
  margin-top: 20px;
`;

export const AccordionDetailNovelWrapper = styled(Box)`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: start;
  flex-direction: column;
  padding: 25px 40px;
  align-items: flex-start;
  background-color: #f6f3ff;
  gap: 40px;
`;

export const AccordionNovelDetailUpperSectionWrapper = styled(Box)`
  display: flex;
  justify-content: start;
  align-items: flex-start;
  gap: 20px;
  width: 100%;
`;

export const AccordionNovelImg = styled.img`
  object-fit: cover;
`;

export const AccordionNovelDetailUpperRightSection = styled(Box)`
  display: flex;
  justify-content: start;
  flex-direction: column;
  gap: 41px;
  align-items: flex-start;
`;

export const AccordionDetailAuthorAndNovelNameWrapper = styled(Box)`
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: flex-start;
  gap: 8px;
`;

export const AccordionDetailButtonWrapper = styled(Box)`
  display: flex;
  justify-content: start;
  align-items: flex-start;
  gap: 10px;
`;
export const NewChapterButton = styled(Button)`
  background-color: #673ccb;
  padding: 7px 16px;
  border-radius: 5px;
  color: white;
  &:hover {
    color: #673ccb;
  }
`;

export const DetailButton = styled(Button)`
  background-color: transparent;
  padding: 6px 16px;
  border-radius: 5px;
  color: #673ccb;
  border: 1px solid #673ccb;
`;
export const AccordionDetailNovelNameTextSize = styled(Typography)`
  font-weight: 600;
  font-size: 18px;
  line-height: 22px;
`;

export const AccordionDetailAuthorNameTextSize = styled(Typography)`
  font-weight: 300;
  font-size: 12px;
  line-height: 15px;
`;

export const AccordionNovelDetailLowerSectionWrapper = styled(Box)`
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding: 0px 100px;
  align-items: center;
`;
export const AccordionNovelDetailLowerSectionSubWrapper = styled(Box)`
  display: flex;
  justify-content: start;
  flex-direction: column;
  align-items: center;
  gap: 7px;
`;

export const CollectionHeadingTextSize = styled(Typography)`
  font-weight: 500;
  font-size: 13px;
  line-height: 15px;
  letter-spacing: 0.06em;
  text-transform: capitalize;
  color: #6a6a6a;
`;

export const CollectionDataTextSize = styled(Typography)`
  font-weight: 400;
  font-size: 35px;
  line-height: 41px;
  letter-spacing: 0.06em;
  text-transform: capitalize;

  color: #000000;
`;

export const DashBoardStoriesReleaseStatWrapper = styled(Box)`
  display: flex;
  justify-content: start;
  flex-direction: column;
  align-items: flex-start;
  gap: 10px;
  width: 100%;
`;

export const ReleaseStatisticsIconTextWrapper = styled(Box)`
  display: flex;
  justify-content: start;
  align-items: center;
  gap: 6px;
  height: 30px;
`;

export const ReleaseStatisticsText = styled(Typography)`
  font-weight: 400;
  font-size: 15px;
  line-height: 18px;
  color: #000000;
`;
export const DashBoardStoriesReleaseStatSubWrapper = styled(Box)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 6px;
  padding: 20px 20px;
  background-color: #f6f3ff;
  width: 100%;
`;

export const DashBoardStoriesReleaseStatSubWrapperCard = styled(Box)`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  padding: 30px 20px;
  width: 24%;
  height: 190px;
  background-color: white;
`;

export const ReleaseStatCardLeftSectionWrapper = styled(Box)`
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: flex-start;
  width: 50%;
  height: 100%;
  gap: 15px;
`;

export const ReleaseStatCardRightSectionWrapper = styled(Box)`
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  width: 50%;
  height: 100%;
`;

export const WordCountText = styled(Typography)`
  font-weight: 400;
  font-size: 14px;
  line-height: 15px;
  color: #717174;
  height: 15px;
`;

export const PercentageIncreaseData = styled(Typography)`
  font-weight: 400;
  font-size: 13px;
  line-height: 16px;
  color: #673ccb;
`;

export const PercentageIncreaseDataWrapper = styled(Typography)`
  display: flex;
  justify-content: start;
  align-items: center;
  gap: 3px;
`;

export const NewChapterWrapper = styled(Box)`
  width: 100%;
  height: 93%;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: flex-start;
  padding: 15px 20px;
  gap: 10px;
`;
export const NewChapterUpperSection = styled(Box)`
  display: flex;
  justify-content: center;
  align-items: flex-end;
  gap: 19px;
  height: 30px;
`;

export const NewChapterLowerSection = styled(Box)`
  width: 100%;
  height: 90%;
  background-color: #f6f3ff;
`;

export const NewChapterLowerSectionInputFieldWrapper = styled(Box)`
  width: 100%;
  border-bottom: 3px solid white;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0px 16px;
`;

export const NewChapterLowerSectionInputField = styled(TextField)`
  width: 90%;
  background-color: transparent;
  margin-top: 10px;

  &.${textFieldClasses.root} {
    text-decoration: none;
  }
`;

export const NewChapterLowerSectionTextArea = styled(TextareaAutosize)`
  width: 100%;
  background-color: transparent;
  padding: 0px 16px;
  margin-top: 14px;
  min-height: 500px;
  border: none;
  outline: none;
  color: black;
`;

export const NewChapterText = styled(Typography)`
  font-weight: 400;
  font-size: 15px;
  line-height: 18px;
  color: #848484;
`;

export const NewChapterHeading = styled(Typography)`
  font-weight: 400;
  font-size: 18px;
  line-height: 22px;
  color: #000000;
`;

export const NewChapterPublishButton = styled(Button)`
  background: #673ccb;
  border: 1px solid #673ccb;
  border-radius: 5px;
  font-weight: 400;
  font-size: 14px;
  line-height: 17px;
  color: #ffffff;
  padding: 5px 10px;
  margin-bottom: 16px;
`;

export const NewChapterSaveButton = styled(Button)`
  background: transparent;
  border: 1px solid #673ccb;
  border-radius: 5px;
  font-weight: 400;
  font-size: 14px;
  line-height: 17px;
  color: #673ccb;
  padding: 5px 18px;
  margin-bottom: 16px;
`;

export const CreateNewWrapper = styled(Box)`
  width: 100%;
  height: 93%;
  display: flex;
  justify-content: center;
  align-items: flex-start;
`;

export const CreateNewSubWrapper = styled(Box)`
  width: 91%;
  height: 89%;
  display: flex;
  justify-content: start;
  align-items: flex-start;
  background-color: #f6f3ff;
  margin-top: 30px;
`;

export const CreateNewSubWrapperLeftSection = styled(Box)`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: start;
  align-items: flex-start;
  flex-direction: column;
  gap: 37px;
  padding: 25px 35px;
`;

export const CreateNewHeadingUploadImgWrapper = styled(Box)`
  width: 100%;
  height: 29%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 20px;
`;

export const MultipleLabelAndInputContainer = styled(Box)`
  width: 100%;
  height: 7%;
  display: flex;

  justify-content: start;
  gap: 4px;
  align-items: flex-start;
`;

export const CreateNewLabelAndInputWrapper = styled(Box)`
  width: 50%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 4px;
  align-items: flex-start;
`;

export const Label = styled.label`
  font-weight: 400;
  font-size: 16px;
  line-height: 21px;
  color: #484848;
`;

export const CreateNewTextField = styled(TextField)`
  width: 335px;
  height: 40px;
  background-color: #ffffff;
  border: 1px solid #dcdcdc;
  border-radius: 4px;
`;

export const CreateNewSelectCompWrapper = styled(Box)`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  width: 335px;
  height: 42px;

  background-color: #ffffff;
  border: 2px solid #dcdcdc;
  border-radius: 4px;
`;

export const CreateNewRadioGroupWrapper = styled(Box)`
  display: flex;
  justify-content: start;
  align-items: flex-start;
  flex-direction: column;
  width: 50%;
  gap: 16px;
`;

export const MultipleRadioGroupContainer = styled(Box)`
  display: flex;
  justify-content: start;
  align-items: flex-start;
  width: 100%;
  gap: 20px;
`;

export const LabelBelowTextField = styled.label`
  font-weight: 400;
  font-size: 11px;
  line-height: 13px;
  color: #808080;
`;

export const CreateNewHeadingText = styled(Typography)`
  font-weight: 700;
  font-size: 35px;
  line-height: 42px;
  color: #000000;
`;

export const CreateNewButtonComp = styled(Button)`
  background-color: #673ccb;
  padding: 11px 20px;
  border: 1px solid #673ccb;
  border-radius: 5px;
  color: white;
  &:hover {
    background-color: white;
    color: #673ccb;
  }
`;

export const UploadImgWrapper = styled(Box)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 30%;
`;

export const UploadImgSubWrapper = styled(Button)`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 20px;
  width: 160px;
  height: 200px;
  border-radius: 5px;
  border: 2px dashed #673ccb;
  background-color: white;
`;

export const UploadButton = styled(Button)`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 4px;
  border-radius: 5px;
  background-color: #f6f3ff;
  font-weight: 600;
  font-size: 15px;
  padding: 4px 15px;
`;

export const UploadButtonWrapper = styled(Box)`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5px;
  flex-direction: column;
`;

export const CoverPhotoText = styled(Box)`
  font-weight: 300;
  font-size: 8px;
  line-height: 9px;
  text-align: center;

  color: #686868;
`;

export const WorkSpaceSubWrapper = styled(Box)`
  width: 91%;
  height: 89%;
  display: flex;
  padding: 30px 30px;
  justify-content: center;
  align-items: flex-start;
  background-color: #f6f3ff;
`;
