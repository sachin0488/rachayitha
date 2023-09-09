// import AutoStoriesOutlinedIcon from '@mui/icons-material/AutoStoriesOutlined'
import styled from '@emotion/styled'
import React from 'react'
import Link from 'next/link'

const LogoBox = () => {
  return (
    <Link href={'/'}>
      <a>
        {/* <Root>
          <AutoStoriesOutlinedIcon
            style={{
              fontSize: 29,
            }}
          />
          <Text>E Book</Text>
        </Root> */}
        <LogoImage src="/rachayitha_logo_500.svg" />
      </a>
    </Link>
  )
}

// const Root = styled.div`
//   display: flex;
//   align-items: center;
//   gap: 8px;
//   color: ${({ theme }) => theme.palette.secondary.main};
// `

// const Text = styled.div`
//   color: ${({ theme }) => theme.palette.primary.main};
//   font-weight: 700;
//   font-size: 1.3rem;
//   white-space: nowrap;
// `

const LogoImage = styled.img`
  height: 35px;
  height: 31px;
  width: auto;
  margin-bottom: -4px;
  user-select: none;
`

export default LogoBox
