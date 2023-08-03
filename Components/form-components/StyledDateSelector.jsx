import { AdapterMoment } from '@mui/x-date-pickers/AdapterMoment'
import { LocalizationProvider, DatePicker } from '@mui/x-date-pickers'
import { useController, useFormContext } from 'react-hook-form'
import styled from '@emotion/styled'

const StyledDateSelector = ({ name, label, rules, required, ...props }) => {
  const { control, errors } = useFormContext()

  const { field } = useController({
    name,
    control,
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
    label: label,
    required: required || Boolean(rules?.required),
    disableFuture: true,
    value: field.value,
    name: field.fieldName,
    inputRef: field.ref,
    onBlur: field.onBlur,
    onChange: field.onChange,
    format: 'DD/MM/YYYY',
  }

  return (
    <LocalizationProvider dateAdapter={AdapterMoment}>
      <StyledDatePicker {...rootProps} slotProps={{ textField: { size: 'medium' } }} {...props} />
    </LocalizationProvider>
  )
}

const StyledDatePicker = styled(DatePicker)`
  .MuiInputBase-input {
    box-shadow: black !important;
  }

  .MuiFormLabel-root {
    font-size: 0.94rem;
    line-height: 1.245;
  }

  .MuiFormLabel-asterisk {
    font-size: 0.84rem;
    line-height: 1;
  }

  .MuiOutlinedInput-root {
    font-size: 0.81rem;
  }

  .MuiOutlinedInput-input {
    padding: 8.5px 14px;
    -webkit-autofill {
      box-shadow: none;
      -webkit-text-fill-color: none;
    }
  }

  .MuiOutlinedInput-notchedOutline {
    border-color: ${({ theme }) => theme.palette.text.tertiary}93;
    border-width: 1.5px;
  }

  .MuiSvgIcon-root {
    color: ${({ theme }) => theme.palette.text.icon};
  }
`

export default StyledDateSelector
