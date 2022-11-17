import * as React from "react";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";

const RadioGroupMui = () => {
  return (
    <>
      <FormControl>
        {/* <FormLabel id="demo-row-radio-buttons-group-label">Gender</FormLabel> */}
        <RadioGroup
          row
          aria-labelledby="demo-row-radio-buttons-group-label"
          name="row-radio-buttons-group"
        >
          <FormControlLabel
            value="female"
            sx={{ color: "#673CCB", fontWeight: "600" }}
            control={<Radio />}
            label="MALE"
          />
          <FormControlLabel
            value="male"
            control={<Radio />}
            sx={{ color: "#F450AE", fontWeight: "600" }}
            label="FEMALE"
          />
          {/* <FormControlLabel value="other" control={<Radio />} label="Other" /> */}
        </RadioGroup>
      </FormControl>
    </>
  );
};

export default RadioGroupMui;
