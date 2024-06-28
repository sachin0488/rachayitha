import styled from '@emotion/styled'
import { FormControlLabel, Checkbox, Typography } from '@mui/material'
import Link from 'next/link'
import { useController, useFormContext } from 'react-hook-form'

const TermsAndPrivacyPolicyCheckbox = ({ name, label, ...props }) => {
  const formContext = useFormContext()
  const { control, errors } = formContext

  const { field } = useController({
    name,
    control,
  })

  const errorMessage = errors?.[name]?.message
  const isError = Boolean(errorMessage)

  const checkboxProps = {
    size: 'small',
    error: isError ? isError : undefined,
    name: name,
    onBlur: field.onBlur,
    checked: field.value,
    ref: field.ref,
    onChange: event => field.onChange(event.target.checked),
    ...props,
  }

  return (
    <Root>
      <StyledFormControlLabel control={<Checkbox {...checkboxProps} />} />
      <StyledText variant="subtitle2" color="secondary">
        I agree to the{' '}
        <Link href="/terms-and-conditions">
          <a>Terms of Service</a>
        </Link>{' '}
        and{' '}
        <Link href="/privacy-policy">
          <a>Privacy Policy</a>
        </Link>{' '}
        !
      </StyledText>
    </Root>
  )
}

export default TermsAndPrivacyPolicyCheckbox

const Root = styled.div`
  display: flex;
  align-items: center;
  @media (min-width: 621px) {
    /* background: ${({ theme }) => theme.palette.primary.main}09; */
    border-radius: 8px;
    padding-right: 13px;
  }
`
const StyledText = styled(Typography)`
  font-weight: 600;
  letter-spacing: 0.25px;
  line-height: 1.7;
  a {
    color: ${({ theme }) => theme.palette.primary.main};
  }
`

const StyledFormControlLabel = styled(FormControlLabel)`
  .MuiFormControlLabel-label {
    font-size: 0.95rem;
    line-height: 1.7;
    font-weight: 500;
    color: ${({ theme }) => theme.palette.secondary.main};
  }
  &.MuiFormControlLabel-root {
    margin-right: 5px;
    margin-left: 0px;
  }
`
