import styled from '@emotion/styled'
import { Typography } from '@mui/material'
import Synopsis from 'modules/ContentDetail/components/Synopsis'
import React from 'react'

const AboutTab = ({ tags, synopsis }) => {
  return (
    <Root>
      <Label variant="h6" component="div" color="secondary">
        Synopsis
      </Label>
      <Synopsis variant="subtitle2">{synopsis}</Synopsis>
      <HashtagList>
        {tags?.map(name => (
          <Hashtag variant="subtitle2" key={name}>
            #{name}
          </Hashtag>
        ))}
      </HashtagList>
    </Root>
  )
}

const Root = styled.div`
  padding: 6px;
  min-height: 250px;
  @media (max-width: 800px) {
    min-height: auto;
  }
`

const Label = styled(Typography)``

const HashtagList = styled.div`
  display: flex;
  gap: 8px;
  align-items: center;
`

const Hashtag = styled(Typography)`
  font-weight: 400;
  margin-top: 10px;
  color: ${({ theme }) => theme.palette.primary.main};
`

export default AboutTab
