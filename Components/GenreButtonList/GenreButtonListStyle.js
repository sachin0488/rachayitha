import styled from "@emotion/styled";
import { Box } from "@mui/material";
import React from "react";

const GenreButtonListWrapper = styled(Box)`
  width: 100%;
  height: 200px;
  display: flex;
  gap: 30px;
  justify-content: flex-start;
  align-items: flex-start;
  flex-wrap: wrap;
`;

const GenreButtonListStyle = () => {
  return { GenreButtonListWrapper };
};

export default GenreButtonListStyle;
