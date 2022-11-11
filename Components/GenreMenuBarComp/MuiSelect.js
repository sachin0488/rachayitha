import styled from "@emotion/styled";
import {
  FormControl,
  formControlClasses,
  InputLabel,
  MenuItem,
  Select,
  selectClasses,
} from "@mui/material";
import React, { useState } from "react";
import { laptop } from "../../styles/mediaQuery/breakPoints";

const MuiSelect = ({ label, menuItems }) => {
  const [content, setContent] = useState("");
  const handleChange = (event) => {
    setContent(event.target.value);
  };
  return (
    <>
      <StyledFormControl variant="standard">
        <StyledInputLabel id="demo-simple-select-standard-label">
          {label}
        </StyledInputLabel>
        <StyledSelect
          label={label}
          select
          value={content}
          onChange={handleChange}
          fullWidth
          sx={{
            "& .MuiSvgIcon-root": {
              color: "white",
            },
          }}
          variant="standard"
          disableUnderline
        >
          {menuItems.map((items) => (
            <MenuItem value={items.value}>{items.name}</MenuItem>
          ))}
        </StyledSelect>
      </StyledFormControl>
    </>
  );
};

export default MuiSelect;

const StyledSelect = styled(Select)`
  &${selectClasses.root} {
    color: white;
    background-color: transparent;
  }
`;

const StyledInputLabel = styled(InputLabel)`
  color: white;

  font-size: 14px;
  @media ${laptop} {
    font-size: large;
  }
`;

const StyledFormControl = styled(FormControl)`
  &.${formControlClasses.root} {
    min-width: 100%;
  }
`;
