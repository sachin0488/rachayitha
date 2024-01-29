import styled from '@emotion/styled'

import { useController, useFormContext } from 'react-hook-form'
import { TextField, Tooltip } from '@mui/material'

const StyledTextField = ({ name, label, rules, required, Icon, disabled, ...props }) => {
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
  if (disabled)
    return (
      <Tooltip title={`Your cannot change ${label}`}>
        <StyledTextFieldRoot {...rootProps} disabled={disabled} />
      </Tooltip>
    )

  return <StyledTextFieldRoot {...rootProps} />
}

export const StyledTextFieldRoot = styled(TextField)`
  .MuiInputBase-input {
    box-shadow: black !important;
  }

  .MuiOutlinedInput-root {
    font-size: 0.9rem;
  }

  .MuiInputLabel-asterisk {
    font-size: 0.9rem;
  }

  .MuiOutlinedInput-notchedOutline {
    border-color: ${({ theme }) => theme.palette?.secondary?.main}35;
    border-width: 2px;
  }

  .MuiInputLabel-root {
    font-size: 0.9rem;
    color: ${({ theme }) => theme.palette?.secondary?.main}d1;
    font-weight: 600;
    line-height: 1;
  }

  .MuiInputLabel-root.Mui-focused {
    color: ${({ theme }) => theme.palette?.primary?.main};
  }

  .MuiOutlinedInput-input {
    padding-inline: 14px;
    padding-block: 12px;

    -webkit-autofill {
      box-shadow: none;
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

  /* Existing styles */

  /* .MuiOutlinedInput-root.Mui-disabled .MuiOutlinedInput-notchedOutline {
    border-color: ${({ theme }) => theme.palette?.secondary?.main}35;
   
  }

  .MuiInputLabel-root.Mui-disabled {
    color: ${({ theme }) => theme.palette?.secondary?.main}d1;
 
  } */

  /* Existing styles */
`
export default StyledTextField
