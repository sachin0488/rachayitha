// import AutoStoriesOutlinedIcon from '@mui/icons-material/AutoStoriesOutlined'
import styled from '@emotion/styled'
import React from 'react'
import Link from 'next/link'

const LogoBox = () => {
  return (
<<<<<<< HEAD
    <Root>
      <Link href={'/'}>
        <a>
          <LogoImage src="/long_logo.svg" />
        </a>
      </Link>
    </Root>
  )
}

const Root = styled.div`
  position: absolute;
  width: fit-content;
  top: 0;
  height: 120px;
  background: #ffffff;
  padding: 6px 6px 3px 5px;
  box-shadow: 1px 3px 38px 0px #0f012f16;
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;

  @media (max-width: 625px) {
    height: 100px;
  }
  @media (max-width: 445px) {
    height: 80px;
  }
  @media (max-width: 380px) {
    height: 75px;
  }
  @media (max-width: 355px) {
    height: 70px;
  }
  @media (max-width: 330px) {
    height: 60px;
  }
`
=======
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
>>>>>>> developement

// const Text = styled.div`
//   color: ${({ theme }) => theme.palette.primary.main};
//   font-weight: 700;
//   font-size: 1.3rem;
//   white-space: nowrap;
// `

const LogoImage = styled.img`
  height: 35px;
  height: 31px;
<<<<<<< HEAD
  height: 100%;
  width: auto;
  user-select: none;
  margin-top: -4px;
=======
  width: auto;
  margin-bottom: -4px;
  user-select: none;
>>>>>>> developement
`

export default LogoBox
