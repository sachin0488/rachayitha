import React, { useState } from "react";
import { Box, Tabs, Tab, Typography } from "@mui/material";
import TabPanel from "./Tabpanel";
import Link from "next/link";

const MuiTabs = ({ muiTab, styles }) => {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleLink = () => {};

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
                <Tab label={label.label} onClick={handleLink} />
              ))}
            </Tabs>
          </Box>
          {tab.component.map((comp) => (
            <TabPanel value={value} index={comp.index}>
              {comp.com}
            </TabPanel>
          ))}
        </Box>
      ))}
    </>
  );
};

export default MuiTabs;
