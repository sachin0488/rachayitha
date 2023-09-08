import styled from '@emotion/styled'

import { Typography } from '@mui/material'

const ComingSoon = ({ title, contentList, breakPoint }) => {
  return (
    <Root>
      <Main>
        <Typography variant="h2" color="secondary">
          Coming Soon
        </Typography>
      </Main>
    </Root>
  )
}

const Root = styled.div`
  display: flex;
  justify-content: center;
  position: relative;
  margin-top: 10px;
  width: 100%;
`

const Main = styled.div`
  width: 100%;
  max-width: var(--main-max-width);
  display: flex;
  flex-direction: column;
  padding-inline: var(--main-side-spacing);
  padding-block: 40px;
  gap: 10px;
  overflow: hidden;
`

export default ComingSoon
