import styled from '@emotion/styled'
import { Typography } from '@mui/material'
import clsx from 'clsx'

const SynopsisRoot = styled(Typography)`
  color: ${({ theme }) => theme.palette.secondary.main}ee;
  font-family: 'Noto Sans', sans-serif;
  line-height: 1.7;
  font-style: italic;
  /* letter-spacing: -0.1px; */
  /* text-align: justify; */
  && {
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-box-orient: vertical;

    -webkit-line-clamp: 3;
    line-clamp: 3;

    @media (min-width: 1500px) {
      -webkit-line-clamp: 4;
      line-clamp: 4;
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
      {...props}>
      {children}
    </SynopsisRoot>
  )
}

export default Synopsis
