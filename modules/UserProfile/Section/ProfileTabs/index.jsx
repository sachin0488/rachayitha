import { useCallback, useEffect, useState } from 'react'
import styled from '@emotion/styled'

import { Tab, tabClasses, Tabs, tabsClasses, useMediaQuery, useTheme } from '@mui/material'

import WorkTab from './Tabs/WorkTab'
import AchievementTab from './Tabs/AchievementTab'
import LibraryTab from './Tabs/LibraryTab'
import BoughtTab from './Tabs/BoughtTab'
import TransactionHistoryTab from './Tabs/TransactionHistoryTab'

const ProfileTabs = ({ item }) => {
  const theme = useTheme()
  const isMobile = useMediaQuery('(max-width: 1030px)')
  const [value, setValue] = useState(0)
  const [secondValue, setSecondValue] = useState(0)

  const handleChange = useCallback((event, newValue) => {
    setValue(newValue)
  }, [])

  const handleSecondChange = useCallback((event, newValue) => {
    setSecondValue(newValue)
  }, [])

  useEffect(() => {
    if (isMobile) {
      setValue(0)
      setSecondValue(0)
    }
  }, [isMobile])

  if (isMobile) {
    return (
      <Root>
        <StyledTabs variant="standard" value={value} onChange={handleChange} aria-label="Comment List">
          <StyledTab label="Library" {...a11yProps(0)} />
          <StyledTab label="Bought Product" {...a11yProps(1)} />
          <StyledTab label="Transaction History" {...a11yProps(2)} />
        </StyledTabs>
        <TabPanel value={value} index={0}>
          <LibraryTab item={item} />
        </TabPanel>

        <TabPanel value={value} index={1}>
          <BoughtTab item={item} />
        </TabPanel>

        <TabPanel value={value} index={2}>
          <TransactionHistoryTab item={item} />
        </TabPanel>
        <StyledTabs value={secondValue} onChange={handleSecondChange} aria-label="Comment List">
          <StyledTab label="Achievement" {...a11yProps(0)} />
          <StyledTab label="Original Work" {...a11yProps(1)} />
        </StyledTabs>
        <TabPanel value={secondValue} index={0}>
          <AchievementTab item={item} />
        </TabPanel>

        <TabPanel value={secondValue} index={1}>
          <WorkTab item={item} />
        </TabPanel>
      </Root>
    )
  }

  return (
    <Root>
      <StyledTabs variant="standard" value={value} onChange={handleChange} aria-label="Comment List">
        <StyledTab label="Library" {...a11yProps(0)} />
        <StyledTab label="Bought Product" {...a11yProps(1)} />
        <StyledTab label="Transaction History" {...a11yProps(2)} />
        <StyledTab label="Achievement" {...a11yProps(3)} />
        <StyledTab label="Original Work" {...a11yProps(4)} />
      </StyledTabs>
      <TabPanel value={value} index={0}>
        <LibraryTab item={item} />
      </TabPanel>

      <TabPanel value={value} index={1}>
        <BoughtTab item={item} />
      </TabPanel>

      <TabPanel value={value} index={2}>
        <TransactionHistoryTab item={item} />
      </TabPanel>

      <TabPanel value={value} index={3}>
        <AchievementTab item={item} />
      </TabPanel>

      <TabPanel value={value} index={4}>
        <WorkTab item={item} />
      </TabPanel>
    </Root>
  )
}

const Root = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-top: 20px;
`

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
    font-weight: 600;
    border-radius: 12px;
    min-height: 40px;
    padding: 0px 10px;
  }

  &.${tabClasses.selected} {
    color: ${({ theme }) => theme.palette.primary.main};
    z-index: 1;
  }

  transition: 0.1s ease-in 150ms;
`

const StyledTabs = styled(Tabs)`
  overflow: visible;
  display: flex;
  width: fit-content;
  & .${tabsClasses.flexContainer} {
    border: 1px solid ${({ theme }) => theme.palette.primary.main}1a;
    border-radius: 13px;
    display: flex;
    justify-content: space-between;
    width: 100%;
    align-items: center;
    height: 40px;
    gap: 20px;
  }

  @media (max-width: 530px) {
    width: 100%;
    & .${tabsClasses.flexContainer} {
      gap: 0px;
    }
  }

  & .${tabsClasses.scroller} {
    overflow: visible;
    height: 40px;
  }

  & .${tabsClasses.indicator} {
    background: ${({ theme }) => theme.palette.primary.main}1a;
    height: 3px;
    height: 100%;
    border-radius: 12px;
    font-weight: 500;
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

export default ProfileTabs
