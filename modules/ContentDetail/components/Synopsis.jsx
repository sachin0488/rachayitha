import styled from '@emotion/styled'
import { Typography } from '@mui/material'
import clsx from 'clsx'

const SynopsisRoot = styled(Typography)`
  color: ${({ theme }) => theme.palette.secondary.main}ee;
  font-family: 'Noto Sans', sans-serif;
  line-height: 1.62;
  font-style: italic;
  letter-spacing: -0.16px;
  text-align: justify;
  && {
    &.line-limiter {
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: ${({ max_line }) => max_line};
      line-clamp: ${({ max_line }) => max_line};
    }
  }
`

const Synopsis = ({ children, maxLine, fontSize, ...props }) => {
  return (
    <SynopsisRoot
      variant="subtitle2"
      className={clsx({
        'line-limiter': Boolean(maxLine),
      })}
      max_line={maxLine}
      sx={{
        fontSize: fontSize || '0.96rem',
      }}
      {...props}>
      {children}
    </SynopsisRoot>
  )
}

export default Synopsis
