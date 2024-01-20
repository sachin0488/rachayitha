import styled from '@emotion/styled'
import { RadioGroup } from '@mui/material'
import { useController, useFormContext } from 'react-hook-form'

export default function StyledRadioGroup({ name, children, ...props }) {
  const formContext = useFormContext()
  const { control, errors } = formContext

  const { field } = useController({
    name,
    control,
    defaultValue: '',
  })

  const errorMessage = errors?.[name]?.message
  const isError = Boolean(errorMessage)

  const radioGroupProps = {
    size: 'small',
    error: isError ? isError : undefined,
    name: name,
    onBlur: field.onBlur,
    defaultValue: field.value || '',
    value: field.value,
    ref: field.ref,
    onChange: field.onChange,
    ...props,
  }

  return (
    <Root {...radioGroupProps} sx={{ flexDirection: 'column', padding: '12px 10px' }}>
      {children}
    </Root>
  )
}

const Root = styled(RadioGroup)``
