import React, { useState } from "react";
import { Box, Tabs, Tab, Typography } from "@mui/material";
import BookAboutContent from "./BookAboutContent";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 2 }}>
          <Typography color="black">{children}</Typography>
        </Box>
      )}
    </div>
  );
}

const MuiTab = ({ comp1, comp2, label1, label2 }) => {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <>
      <Box sx={{ width: "100%" }}>
        <Box sx={{}}>
          <Tabs
            value={value}
            onChange={handleChange}
            aria-label="basic tabs example"
            TabIndicatorProps={{
              style: {
                backgroundColor: "#D97D54",
                color: "#D97D54",
              },
            }}
          >
            <Tab
              label={label1}
              sx={{
                marginRight: "10px",
                fontSize: "15px",
                "@media (min-width: 430px)": {
                  marginRight: "30px",
                  fontSize: "20px",
                },
                "@media (min-width: 830px)": {
                  marginRight: "42px",
                },
              }}
            />
            <Tab
              label={label2}
              sx={{
                fontSize: "15px",
                "@media (min-width: 430px)": {
                  fontSize: "20px",
                },
              }}
            />
          </Tabs>
        </Box>

        <TabPanel value={value} index={0}>
          {comp1}
        </TabPanel>

        <TabPanel value={value} index={1}>
          {comp2}
        </TabPanel>
      </Box>
    </>
  );
};

export default MuiTab;
{
  /* <span style={{ color: "black", fontFamily: "museo500" }}>
"Black Label"
</span> */
}
