import styled from '@emotion/styled'
import { useTheme } from '@mui/material'
import React from 'react'

const Background = () => {
  const theme = useTheme()
  theme.palette.error.contrastText
  return (
    <Root>
      <svg width="136.74" height="118.958" viewBox="0 0 136.74 118.958" fill={theme.palette.primary.main + '0e'}>
        <path
          id="auto_stories_FILL0_wght400_GRAD0_opsz48"
          d="M60.165,91.4a53.023,53.023,0,0,0-13.748-6.838,48.784,48.784,0,0,0-15.334-2.434A46.92,46.92,0,0,0,20.177,83.4,51.956,51.956,0,0,0,9.932,86.991a5.7,5.7,0,0,1-5.354-.116A4.393,4.393,0,0,1,2,82.819V26.96a4.51,4.51,0,0,1,.727-2.434,4.4,4.4,0,0,1,2.181-1.738A60.22,60.22,0,0,1,17.6,18.615a65.827,65.827,0,0,1,28.488.348,61.588,61.588,0,0,1,14.079,5.215V82.819A57.907,57.907,0,0,1,74.31,77.083a59.5,59.5,0,0,1,14.938-1.912,72.979,72.979,0,0,1,10.377.811A35.658,35.658,0,0,1,110.4,79.343V20.817q1.322.464,2.578.927t2.446,1.043a5.988,5.988,0,0,1,2.115,1.8,3.985,3.985,0,0,1,.793,2.376v55.86a4.393,4.393,0,0,1-2.578,4.056,5.7,5.7,0,0,1-5.354.116A51.956,51.956,0,0,0,100.153,83.4a46.92,46.92,0,0,0-10.906-1.275,48.784,48.784,0,0,0-15.334,2.434A53.023,53.023,0,0,0,60.165,91.4ZM68.1,72.041V31.132L102.467,1V45.85Zm-15.863,7.3V28.466A38.978,38.978,0,0,0,41.79,25.221a62.607,62.607,0,0,0-10.708-1.043,54.643,54.643,0,0,0-11.567,1.159A50.481,50.481,0,0,0,9.932,28.35V79.343a52.3,52.3,0,0,1,9.981-3.071,56.018,56.018,0,0,1,11.3-1.1,54.367,54.367,0,0,1,11.1,1.1A52.618,52.618,0,0,1,52.233,79.343Zm0,0v0Z"
          transform="translate(-2.198 31.655) rotate(-16)"
        />
      </svg>
    </Root>
  )
}
const Root = styled.div`
  position: absolute;
  right: -20px;
  top: 60px;
  svg {
    transform: scale(1.9);
  }
`

export default Background