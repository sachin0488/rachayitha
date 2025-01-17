import styled from '@emotion/styled'
import { Typography } from '@mui/material'
import { laptop, mobileL, mobileM, mobileS, tablet, tabletS } from '../../../../styles/mediaQuery/breakPoints'

export const Heading = styled(Typography)`
  text-align: center;
  color: ${props => props.theme.palette.secondary.main};
  font-weight: 800;
  font-size: 4.5em;
  line-height: 1.35;
  span {
    display: block;
    background: linear-gradient(50deg, rgb(37 0 124) 0%, rgb(162 122 255) 100%);
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
  @media (max-height: 900px) {
    font-size: 3.2em;
  }
  @media (max-width: 800px) {
    font-size: 4.5em;
  }
`

export const SubHeading = styled(Typography)`
  font-weight: 300;
  font-size: 1.75em;
  text-align: center;
  color: ${props => props.theme.palette.secondary.main};

  @media (max-width: 500px) {
    font-size: 2.3em;
  }

  @media (max-height: 900px) {
    font-size: 1.5em;
  }
`
