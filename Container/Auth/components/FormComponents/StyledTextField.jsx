import styled from '@emotion/styled'

import { useController, useFormContext } from 'react-hook-form'
import { TextField } from '@mui/material'

const StyledTextField = ({ name, label, rules, required, ...props }) => {
  const formContext = useFormContext()
  const { control, errors } = formContext

  const { field } = useController({
    name,
    control,
    defaultValue: '',
    rules: {
      required: required,
      ...rules,
    },
  })

  const errorMessage = errors?.[name]?.message
  const isError = Boolean(errorMessage)

  const rootProps = {
    size: 'medium',
    error: isError ? isError : undefined,
    label: label,
    required: required || Boolean(rules?.required),
    ...field,
    value: formContext.watch(name),
    ...props,
  }
  return <StyledTextFieldRoot {...rootProps} />
}

export const StyledTextFieldRoot = styled(TextField)`
  .MuiInputBase-input {
    box-shadow: black !important;
    -webkit-box-shadow: black !important;
  }

  .MuiInputLabel-root {
    font-size: 0.94rem;
    line-height: 0.9;
    margin-top: -3px;
  }

  .MuiInputLabel-asterisk {
    font-size: 0.84rem;
    line-height: 1.445;
  }
  .MuiOutlinedInput-root {
    font-size: 0.81rem;
  }
  .MuiOutlinedInput-input {
    padding-inline: 14px;
    padding-block: 12px;
    /* padding: 8.5px 14px; */
    -webkit-autofill {
      box-shadow: none;
      -webkit-box-shadow: none;
      -webkit-text-fill-color: none;
    }
  }
  .MuiFilledInput-underline {
    background-color: rgb(255 255 255 / 4%);
  }

  .MuiFilledInput-underline::before {
    border-bottom: 2px solid rgb(255 255 255 / 0%);
  }
  .MuiFilledInput-underline::after {
    border-bottom: 3px solid ${({ theme }) => theme.palette.primary.main};
  }
`

export default StyledTextField
