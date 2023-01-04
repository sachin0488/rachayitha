import React, { useState } from 'react'
import { Box, Tabs, Tab, Typography } from '@mui/material'
import TabPanel from './Tabpanel'

const MuiGenreLeadTab = ({ muiTab, styles, setGenreLead }) => {
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
                <Tab label={label.label} onClick={() => setGenreLead(label.genre_lead)} key={index} />
              ))}
            </Tabs>
          </Box>
          {tab.component.map((comp, index) => (
            <TabPanel value={value} index={comp.index} key={index}>
              {comp.com}
            </TabPanel>
          ))}
        </Box>
      ))}
    </>
  )
}

export default MuiGenreLeadTab
