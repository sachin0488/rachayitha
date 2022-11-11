import React, { useState } from "react";
import { Box, Tabs, Tab } from "@mui/material";
import TabPanel from "./Tabpanel";

const MuiTabs = ({ muiTab, styles }) => {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
      {muiTab?.map((tab) => (
        <Box sx={styles?.wrapper}>
          <Box sx={styles?.subWrapper}>
            <Tabs
              value={value}
              onChange={handleChange}
              aria-label="basic tabs example"
              sx={styles?.tabs}
            >
              {tab.labelComp?.map((label) => (
                <Tab label={label.label} />
              ))}
            </Tabs>
          </Box>
          {tab.component.map((comp) => (
            <TabPanel sx={styles?.tabPanel} value={value} index={comp.index}>
              {comp.com}
            </TabPanel>
          ))}
        </Box>
      ))}
    </>
  );
};

export default MuiTabs;
