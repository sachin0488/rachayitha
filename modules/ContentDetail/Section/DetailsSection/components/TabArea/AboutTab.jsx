import styled from '@emotion/styled'
import { Typography } from '@mui/material'
import Synopsis from 'modules/ContentDetail/components/Synopsis'
import React from 'react'
import { useTranslation } from 'react-i18next'

const AboutTab = ({ tags, synopsis }) => {
  const { t } = useTranslation()

  return (
    <Root>
      <Label variant="h6" component="div" color="secondary">
        {t('about_tab_synopsis')}
      </Label>
      <Synopsis variant="subtitle2" component="p">
        {synopsis}
      </Synopsis>
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
