import React, { useState } from 'react'
import { Box, Tabs, Tab } from '@mui/material'
import TabPanel from './Tabpanel'

const MuiTabs = ({ muiTab, styles }) => {
  const [value, setValue] = useState(0)

  const handleChange = (event, newValue) => {
    setValue(newValue)
  }

  return (
    <>
      {muiTab?.map((tab, index) => (
        <Box sx={styles?.wrapper} key={index}>
          <Box sx={styles?.subWrapper}>
            <Tabs value={value} onChange={handleChange} aria-label="basic tabs example" sx={styles?.tabs}>
              {tab.labelComp?.map((label, index) => (
                <Tab label={label.label} key={index} />
              ))}
            </Tabs>
          </Box>
          {tab.component.map((comp, index) => (
            <TabPanel sx={styles?.tabPanel} value={value} index={comp.index} key={index}>
              {comp.com}
            </TabPanel>
          ))}
        </Box>
      ))}
    </>
  )
}

export default MuiTabs
