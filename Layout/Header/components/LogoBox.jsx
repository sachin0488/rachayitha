import AutoStoriesOutlinedIcon from '@mui/icons-material/AutoStoriesOutlined'
import styled from '@emotion/styled'
import React from 'react'

const LogoBox = () => {
  return (
    <Root>
      <AutoStoriesOutlinedIcon
        style={{
          fontSize: 29,
        }}
      />
      <Text>E Book</Text>
    </Root>
  )
}

const Root = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  color: #000000cb;
`

const Text = styled.div`
  color: ${({ theme }) => theme.palette.primary.main};
  font-weight: 700;
  font-size: 1.3rem;
  white-space: nowrap;
`

export default LogoBox
