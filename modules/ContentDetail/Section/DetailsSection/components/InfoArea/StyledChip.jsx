import styled from '@emotion/styled'
import { Typography } from '@mui/material'
import clsx from 'clsx'
import React from 'react'

const StyledChip = ({ label, Icon, contained }) => {
  return (
    <Root
      className={clsx({
        contained: contained,
      })}>
      {Icon && <Icon />}
      <Label variant="subtitle2" textTransform="capitalize">
        {label}
      </Label>
    </Root>
  )
}

const Root = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  padding: 4px 8px 4px 7px;
  border-radius: 8px;
  background: ${({ theme }) => theme.palette.primary.main}11;
  .MuiSvgIcon-root {
    font-size: 20px;
    color: ${({ theme }) => theme.palette.primary.main};
  }
  &.contained {
    background: ${({ theme }) => theme.palette.primary.main};
    color: white;
  }
`

const Label = styled(Typography)``

export default StyledChip
