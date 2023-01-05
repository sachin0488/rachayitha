import styled from '@emotion/styled'
import { Typography } from '@mui/material'
import React from 'react'

const AboutTab = () => {
  return (
    <Root>
      <Label variant="h6" color="secondary">
        Synopsis
      </Label>
      <Synopsis>
        “Discovered the corpse of an ordinary human, loot to receive Super-strength Pill, extract?” <br />
        “Yes!” <br />
        “Yes!” <br />
        “Discovered the Demonic Body of the Hellbound Domination Emperor, loot to receive Sun-swallowing Cerberus,
        extract?”
      </Synopsis>
      <HashtagList>
        <Hashtag variant="subtitle2">#Adventure</Hashtag>
        <Hashtag variant="subtitle2">#Action</Hashtag>
      </HashtagList>
    </Root>
  )
}

const Root = styled.div`
  padding: 6px;
`

const Label = styled(Typography)``

const Synopsis = styled(Typography)`
  margin-top: 5px;
  color: ${({ theme }) => theme.palette.secondary.main}ee;
`

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
