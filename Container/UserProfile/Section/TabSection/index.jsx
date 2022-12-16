import styled from '@emotion/styled'
import { TabDisplay, TabNav, useStyledTab } from '../../../../Components/StyledTabComponents'
import React from 'react'
import UserLibrary from '../MuiTabComponents/UserLibrary'
import Badges from '../MuiTabComponents/Badges'
import UserWorks from '../MuiTabComponents/UserWorks'

const TabSection = () => {
  const section = [
    <Wrapper key={1}>
      <UserLibrary />
    </Wrapper>,
    <Wrapper key={2}>Badges</Wrapper>,
    <Wrapper key={3}>
      <UserWorks />
    </Wrapper>,
  ]
  const tabButtonList = ['Library', 'Activity', 'Original Works']
  const flexSizeEnable = [35, 60]

  const { TabNavProps, TabDisplayProps } = useStyledTab({
    section,
    tabButtonList,
    flexSizeEnable,
    ariaLabel: 'TabSection',
  })

  return (
    <Root>
      <TabNav {...TabNavProps} />
      <TabDisplay {...TabDisplayProps} />
    </Root>
  )
}

const Root = styled.div``

export default TabSection

const Wrapper = styled.div`
  padding-top: 25px;
`
