import styled from '@emotion/styled'

import { useController, useFormContext } from 'react-hook-form'
import { TextField, Typography } from '@mui/material'

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
    required: required || Boolean(rules?.required),
    ...props,
    ...field,
  }
  return (
    <Root>
      <Label variant="subtitle2" color="secondary">
        {label}
      </Label>
      <StyledTextFieldRoot {...rootProps} />
    </Root>
  )
}

const Root = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`
const Label = styled(Typography)`
  font-weight: 600;
`

const StyledTextFieldRoot = styled(TextField)`
  .MuiInputBase-input {
    box-shadow: black !important;
    -webkit-box-shadow: black !important;
  }

  .MuiInputLabel-asterisk {
    font-size: 0.9rem;
    line-height: 1.445;
  }

  .MuiOutlinedInput-root {
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
  }

  .MuiInputLabel-root.Mui-focused {
    color: ${({ theme }) => theme.palette?.primary?.main};
  }

  .MuiOutlinedInput-input {
    padding-inline: 14px;
    padding-block: 10px 10px;

    -webkit-autofill {
      box-shadow: none;
      -webkit-box-shadow: none;
      -webkit-text-fill-color: none;
    }
  }
  textarea.MuiOutlinedInput-input {
    padding-inline: 5px;
    padding-block: 0px;
  }
  textarea {
    font-size: 0.89rem;
    line-height: 1.66;
  }
  input::placeholder {
    color: ${({ theme }) => theme.palette.secondary.main}91;
    font-weight: 600;
    opacity: 0.7;
    font-size: 0.85rem;
  }
  textarea::placeholder {
    color: ${({ theme }) => theme.palette.secondary.main}91;
    font-weight: 600;
    opacity: 0.7;
    font-size: 0.85rem;
  }
`

export default StyledTextField
