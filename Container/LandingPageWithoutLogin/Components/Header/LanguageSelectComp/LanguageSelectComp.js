import styled from '@emotion/styled'
import { FormControl, formControlClasses, InputLabel, MenuItem, Select, selectClasses } from '@mui/material'
import React, { useState } from 'react'
import { laptop } from '../../../../../styles/mediaQuery/breakPoints'

const LanguageSelectComp = ({ textColor, background, selectMargin, label }) => {
  const [content, setContent] = useState('')
  const handleChange = event => {
    setContent(event.target.value)
  }
  const menuItems = [
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
              color: 'purple',
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
  font-size: 14px;
  @media ${laptop} {
    font-size: large;
  }
`

const StyledFormControl = styled(FormControl)`
  &.${formControlClasses.root} {
    min-width: 100%;
    /* height: 40px; */
    display: flex;
  }
  & .MuiInputBase-root {
    margin-bottom: ${({ selectMargin }) => selectMargin};
  }
  & .MuiSelect-select {
    background-color: transparent;
  }
`
