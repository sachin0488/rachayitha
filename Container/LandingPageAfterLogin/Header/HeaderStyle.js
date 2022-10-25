import React from "react";
import styled from "@emotion/styled";
import { Box, Typography, TextField } from "@mui/material";

const HeaderContent = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 10px;
  align-items: center;
  height: 100px;
  width: 100%;
  padding: 0px 70px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.1);
`;
const LogoContainer = styled.div`
  display: flex;
  justify-content: start;
  padding: 0 15px;
  align-items: center;
  width: 20%;
  height: 100%;
  font-size: 40px;
  gap: 14px;
`;

const LogoTitle = styled(Typography)`
  font-size: 25px;
  color: ${(props) => props.theme.palette.primary.main};
  font-weight: 600;
  line-height: 29px;
`;
const NavMenu = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 20px;
  width: 50%;
  font-size: 40px;
  color: ${(props) => props.theme.palette.secondary.main};
`;

const MenuItem = styled.div`
  display: flex;
  justify-content: center;
  gap: 2px;
  align-items: center;
  cursor: pointer;
`;

const Button = styled.button`
  font-family: "Roboto";
  font-style: normal;
  font-weight: 400;
  font-size: 17px;
  line-height: 20px;
  color: #2f2d5c;
  background-color: #ffffff;
  border: none;
`;

const SearchInputDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  border-radius: 23.5px;
  border: 2px solid #5121c0;
  width: 451px;
  height: 47px;
  padding: 0px 8px;
`;
const SearchInput = styled.input`
  width: 295px;
  background-color: white;
  border: none;
  outline: none;
  max-height: 35px;
  padding: 0 0px;
  font-weight: 100;
  font-size: 15px;
  line-height: 18px;
  color: black;
`;

const HeaderStyle = () => {
  return {
    HeaderContent,
    LogoContainer,
    LogoTitle,
    NavMenu,
    SearchInput,
    SearchInputDiv,
    MenuItem,
    Button,
  };
};

export default HeaderStyle;
