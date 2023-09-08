import Link from 'next/link'
import styled from '@emotion/styled'
import { Button } from '@mui/material'
import { useRouter } from 'next/router'
import { useLayoutStore } from 'Layout/store'

const StyledNavButton = ({ Icon, label, link, path, onClick }) => {
  const router = useRouter()
  const sidebarClose = useLayoutStore(state => state.sidebar.close)

  return (
    <Root>
      <Line />
      <Main>
        <Link href={link}>
          <a>
            <StyledButton onClick={sidebarClose} className={router.pathname === link && 'selected'}>
              {label}
            </StyledButton>
          </a>
        </Link>
      </Main>
    </Root>
  )
}

const IconStyle = {}

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

const StyledButton = styled(Button)`
  font-weight: 500;
  font-size: 1rem;
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
    border-left: 2px solid ${({ theme }) => theme.palette.primary.main};
  }
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

export default StyledNavButton
