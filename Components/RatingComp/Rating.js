import React from "react";
import { Rating } from "@mui/material";

const RatingStar = ({ value, size }) => {
  return (
    <>
      <Rating name="read-only" value={value} readOnly size={size} />
    </>
  );
};

export default RatingStar;
