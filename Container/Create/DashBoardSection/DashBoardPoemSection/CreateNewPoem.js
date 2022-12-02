import { TextField } from '@mui/material'
import React from 'react'
import { AiFillPlusCircle } from 'react-icons/ai'
import { HiDownload } from 'react-icons/hi'
import MuiSelect from '../../../../Components/GenreMenuBarComp/Components/MuiSelect'
import RadioGroupMui from '../../../../Components/RadioGroup/RadioGroupMui'
import CreatePageLeftSection from '../../Components/CreatePageLeftSection'
import {
  CoverPhotoText,
  CreateNewButtonComp,
  CreateNewHeadingText,
  CreateNewHeadingUploadImgWrapper,
  CreateNewLabelAndInputWrapper,
  CreateNewRadioGroupWrapper,
  CreateNewSelectCompWrapper,
  CreateNewSubWrapper,
  CreateNewSubWrapperLeftSection,
  CreateNewSubWrapperRightSection,
  CreateNewTextField,
  CreateNewWrapper,
  Label,
  LabelBelowTextField,
  MultipleLabelAndInputContainer,
  MultipleRadioGroupContainer,
  UploadButton,
  UploadButtonWrapper,
  UploadImgSubWrapper,
  UploadImgWrapper,
  Wrapper,
  WrapperRightSideSection,
} from '../../CreateStyle'
import DashBoard from '../DashBoardSection'

const CreateNewPoem = () => {
  const createNewMenuItems = [
    {
      name: 'novel',
      value: 'NO',
    },
    {
      name: 'poem',
      value: 'PO',
    },
  ]
  return (
    <>
      <Wrapper>
        <CreatePageLeftSection />
        <WrapperRightSideSection>
          <DashBoard />
          <CreateNewWrapper>
            <CreateNewSubWrapper>
              <CreateNewSubWrapperLeftSection>
                <CreateNewHeadingUploadImgWrapper>
                  <CreateNewHeadingText>Poem Information</CreateNewHeadingText>
                  <UploadImgWrapper>
                    <UploadImgSubWrapper component="label">
                      <AiFillPlusCircle size="35px" />

                      <input type="file" hidden />
                      <UploadButtonWrapper>
                        {' '}
                        <UploadButton>
                          <HiDownload />
                          Upload
                        </UploadButton>
                        <CoverPhotoText>**COVER PHOTO**</CoverPhotoText>
                      </UploadButtonWrapper>
                    </UploadImgSubWrapper>
                  </UploadImgWrapper>
                </CreateNewHeadingUploadImgWrapper>
                <MultipleLabelAndInputContainer>
                  <CreateNewLabelAndInputWrapper>
                    <Label>NAME</Label>
                    <CreateNewTextField variant="outlined" size="small" />
                    <LabelBelowTextField>Within 70 characters</LabelBelowTextField>
                  </CreateNewLabelAndInputWrapper>
                  <CreateNewRadioGroupWrapper>
                    <Label>* LEADING GENDER</Label>

                    <RadioGroupMui />
                  </CreateNewRadioGroupWrapper>
                </MultipleLabelAndInputContainer>
                <MultipleLabelAndInputContainer>
                  <CreateNewLabelAndInputWrapper>
                    <Label>ABBREVIATION</Label>
                    <CreateNewTextField variant="outlined" size="small" />
                    <LabelBelowTextField>Within 15 words</LabelBelowTextField>
                  </CreateNewLabelAndInputWrapper>
                  <CreateNewLabelAndInputWrapper>
                    <Label>LANGUAGE</Label>
                    <CreateNewSelectCompWrapper>
                      <MuiSelect
                        menuItems={createNewMenuItems}
                        textColor="black"
                        background="white"
                        selectMargin="4px"
                      />
                    </CreateNewSelectCompWrapper>
                  </CreateNewLabelAndInputWrapper>
                </MultipleLabelAndInputContainer>

                <CreateNewLabelAndInputWrapper>
                  <Label>ABBREVIATION</Label>
                  <CreateNewSelectCompWrapper>
                    <MuiSelect menuItems={createNewMenuItems} textColor="black" background="white" selectMargin="4px" />
                  </CreateNewSelectCompWrapper>
                  <LabelBelowTextField>Within 15 words</LabelBelowTextField>
                </CreateNewLabelAndInputWrapper>

                <CreateNewLabelAndInputWrapper>
                  <Label>TAG CATEGORY</Label>
                  <CreateNewTextField variant="outlined" size="small" />
                  <LabelBelowTextField>Tag Category of similar content.</LabelBelowTextField>
                </CreateNewLabelAndInputWrapper>
                <CreateNewButtonComp>Create</CreateNewButtonComp>
              </CreateNewSubWrapperLeftSection>
            </CreateNewSubWrapper>
          </CreateNewWrapper>
        </WrapperRightSideSection>
      </Wrapper>
    </>
  )
}

export default CreateNewPoem
