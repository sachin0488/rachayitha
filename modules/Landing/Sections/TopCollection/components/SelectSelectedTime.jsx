import styled from '@emotion/styled'
import { FormControl, FormHelperText } from '@mui/material'
import { InputLabel, Select, MenuItem } from '@mui/material'
import { useController, useFormContext } from 'react-hook-form'

import KeyboardArrowDownRoundedIcon from '@mui/icons-material/KeyboardArrowDownRounded'

const SelectSelectedTime = ({ name, label, menuList, disabled, ...props }) => {
  const { rules, helperText, required, sx } = props

  const formContext = useFormContext()
  const { control, errors } = formContext

  const { field } = useController({
    name,
    control,
    rules,
    defaultValue: '',
  })

  const labelId = `${name}-label`
  const errorMessage = errors?.[name]?.message

  const isError = Boolean(errorMessage)
  const isRequired = required || Boolean(rules?.required)

  const selectProps = {
    id: name,
    labelId: labelId,
    label: label,
    required: isRequired,
    IconComponent: KeyboardArrowDownRoundedIcon,
    name: name,
    inputRef: field.ref,
    onBlur: field.onBlur,
    onChange: field.onChange,
    value: formContext.watch(name),
  }

  const _menuItemsMapping = (item, index) => (
    <StyledMenuItems id={index} value={item.value} key={index}>
      {item.label}
    </StyledMenuItems>
  )

  return (
    <Root variant="standard" size="small" error={isError ? isError : undefined} sx={sx} defaultValue="" disabled={disabled}>
      <StyledSelectPaper {...selectProps}>{menuList.map(_menuItemsMapping)}</StyledSelectPaper>

      <FormHelperText>{helperText}</FormHelperText>
    </Root>
  )
}

const Root = styled(FormControl)`
  margin-top: 0px;
  margin-left: 9px;
  @media (max-width: 484px) {
    margin-top: 7px;
    margin-left: 0px;
  }
  .MuiOutlinedInput-root {
    font-weight: 600;
    font-size: 29px;
  }

  .MuiSvgIcon-root {
    color: ${({ theme }) => theme.palette.primary.main};
    font-size: 35px;
    margin-right: -15px;
    @media (max-width: 390px) {
      font-size: 20px;
    }
  }

  @media (max-width: 390px) {
    margin-right: auto;
    .MuiOutlinedInput-root {
      font-size: 20px;
    }
    .MuiSvgIcon-root {
      font-size: 28px;
    }
  }

  .MuiFormHelperText-root {
    display: none;
  }
  .MuiInputBase-root::before {
    border-bottom: 0px;
    display: none;
  }
  .MuiInputBase-root::after {
    border-bottom: 0px;
    display: none;
  }
  .MuiSelect-select {
    background: transparent;
  }
`

const StyledSelectPaper = styled(Select)`
  font-weight: 600;
  font-size: 28px;

  line-height: 1.4;
  color: ${props => props.theme.palette.primary.main};
  background-color: transparent;
  @media (max-width: 350px) {
    font-size: 25px;
  }
  @media (max-width: 390px) {
    font-size: 20px;
  }
`

const StyledMenuItems = styled(MenuItem)`
  font-weight: 600;
  font-size: 23px;
  color: ${props => props.theme.palette.secondary.main}aa;
  padding-top: 6px;
  padding-bottom: 6px;
  padding-left: 14px;
  padding-right: 14px;
  @media (max-width: 390px) {
    font-weight: 500;
    font-size: 16px;
    padding: 0px 15px;
    padding-top: 0px;
    padding-bottom: 0px;
    max-height: 36px;
    min-height: 36px;
  }
`

export default SelectSelectedTime
