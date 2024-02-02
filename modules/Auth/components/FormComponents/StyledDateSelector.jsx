import { AdapterMoment } from '@mui/x-date-pickers/AdapterMoment'
import { LocalizationProvider, DatePicker } from '@mui/x-date-pickers'
import { useController, useFormContext } from 'react-hook-form'
import styled from '@emotion/styled'
import moment from 'moment'
import { Typography } from '@mui/material'

const StyledDateSelector = ({ name, label, rules, required, ...props }) => {
  const { control, errors } = useFormContext()

  const { field } = useController({
    name,
    control,
    defaultValue: null,
    rules: {
      valueAsDate: true,
      required: required,
      ...rules,
    },
  })

  const errorMessage = errors?.[name]?.message
  const isError = Boolean(errorMessage)

  const rootProps = {
    size: 'medium',
    error: isError ? isError : undefined,
    // label: label,
    required: required || Boolean(rules?.required),
    disableFuture: true,
    value: field.value ? moment(field.value) : null,
    openTo: 'year',
    name: field.fieldName,
    inputRef: field.ref,
    onBlur: field.onBlur,
    onChange: field.onChange,
  }

  return (
    <Root>
      <Label variant="subtitle2" color="secondary">
        {label}
      </Label>
      <LocalizationProvider dateAdapter={AdapterMoment}>
        <StyledDatePicker {...rootProps} slotProps={{ textField: { size: '' } }} {...props} />
      </LocalizationProvider>
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

const StyledDatePicker = styled(DatePicker)`
  .MuiInputBase-input {
    box-shadow: black !important;
  }

  .MuiFormLabel-root {
    font-size: 0.9rem;
    color: ${({ theme }) => theme.palette?.secondary?.main}d1;
    font-weight: 600;
    line-height: 1;
  }

  .MuiFormLabel-asterisk {
    font-size: 0.9rem;
  }

  .MuiOutlinedInput-root {
    font-size: 0.81rem;
  }

  .MuiOutlinedInput-input {
    padding-inline: 14px;
    padding-block: 10px 10px;
    -webkit-autofill {
      box-shadow: none;
      -webkit-text-fill-color: none;
    }
  }

  .MuiOutlinedInput-notchedOutline {
    border-color: ${({ theme }) => theme.palette?.secondary?.main}35;
    border-width: 2px;
  }

  .MuiSvgIcon-root {
    color: ${({ theme }) => theme.palette.text.icon};
  }
  input::placeholder {
    color: ${({ theme }) => theme.palette.secondary.main}91;
    font-weight: 600;
    opacity: 0.7;
    font-size: 0.85rem;
  }
`

export default StyledDateSelector
