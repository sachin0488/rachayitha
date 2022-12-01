import styled from '@emotion/styled'
import { FormControl, formControlClasses, InputLabel, MenuItem, Select, selectClasses } from '@mui/material'
import React, { useState } from 'react'
import { laptop, mobileM } from '../../../../../styles/mediaQuery/breakPoints'

const LanguageSelectComp = ({ textColor, background, selectMargin, label }) => {
  const [content, setContent] = useState('')
  const handleChange = event => {
    setContent(event.target.value)
  }
  const menuItems = [
    {
      name: 'English',
      value: 'NO',
    },
    {
      name: 'Hindi',
      value: 'PO',
    },
  ]
  return (
    <>
      <StyledFormControl selectMargin={selectMargin} variant="standard">
        <StyledInputLabel id="demo-simple-select-standard-label">{label}</StyledInputLabel>
        <StyledSelect
          text_Color={textColor}
          back_ground={background}
          label={label}
          select
          value={content}
          onChange={handleChange}
          fullWidth
          sx={{
            '& .MuiSvgIcon-root': {
              color: '#5629c5',
              paddingTop: '4px',
            },
          }}
          variant="standard"
          disableUnderline>
          {menuItems.map(items => (
            <MenuItem value={items.value}>{items.name}</MenuItem>
          ))}
        </StyledSelect>
      </StyledFormControl>
    </>
  )
}

export default LanguageSelectComp

const StyledSelect = styled(Select)`
  &${selectClasses.root} {
    color: ${({ text_Color }) => text_Color || 'white'};
    background-color: ${({ back_ground }) => back_ground || 'transparent'};
  }
`

const StyledInputLabel = styled(InputLabel)`
  color: #5629c5;
  padding: 0px 0px 0px 5px;
  margin-top: -13px;
  font-size: 12px;
  @media ${mobileM} {
    font-size: large;
    margin-top: -16px;
  }
`

const StyledFormControl = styled(FormControl)`
  &.${formControlClasses.root} {
    width: 88px;
    @media ${mobileM} {
      width: 110px;
    }
    display: flex;
    align-items: center;
    height: 35px;
    border: 2px solid #5629c5;
    border-radius: 3px;
  }
  /* & .MuiInputBase-root  */
  & .MuiInputBase-root {
    margin-top: 0;
    /* margin-bottom: ${({ selectMargin }) => selectMargin}; */
  }
  & .MuiSelect-select {
    padding: 2px 0px 0px 8px;
    background-color: transparent;
    color: #5629c5;
  }
`
