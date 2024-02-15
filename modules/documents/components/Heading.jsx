import styled from '@emotion/styled'
import { Typography } from '@mui/material'
import clsx from 'clsx'

const HeadingRoot = styled(Typography)`
  margin-top: 50px;
  margin-bottom: 10px;
  &.main {
    margin-top: 10px;
  }
  @media (max-width: 558px) {
    margin-top: 25px;
    font-size: 36px;
  }
  @media (max-width: 480px) {
    font-size: 30px;
  }
  @media (max-width: 381px) {
    font-size: 28px;
  }
  @media (max-width: 358px) {
    font-size: 25px;
  }
`

const Heading = ({ children, main, ...props }) => {
  return (
    <HeadingRoot
      color="secondary"
      className={clsx({
        main,
      })}
      variant={main ? 'h3' : 'h4'}
      fontSize={44}
      fontWeight={700}
      {...props}>
      {children}
    </HeadingRoot>
  )
}

export default Heading
