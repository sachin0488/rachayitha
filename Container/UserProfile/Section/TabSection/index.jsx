import styled from '@emotion/styled'
import { TabDisplay, TabNav, useStyledTab } from 'components/StyledTabComponents'
import React from 'react'

const TabSection = () => {
  const section = [<div key={1}>Main</div>, <div key={2}>Alarms</div>]
  const tabButtonList = ['Main', 'Alarms']
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
