import styled from '@emotion/styled'

import { useController, useFormContext } from 'react-hook-form'
import { Rating, Typography } from '@mui/material'

import StarIcon from '@mui/icons-material/Star'

const StyledRatingField = ({ name, label, rules, required, ...props }) => {
  const { control } = useFormContext()

  const { field } = useController({
    name,
    control,
    defaultValue: '',
    rules: {
      required: required,
      ...rules,
    },
  })

  return (
    <Root>
      <Label variant="subtitle2" color="secondary">
        {label}
      </Label>

      <Rating
        size="large"
        name={field.name}
        color="primary"
        value={field.value}
        precision={0.5}
        onChange={(_, newValue) => {
          field.onChange(newValue)
        }}
        sx={{ color: theme => theme.palette.primary.main }}
        emptyIcon={<StarIcon fontSize="inherit" sx={{ color: theme => theme.palette.primary.main + '39' }} />}
      />
    </Root>
  )
}

const Root = styled.div`
  display: flex;
  gap: 9px;
  flex-direction: column;
`

const Label = styled(Typography)`
  font-weight: 600;
  color: ${({ theme }) => theme.palette.secondary.main};
  line-height: 1;
`

export default StyledRatingField
