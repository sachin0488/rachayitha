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

export default function MuiSelect({ label, menuItems, textColor, background }) {
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
          text_Color={textColor}
          back_ground={background}
          label={label}
          select
          value={content}
          onChange={handleChange}
          fullWidth
          // sx={{
          //   "& .MuiSvgIcon-root": {
          //     color: "white",
          //   },
          // }}
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
}

const StyledSelect = styled(Select)`
  &${selectClasses.root} {
    color: ${({ text_Color }) => text_Color || "white"};
    background-color: ${({ back_ground }) => back_ground || "transparent"};
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
    height: 40px;
  }
  & .MuiInputBase-root {
    margin-top: 4px;
  }
  & .MuiSelect-select {
    background-color: transparent;
  }
`;
