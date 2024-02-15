import styled from '@emotion/styled'
import { Typography } from '@mui/material'

const ParagraphRoot = styled(Typography)`
  letter-spacing: 0.3px;
  line-height: 1.55;
  padding-top: 15px;
`

const Paragraph = ({ children, ...props }) => {
  return (
    <ParagraphRoot variant="body1" {...props}>
      {children}
    </ParagraphRoot>
  )
}

export default Paragraph
