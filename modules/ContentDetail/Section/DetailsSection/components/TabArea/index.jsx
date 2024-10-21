import React, { useCallback } from 'react'
import styled from '@emotion/styled'
import { Tab, tabClasses, Tabs, tabsClasses } from '@mui/material'
import AboutTab from './AboutTab'
import ChapterListTab from './ChapterListTab'
import { useContentDetailsService } from 'modules/ContentDetail/services/ContentDetails.service'
import { useTranslation } from 'react-i18next'

const TabArea = ({ contentType, slug, contentId }) => {
  const { t } = useTranslation()
  const { Data } = useContentDetailsService({ contentId: contentId, contentType })

  const [value, setValue] = React.useState(0)

  const handleChange = useCallback((event, newValue) => {
    setValue(newValue)
  }, [])

  return (
    <Root>
      <StyledTabs value={value} onChange={handleChange} aria-label="basic tabs example">
        <StyledTab label={t('tab_area_about')} {...a11yProps(0)} />
        <StyledTab label={t('tab_area_table_of_contents')} {...a11yProps(1)} />
      </StyledTabs>

      <TabPanel value={value} index={0}>
        <AboutTab tags={Data?.tags} synopsis={Data?.synopsis}  />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <ChapterListTab chapterList={Data?.chapterList} contentId={contentId} contentType={contentType} slug={slug} />
      </TabPanel>
    </Root>
  )
}

const Root = styled.div`
  --main-height: 40px;
  --bottom-spacing: 4px;
  @media (max-width: 800px) {
    margin-top: 10px;
  }
`

const TabPanel = ({ children, value, index }) => {
  return <>{value === index ? children : <></>}</>
}

const a11yProps = index => {
  return {
    id: `tab-${index}`,
    'aria-controls': `tabpanel-${index}`,
  }
}

const StyledTab = styled(Tab)`
  display: flex;
  justify-content: start;
  color: ${({ theme }) => theme.palette.text.icon};
  text-transform: capitalize;
  font-weight: 500;

  &.${tabClasses.root} {
    color: ${({ theme }) => theme.palette.secondary.main};
    display: flex;
    flex-direction: row;
    gap: 8px;
    align-items: center;
    justify-content: center;
    white-space: nowrap;
    font-weight: 500;
  }

  &.${tabClasses.selected} {
    color: ${({ theme }) => theme.palette.primary.main};
  }

  transition: 0.1s ease-in 150ms;
`

const StyledTabs = styled(Tabs)`
  overflow: visible;
  display: flex;

  @media (max-width: 530px) {
    width: 90%;
  }
  & .${tabsClasses.flexContainer} {
    display: flex;
    gap: 20px;
  }

  & .${tabsClasses.scroller} {
    overflow: visible;
  }

  & .${tabsClasses.indicator} {
    background: ${({ theme }) => theme.palette.primary.main};
    height: 3px;
    border-radius: 2px;
    z-index: 1;
    font-weight: 500;
  }
`

export default TabArea
