import styled from '@emotion/styled'
import { FormControlLabel, Checkbox, Typography } from '@mui/material'
import Link from 'next/link'
import { useController, useFormContext } from 'react-hook-form'
import { useTranslation } from 'next-i18next'

const TermsAndPrivacyPolicyCheckbox = ({ name, label, ...props }) => {
  const { t } = useTranslation("common")
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
        {t('agree_to')}{' '}
        <Link href="/terms-and-conditions">
          <a>{t('terms_of_service')}</a>
        </Link>{' '}
        {t('and')}{' '}
        <Link href="/privacy-policy">
          <a>{t('privacy_policy')}</a>
        </Link>
      </StyledText>
    </Root>
  )
}

export default TermsAndPrivacyPolicyCheckbox

const Root = styled.div`
  display: flex;
  align-items: center;
  @media (min-width: 621px) {
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
