import styled from '@emotion/styled'
import { Button, ButtonBase, Typography } from '@mui/material'
import { useLayoutStore } from 'Layout/store'
import Link from 'next/link'
import { useRouter } from 'next/router'

const StyledNavExpandButton = ({ label, menuList }) => {
  const sidebarClose = useLayoutStore(state => state.sidebar.close)
  const router = useRouter()

  return (
    <>
      <Root>
        <Line />
        <Main>
          <Title disabled>{label}</Title>
          {menuList.map((item, index) => (
            <StyledButton
              key={index}
              onClick={sidebarClose}
              className={router.pathname.includes(item.link) && 'selected'}>
              <Link href={item.link}>
                <a>{item.label}</a>
              </Link>
            </StyledButton>
          ))}
        </Main>
      </Root>
    </>
  )
}

// const Root = styled(Button)`
//   font-weight: 500;
//   font-size: 1rem;
//   padding: 5px 13px;
//   /* box-shadow: 3px 3px 10px -0.5px ${({ theme }) => theme.palette.primary.main}30; */
//   color: ${({ theme }) => theme.palette.secondary.main};
//   border-radius: 8px;
//   transition: box-shadow 0.35s ease-in-out;
//   text-transform: capitalize;
//   letter-spacing: 0.5px;
//   &:hover {
//     background: ${({ theme }) => theme.palette.primary.main}01;
//     color: ${({ theme }) => theme.palette.primary.main};
//     /* box-shadow: 3px 3px 12px 0px ${({ theme }) => theme.palette.primary.main}59; */
//   }
//   .MuiButton-startIcon {
//     margin-right: 4x;
//     margin-left: -4px;
//   }
//   .MuiButton-endIcon {
//     margin-right: -4px;
//     margin-left: 4px;
//   }
//   &.selected {
//     color: ${({ theme }) => theme.palette.primary.main};
//   }
// `

const Root = styled.div`
  display: flex;
`
const Main = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`

const Line = styled.div`
  width: 2px;
  height: 100%;
  background: ${({ theme }) => theme.palette.secondary.main}41;
`
const Title = styled(Button)`
  font-weight: 500;
  font-size: 0.95rem;
  white-space: nowrap;
  padding: 5px 13px;
  /* box-shadow: 3px 3px 10px -0.5px ${({ theme }) => theme.palette.primary.main}30; */
  color: ${({ theme }) => theme.palette.secondary.main};
  border-radius: 8px;
  transition: box-shadow 0.35s ease-in-out;
  text-transform: capitalize;
  letter-spacing: 0.5px;
  &:hover {
    background: ${({ theme }) => theme.palette.primary.main}01;
    color: ${({ theme }) => theme.palette.primary.main};
    /* box-shadow: 3px 3px 12px 0px ${({ theme }) => theme.palette.primary.main}59; */
  }
  width: 100%;
  text-align: left;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  .MuiButton-startIcon {
    margin-right: 4x;
    margin-left: -4px;
  }
  .MuiButton-endIcon {
    margin-right: -4px;
    margin-left: 4px;
  }
  &.selected {
    color: ${({ theme }) => theme.palette.primary.main};
  }
  &.Mui-disabled {
    color: ${({ theme }) => theme.palette.primary.main}71;
  }
`
const StyledButton = styled(Button)`
  font-weight: 500;
  font-size: 0.95rem;
  white-space: nowrap;
  padding: 5px 13px;
  /* box-shadow: 3px 3px 10px -0.5px ${({ theme }) => theme.palette.primary.main}30; */
  color: ${({ theme }) => theme.palette.secondary.main};
  border-radius: 8px;
  border-top-left-radius: 0px;
  border-bottom-left-radius: 0px;
  transition: box-shadow 0.35s ease-in-out;
  text-transform: capitalize;
  letter-spacing: 0.5px;
  &:hover {
    background: ${({ theme }) => theme.palette.primary.main}01;
    color: ${({ theme }) => theme.palette.primary.main};
    /* box-shadow: 3px 3px 12px 0px ${({ theme }) => theme.palette.primary.main}59; */
    border-left: 2px solid ${({ theme }) => theme.palette.primary.main};
  }
  width: 100%;
  text-align: left;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  .MuiButton-startIcon {
    margin-right: 4x;
    margin-left: -4px;
  }
  .MuiButton-endIcon {
    margin-right: -4px;
    margin-left: 4px;
  }
  border-left: 2px solid transparent;
  margin-left: -2px;
  &.selected {
    border-left: 2px solid ${({ theme }) => theme.palette.primary.main};
    color: ${({ theme }) => theme.palette.primary.main};
  }
`

export default StyledNavExpandButton
